import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { load } from '@cashfreepayments/cashfree-js';
import { config } from '../config';

type Status = 'loading' | 'initiating' | 'error';

export default function Pay() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<Status>('loading');
  const [errorMsg, setErrorMsg] = useState('');

  const sessionId = searchParams.get('session');
  const orderId = searchParams.get('order');
  const token = searchParams.get('token');

  useEffect(() => {
    // Persist the token in sessionStorage so PaymentResult can use it after
    // Cashfree redirects back (the query string won't survive the redirect)
    if (token) {
      sessionStorage.setItem('ib_payment_token', token);
    }

    if (!sessionId) {
      setErrorMsg('No payment session found. Please go back and try again.');
      setStatus('error');
      return;
    }

    let cancelled = false;

    async function initPayment() {
      try {
        setStatus('initiating');

        const cashfree = await load({
          mode:
            (import.meta.env.VITE_CASHFREE_ENV as 'sandbox' | 'production') ??
            'production',
        });

        if (cancelled) return;

        cashfree.checkout({
          paymentSessionId: sessionId!,
          redirectTarget: '_self',
        });
      } catch (err) {
        if (cancelled) return;
        console.error('Cashfree init failed:', err);
        setErrorMsg(
          'Failed to initialise payment. Please try again or contact support.',
        );
        setStatus('error');
      }
    }

    initPayment();
    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
      {/* Top bar */}
      <div className="border-b border-[#1e1e30] bg-[#080810]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] rounded-lg flex items-center justify-center glow-cyan-sm">
              <svg className="w-4 h-4 text-[#0a0a0f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="font-bold text-[#f0f0ff] text-base group-hover:text-[#00d4ff] transition-colors">
              {config.app.name}
            </span>
          </Link>
          <div className="flex items-center gap-1.5 text-xs text-[#606078]">
            <svg className="w-3.5 h-3.5 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secured by Cashfree
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-sm text-center">
          {(status === 'loading' || status === 'initiating') && (
            <div className="glass-card border-[#1e1e30] rounded-2xl shadow-2xl p-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] rounded-2xl mb-6 glow-cyan-sm">
                <svg className="w-8 h-8 text-[#0a0a0f] animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-[#f0f0ff] tracking-tight">
                {status === 'loading' ? 'Preparing your payment…' : 'Redirecting to checkout…'}
              </h1>
              {orderId && (
                <p className="text-xs text-[#606078] mt-2 font-mono">Order&nbsp;#{orderId}</p>
              )}
              <p className="text-sm text-[#a0a0b8] mt-2">Please don't close this tab.</p>
            </div>
          )}

          {status === 'error' && (
            <div className="glass-card border-[#1e1e30] rounded-2xl shadow-2xl p-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-2xl mb-6">
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-[#f0f0ff] tracking-tight">Payment Error</h1>
              <p className="text-sm text-[#a0a0b8] mt-2">{errorMsg}</p>
              {orderId && (
                <p className="text-xs text-[#606078] mt-1 font-mono mb-6">Order&nbsp;#{orderId}</p>
              )}
              {!orderId && <div className="mb-6" />}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-[#0a0a0f] text-sm font-bold py-2.5 rounded-xl glow-cyan-sm hover:opacity-90 transition-all"
                >
                  Try Again
                </button>
                <a
                  href={`mailto:${config.contact.support}`}
                  className="w-full border border-[#1e1e30] hover:border-[#00d4ff]/30 text-[#a0a0b8] hover:text-[#00d4ff] text-sm font-medium py-2.5 rounded-xl transition-all"
                >
                  Contact Support
                </a>
              </div>
            </div>
          )}

          {/* Trust row */}
          <div className="mt-6 flex items-center justify-center gap-5 text-xs text-[#606078]">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              256-bit SSL
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Powered by Cashfree
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              PCI DSS compliant
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
