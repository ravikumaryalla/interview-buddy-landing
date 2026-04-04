const trustPoints = [
  {
    icon: '⚖️',
    title: 'Ethical Interview Preparation',
    desc: 'We respect fair use and are committed to ethical interview preparation. Interview Buddy is designed to help you learn and grow — not to compromise the integrity of hiring processes.',
  },
  {
    icon: '🔐',
    title: 'Your Data is Safe',
    desc: 'All your data — including resumes, practice sessions, and feedback — is encrypted in transit and at rest. We follow industry-standard security practices to protect your information.',
  },
  {
    icon: '🎓',
    title: 'For Learning Purposes Only',
    desc: 'Interview Buddy is a preparation and practice platform. It is designed to help you build genuine skills and knowledge so you can perform confidently in your own interviews.',
  },
  {
    icon: '🤝',
    title: 'We Do Not Encourage Dishonesty',
    desc: 'We do not support or encourage any form of dishonest conduct during actual interviews. Our platform exists solely to help candidates prepare and improve their skills responsibly.',
  },
];

export default function Trust() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">Trust & Compliance</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Built on trust, transparency, and ethics
          </h2>
          <p className="mt-4 text-lg text-indigo-200 max-w-2xl mx-auto">
            Interview Buddy is a responsible platform committed to fair and ethical career advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {trustPoints.map((p) => (
            <div
              key={p.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <span className="text-3xl mb-4 block">{p.icon}</span>
              <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-indigo-200 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Compliance banner */}
        <div className="mt-10 bg-white/5 border border-violet-500/30 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold">Designed for learning and preparation purposes only</p>
            <p className="text-indigo-300 text-sm mt-0.5">All sessions are private practice environments. Interview Buddy helps you build real skills for real success.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
