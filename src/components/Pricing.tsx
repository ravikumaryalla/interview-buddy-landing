import { Link } from 'react-router-dom';
import { config } from '../config';

const packs = [
  {
    name: 'Starter Pack',
    credits: config.pricing.starterCredits,
    price: config.pricing.starterPrice,
    perCredit: (Number(config.pricing.starterPrice) / Number(config.pricing.starterCredits)).toFixed(2),
    desc: 'Try it in your next interview.',
    features: [
      `${config.pricing.starterCredits} minutes of live AI assistance`,
      'Works on all interview platforms',
      'Full stealth mode',
      'Credits never expire',
    ],
    highlighted: false,
    badge: null,
    ctaLabel: 'Buy Starter Pack',
  },
  {
    name: 'Pro Pack',
    credits: config.pricing.proCredits,
    price: config.pricing.proPrice,
    perCredit: (Number(config.pricing.proPrice) / Number(config.pricing.proCredits)).toFixed(2),
    desc: 'Perfect for an active job search.',
    features: [
      `${config.pricing.proCredits} minutes of live AI assistance`,
      'Best value for multi-round interviews',
      'Works on all interview platforms',
      'Full stealth mode',
      'Credits never expire',
    ],
    highlighted: true,
    badge: 'Most Popular',
    ctaLabel: 'Buy Pro Pack',
  },
  {
    name: 'Elite Pack',
    credits: config.pricing.eliteCredits,
    price: config.pricing.elitePrice,
    perCredit: (Number(config.pricing.elitePrice) / Number(config.pricing.eliteCredits)).toFixed(2),
    desc: 'For serious candidates targeting top companies.',
    features: [
      `${config.pricing.eliteCredits} minutes of live AI assistance`,
      'Lowest cost per minute',
      'Works on all interview platforms',
      'Full stealth mode',
      'Credits never expire',
      'Priority support',
    ],
    highlighted: false,
    badge: 'Best Value',
    ctaLabel: 'Buy Elite Pack',
  },
];

function CheckIcon({ highlighted }: { highlighted: boolean }) {
  return (
    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${highlighted ? 'text-[#0a0a0f]' : 'text-[#00d4ff]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#0f0f17]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00d4ff] mb-3">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f0ff] tracking-tight">
            Pay only for what you{' '}
            <span className="gradient-text">actually use</span>
          </h2>
          <p className="mt-4 text-lg text-[#a0a0b8] max-w-xl mx-auto">
            {config.pricing.creditDefinition}. No subscriptions, no auto-renewals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packs.map((pack) => (
            <div
              key={pack.name}
              className={`relative rounded-2xl flex flex-col ${
                pack.highlighted
                  ? 'bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] glow-cyan scale-105 z-10'
                  : 'glass-card'
              }`}
            >
              {pack.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full ${
                  pack.highlighted
                    ? 'bg-[#0a0a0f] text-[#00d4ff]'
                    : 'bg-[#8b5cf6] text-white'
                }`}>
                  {pack.badge}
                </div>
              )}

              <div className="p-7 flex flex-col gap-5 flex-1">
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${pack.highlighted ? 'text-[#0a0a0f]/70' : 'text-[#00d4ff]'}`}>
                    {pack.name}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className={`text-4xl font-bold ${pack.highlighted ? 'text-[#0a0a0f]' : 'text-[#f0f0ff]'}`}>
                      ₹{pack.price}
                    </span>
                  </div>
                  <p className={`text-sm mt-1 ${pack.highlighted ? 'text-[#0a0a0f]/60' : 'text-[#606078]'}`}>
                    {pack.credits} credits · ₹{pack.perCredit}/min
                  </p>
                  <p className={`text-sm mt-2 ${pack.highlighted ? 'text-[#0a0a0f]/80' : 'text-[#a0a0b8]'}`}>{pack.desc}</p>
                </div>

                <ul className="space-y-2.5 flex-1">
                  {pack.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckIcon highlighted={pack.highlighted} />
                      <span className={`text-sm ${pack.highlighted ? 'text-[#0a0a0f]' : 'text-[#a0a0b8]'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/login"
                  className={`mt-auto block text-center font-bold text-sm py-3 rounded-xl transition-all ${
                    pack.highlighted
                      ? 'bg-[#0a0a0f] text-[#00d4ff] hover:bg-[#0f0f17] shadow-lg'
                      : 'bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff]/20'
                  }`}
                >
                  {pack.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-[#606078]">
          {[
            'Credits never expire',
            'Secure payments via Cashfree',
            '7-day refund on first purchase',
            'No auto-renewals',
          ].map((g) => (
            <div key={g} className="flex items-center gap-2">
              <span className="text-[#00d4ff] font-bold">✓</span>
              {g}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
