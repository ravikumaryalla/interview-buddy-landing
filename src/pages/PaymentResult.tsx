import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { config } from '../config';

type Status = 'verifying' | 'redirecting' | 'error';

interface VerifyResponse {
  success: boolean;
  balance?: number;
  message?: string;
}

function redirectToApp(outcome: 'success' | 'failed', orderId: string) {
  window.location.href = `interviewbuddy://payment-${outcome}?orderId=${encodeURIComponent(orderId)}`;
}

export default function PaymentResult() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<Status>('verifying');

  const orderId = searchParams.get('orderId') ?? searchParams.get('order_id');

  useEffect(() => {
    if (!orderId) {
      setStatus('error');
      return;
    }

    // Retrieve the access token stored by the /pay page before Cashfree redirected
    const token = sessionStorage.getItem('ib_payment_token');

    if (!token) {
      setStatus('error');
      return;
    }

    let cancelled = false;

    async function verify() {
      try {
        const res = await fetch(`${config.api.url}/api/billing/verify`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ orderId }),
        });

        if (cancelled) return;

        if (!res.ok) {
          setStatus('error');
          return;
        }

        const data: VerifyResponse = await res.json();

        if (cancelled) return;

        setStatus('redirecting');

        // Clean up token from sessionStorage
        sessionStorage.removeItem('ib_payment_token');

        redirectToApp(data.success ? 'success' : 'failed', orderId!);
      } catch {
        if (!cancelled) setStatus('error');
      }
    }

    verify();
    return () => {
      cancelled = true;
    };
  }, [orderId]);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50 flex flex-col'>
      {/* Top bar */}
      <div className='border-b border-gray-100 bg-white/80 backdrop-blur-md'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between'>
          <Link to='/' className='flex items-center gap-2 group'>
            <div className='w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center'>
              <svg
                className='w-4 h-4 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                />
              </svg>
            </div>
            <span className='font-bold text-gray-900 text-base group-hover:text-violet-600 transition-colors'>
              {config.app.name}
            </span>
          </Link>
          <div className='flex items-center gap-1.5 text-xs text-gray-400'>
            <svg
              className='w-3.5 h-3.5 text-emerald-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
              />
            </svg>
            Secured by Cashfree
          </div>
        </div>
      </div>

      {/* Main */}
      <div className='flex-1 flex items-center justify-center px-4 py-16'>
        <div className='w-full max-w-sm text-center'>
          {/* Verifying / Redirecting */}
          {(status === 'verifying' || status === 'redirecting') && (
            <div className='bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-100/80 p-10'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl mb-6 shadow-lg shadow-violet-200'>
                <svg
                  className='w-8 h-8 text-white animate-spin'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  />
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
                  />
                </svg>
              </div>
              <h1 className='text-xl font-bold text-gray-900 tracking-tight'>
                {status === 'verifying'
                  ? 'Confirming your payment…'
                  : 'Opening Interview Buddy…'}
              </h1>
              {orderId && (
                <p className='text-xs text-gray-400 mt-2 font-mono'>
                  Order&nbsp;#{orderId}
                </p>
              )}
              <p className='text-sm text-gray-500 mt-2'>Please don't close this tab.</p>
            </div>
          )}

          {/* Verification error */}
          {status === 'error' && (
            <div className='bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-100/80 p-10'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-amber-50 border border-amber-100 rounded-2xl mb-6'>
                <svg
                  className='w-8 h-8 text-amber-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                  />
                </svg>
              </div>
              <h1 className='text-xl font-bold text-gray-900 tracking-tight'>
                Verification Failed
              </h1>
              <p className='text-sm text-gray-500 mt-2'>
                We couldn't confirm your payment status. If you were charged, please contact
                support with your order ID.
              </p>
              {orderId && (
                <p className='text-xs text-gray-400 mt-1 font-mono'>Order&nbsp;#{orderId}</p>
              )}
              <div className='flex flex-col gap-3 mt-6'>
                <button
                  onClick={() => window.location.reload()}
                  className='w-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-all'
                >
                  Retry
                </button>
                <a
                  href={`mailto:${config.contact.support}`}
                  className='w-full border border-gray-200 hover:border-violet-300 text-gray-600 hover:text-violet-600 text-sm font-medium py-2.5 rounded-xl transition-all'
                >
                  Contact Support
                </a>
              </div>
            </div>
          )}

          {/* Trust row */}
          <div className='mt-6 flex items-center justify-center gap-5 text-xs text-gray-400'>
            <span className='flex items-center gap-1'>
              <svg
                className='w-3.5 h-3.5 text-emerald-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
              256-bit SSL
            </span>
            <span className='flex items-center gap-1'>
              <svg
                className='w-3.5 h-3.5 text-violet-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                />
              </svg>
              Powered by Cashfree
            </span>
            <span className='flex items-center gap-1'>
              <svg
                className='w-3.5 h-3.5 text-indigo-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                />
              </svg>
              PCI DSS compliant
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
