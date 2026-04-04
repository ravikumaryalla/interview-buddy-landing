import { config } from '../config';

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-white pt-24 pb-20 sm:pt-32 sm:pb-28'>
      {/* Background gradient blobs */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-violet-100/60 blur-3xl' />
        <div className='absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-indigo-100/50 blur-3xl' />
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Badge */}
        <div className='inline-flex items-center gap-2 bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6'>
          <span className='w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse' />
          AI-Powered Interview Preparation
        </div>

        {/* Headline */}
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight max-w-4xl mx-auto'>
          Ace Your Interviews with{' '}
          <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>
            AI-Powered Guidance
          </span>
        </h1>

        {/* Subheading */}
        <p className='mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
          Get real-time suggestions, practice smarter, and improve your
          interview performance with AI assistance designed for serious
          candidates.
        </p>

        {/* CTA Buttons */}
        <div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4'>
          <a
            href='#pricing'
            className='w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-violet-200 hover:shadow-violet-300 hover:-translate-y-0.5'
          >
            Start Free Trial
            <svg
              className='w-4 h-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13 7l5 5m0 0l-5 5m5-5H6'
              />
            </svg>
          </a>
          {/* <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-3.5 rounded-xl border border-gray-200 transition-all hover:-translate-y-0.5 shadow-sm"
          >
            <svg className="w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            View Demo
          </a> */}
        </div>

        {/* Social proof */}
        <p className='mt-6 text-sm text-gray-500'>
          Trusted by{' '}
          <span className='font-semibold text-gray-700'>
            {config.social.userCount}
          </span>{' '}
          developers · No credit card required
        </p>

        {/* Trust Badges */}
        <div className='mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6'>
          {[
            { icon: '🔒', label: 'Secure Payments' },
            { icon: '👩‍💻', label: 'Trusted by Developers' },
            { icon: '🛡️', label: 'Privacy First' },
          ].map((badge) => (
            <div
              key={badge.label}
              className='flex items-center gap-2 bg-white border border-gray-100 shadow-sm rounded-full px-4 py-2 text-sm text-gray-700 font-medium'
            >
              <span>{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </div>

        {/* Mock UI Preview */}
        <div className='mt-16 relative mx-auto max-w-4xl'>
          <div className='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none h-16 bottom-0 top-auto' />
          <div className='bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden'>
            {/* Browser chrome */}
            <div className='flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200'>
              <div className='w-3 h-3 rounded-full bg-red-400' />
              <div className='w-3 h-3 rounded-full bg-yellow-400' />
              <div className='w-3 h-3 rounded-full bg-green-400' />
              <div className='flex-1 mx-4 bg-white border border-gray-200 rounded text-xs text-gray-400 px-3 py-1 text-left'>
                app.interviewbuddy.ai/session
              </div>
            </div>
            {/* Mock interview UI */}
            <div className='p-6 bg-gradient-to-br from-slate-50 to-white'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {/* Question panel */}
                <div className='md:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-left'>
                  <div className='flex items-center gap-2 mb-3'>
                    <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                    <span className='text-xs font-semibold text-gray-500 uppercase tracking-wide'>
                      Live Session
                    </span>
                  </div>
                  <p className='text-sm font-semibold text-gray-800 mb-2'>
                    Technical Question #3
                  </p>
                  <p className='text-sm text-gray-600 leading-relaxed'>
                    "Explain the concept of closures in JavaScript and provide a
                    real-world use case where you'd apply them."
                  </p>
                  <div className='mt-4 bg-gray-50 rounded-lg p-3'>
                    <p className='text-xs text-gray-400 font-mono'>
                      Your response will appear here...
                    </p>
                    <div className='mt-2 flex gap-1'>
                      <div className='h-1 w-1/3 bg-violet-300 rounded-full animate-pulse' />
                      <div
                        className='h-1 w-1/4 bg-violet-200 rounded-full animate-pulse'
                        style={{ animationDelay: '0.2s' }}
                      />
                      <div
                        className='h-1 w-1/5 bg-violet-100 rounded-full animate-pulse'
                        style={{ animationDelay: '0.4s' }}
                      />
                    </div>
                  </div>
                </div>
                {/* AI suggestions panel */}
                <div className='bg-gradient-to-br from-violet-50 to-indigo-50 rounded-xl border border-violet-100 p-4 text-left'>
                  <div className='flex items-center gap-2 mb-3'>
                    <div className='w-5 h-5 bg-violet-600 rounded flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 text-white'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                        />
                      </svg>
                    </div>
                    <span className='text-xs font-semibold text-violet-700'>
                      AI Suggestions
                    </span>
                  </div>
                  <ul className='space-y-2'>
                    {[
                      'Mention lexical scoping',
                      'Give a counter/timer example',
                      'Discuss module pattern',
                    ].map((tip) => (
                      <li
                        key={tip}
                        className='flex items-start gap-2 text-xs text-gray-700'
                      >
                        <span className='text-violet-500 mt-0.5'>✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                  <div className='mt-3 pt-3 border-t border-violet-100'>
                    <p className='text-xs text-violet-600 font-medium'>
                      Confidence score
                    </p>
                    <div className='mt-1 h-2 bg-violet-100 rounded-full overflow-hidden'>
                      <div className='h-full w-3/4 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full' />
                    </div>
                    <p className='text-xs text-gray-500 mt-1'>
                      75% — Good, keep going!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
