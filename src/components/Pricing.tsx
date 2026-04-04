import { useState } from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    desc: 'Perfect for getting started and exploring the platform.',
    features: [
      '5 mock interview sessions/month',
      'Basic AI feedback',
      'Resume upload (1 resume)',
      'Access to common questions bank',
      'Email support',
    ],
    missing: [
      'Real-time AI suggestions',
      'Performance analytics',
      'Priority support',
    ],
    cta: 'Get Started Free',
    highlighted: false,
    badge: null,
  },
  {
    name: 'Pro',
    price: `₹${config.pricing.pro}`,
    period: '/month',
    desc: 'For active job seekers who want a real competitive edge.',
    features: [
      'Unlimited mock interview sessions',
      'Real-time AI suggestions',
      'Detailed feedback reports',
      'Resume-based question generation',
      'Behavioral + technical prep',
      'Performance analytics dashboard',
      'Priority email support',
    ],
    missing: [],
    cta: 'Start Pro Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Premium',
    price: `₹${config.pricing.premium}`,
    period: '/month',
    desc: 'For professionals targeting top-tier companies and roles.',
    features: [
      'Everything in Pro',
      'Company-specific interview prep',
      'Unlimited resume uploads',
      'Advanced analytics & insights',
      'FAANG-level question sets',
      'Dedicated success manager',
      '24/7 priority support',
    ],
    missing: [],
    cta: 'Start Premium Trial',
    highlighted: false,
    badge: 'Best Value',
  },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  const discountMultiplier = 1 - config.pricing.annualDiscount / 100;

  function displayPrice(plan: typeof plans[0]) {
    if (plan.price === '₹0') return plan.price;
    const base = parseInt(plan.price.replace('₹', ''));
    if (annual) {
      return `₹${Math.round(base * discountMultiplier)}`;
    }
    return plan.price;
  }

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            No hidden charges. Cancel anytime. Secure payments via trusted providers.
          </p>

          {/* Annual toggle */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
            <span className={`text-sm font-medium transition-colors ${!annual ? 'text-gray-900' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-10 h-6 rounded-full transition-colors ${annual ? 'bg-violet-600' : 'bg-gray-200'}`}
              aria-label="Toggle annual billing"
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${annual ? 'translate-x-4' : ''}`}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${annual ? 'text-gray-900' : 'text-gray-400'}`}>
              Annual <span className="text-emerald-600 font-semibold">–{config.pricing.annualDiscount}%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl flex flex-col ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-2xl shadow-violet-200 scale-105 z-10'
                  : 'bg-white border border-gray-100 shadow-sm'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full ${
                  plan.highlighted ? 'bg-white text-violet-700' : 'bg-violet-600 text-white'
                }`}>
                  {plan.badge}
                </div>
              )}

              <div className="p-7 flex flex-col gap-5 flex-1">
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${plan.highlighted ? 'text-violet-200' : 'text-violet-600'}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      {displayPrice(plan)}
                    </span>
                    <span className={`text-sm mb-1 ${plan.highlighted ? 'text-violet-200' : 'text-gray-500'}`}>{plan.period}</span>
                  </div>
                  {annual && plan.price !== '₹0' && (
                    <p className={`text-xs mt-1 ${plan.highlighted ? 'text-violet-200' : 'text-gray-500'}`}>
                      Billed annually · Save 20%
                    </p>
                  )}
                  <p className={`text-sm mt-2 ${plan.highlighted ? 'text-violet-100' : 'text-gray-600'}`}>{plan.desc}</p>
                </div>

                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      {plan.highlighted ? (
                        <svg className="w-4 h-4 text-violet-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <CheckIcon />
                      )}
                      <span className={`text-sm ${plan.highlighted ? 'text-violet-100' : 'text-gray-700'}`}>{f}</span>
                    </li>
                  ))}
                  {plan.missing.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <XIcon />
                      <span className="text-sm text-gray-400">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/login"
                  className={`mt-auto block text-center font-semibold text-sm py-3 rounded-xl transition-all ${
                    plan.highlighted
                      ? 'bg-white text-violet-700 hover:bg-violet-50 shadow-lg'
                      : 'bg-violet-600 hover:bg-violet-700 text-white shadow-sm shadow-violet-100'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
          {[
            { icon: '✓', text: 'Cancel anytime, no questions asked' },
            { icon: '✓', text: 'No hidden charges or auto-renewals without consent' },
            { icon: '✓', text: 'Secure payments via trusted payment providers' },
            { icon: '✓', text: '7-day money-back guarantee on paid plans' },
          ].map((g) => (
            <div key={g.text} className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold">{g.icon}</span>
              {g.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
