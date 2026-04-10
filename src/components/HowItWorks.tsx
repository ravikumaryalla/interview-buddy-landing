const steps = [
  {
    step: '01',
    title: 'Download & Install',
    desc: 'Download the Interview Buddy Windows app — a one-time 5-minute install. Works on Windows 10 and Windows 11. No ongoing setup required.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Sign In & Buy Credits',
    desc: 'Log into your Interview Buddy account on the website. Purchase a credit pack — credits never expire, so buy when you\'re ready and use them at your own pace.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Launch Before Your Interview',
    desc: 'Open Interview Buddy a few minutes before joining your interview. It runs silently in the background — completely invisible to the interviewer, the platform, and any proctoring tool.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Get AI Answers Live',
    desc: 'During your interview, AI reads your screen and delivers full answers the moment questions appear. Read them naturally while you speak. Win the interview.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00d4ff] mb-3">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f0ff] tracking-tight">
            From install to{' '}
            <span className="gradient-text">interview win</span>
            {' '}in 4 steps
          </h2>
          <p className="mt-4 text-lg text-[#a0a0b8] max-w-xl mx-auto">
            Getting started takes 5 minutes. The AI does the hard work during the interview.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-5 group">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 border border-[#00d4ff]/20 text-[#00d4ff] flex items-center justify-center glow-cyan-sm group-hover:glow-cyan transition-all">
                  {s.icon}
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-[#00d4ff]/60 uppercase tracking-widest mb-1">Step {s.step}</div>
                <h3 className="text-lg font-semibold text-[#f0f0ff] mb-2">{s.title}</h3>
                <p className="text-sm text-[#a0a0b8] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
