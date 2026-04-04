export default function Demo() {
  return (
    <section id="demo" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">Product Demo</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            See Interview Buddy in action
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Watch how our AI coaching platform guides you through a real interview session.
          </p>
        </div>

        {/* Video / Demo placeholder */}
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="flex-1 mx-4 bg-gray-700 rounded text-xs text-gray-400 px-3 py-1 text-left">
              app.interviewbuddy.ai/demo
            </div>
          </div>

          {/* Demo screen */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 p-8 min-h-72 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl" />

            {/* Play button overlay */}
            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="w-20 h-20 bg-white/10 hover:bg-white/20 border-2 border-white/30 rounded-full flex items-center justify-center cursor-pointer transition-all group hover:scale-105 shadow-2xl">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold text-lg">Watch 2-min Product Demo</p>
                <p className="text-white/60 text-sm mt-1">See how AI guidance helps you structure better answers</p>
              </div>
            </div>

            {/* Mock session stats at bottom */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">IB</span>
                </div>
                <div>
                  <p className="text-white/90 text-xs font-semibold">Interview Buddy</p>
                  <p className="text-white/50 text-xs">Mock Session · Frontend Role</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-white/60 text-xs">DEMO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlights below demo */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { stat: '500+', label: 'Practice Questions', sub: 'Across all major domains' },
            { stat: '98%', label: 'User Satisfaction', sub: 'Based on post-session surveys' },
            { stat: '3x', label: 'Faster Improvement', sub: 'Compared to solo preparation' },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
              <p className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">{item.stat}</p>
              <p className="text-sm font-semibold text-gray-800 mt-1">{item.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
