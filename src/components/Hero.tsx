import { config } from '../config';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0f] pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Ambient background glow blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-[#00d4ff]/8 blur-[120px]" />
        <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/8 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-pulse" />
          Windows Only — Live AI Assist
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f0f0ff] leading-tight tracking-tight max-w-4xl mx-auto">
          Your{' '}
          <span className="gradient-text">Secret Weapon</span>
          {' '}for Every Interview
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl text-[#a0a0b8] max-w-2xl mx-auto leading-relaxed">
          AI-powered live assistance that runs invisibly on Windows. Get real-time answers
          during any interview — completely undetectable by Zoom, Teams, HireVue, or any proctoring tool.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={config.app.downloadUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-[#0a0a0f] font-bold px-8 py-3.5 rounded-xl glow-cyan-sm hover:opacity-90 transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download for Windows
          </a>
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff]/10 font-semibold px-8 py-3.5 rounded-xl transition-all"
          >
            Buy Credits
          </a>
        </div>

        {/* Windows badge */}
        <div className="mt-5 inline-flex items-center gap-2 text-[#606078] text-xs">
          <svg className="w-4 h-4 text-[#00d4ff]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
          </svg>
          {config.app.platform} Only
        </div>

        {/* Stats row */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          {[
            { value: config.social.interviewsCracked, label: 'Interviews Cracked' },
            { value: config.social.userCount, label: 'Active Users' },
            { value: config.social.successRate, label: 'Success Rate' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-[#606078] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* App mockup — Windows-style */}
        <div className="mt-16 relative mx-auto max-w-4xl">
          <div className="bg-[#0f0f17] border border-[#1e1e30] rounded-xl overflow-hidden glow-cyan shadow-2xl">
            {/* Windows titlebar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#080810] border-b border-[#1e1e30]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6]" />
                <span className="text-[#606078] text-xs font-mono">Interview Buddy — Active Session</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#606078] text-xs font-mono">⬤ LIVE</span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#2a2a3a]" />
                  <div className="w-3 h-3 rounded-full bg-[#2a2a3a]" />
                  <div className="w-3 h-3 rounded-full bg-[#2a2a3a]" />
                </div>
              </div>
            </div>

            {/* Two-panel body */}
            <div className="p-4 grid grid-cols-3 gap-3 min-h-[260px]">
              {/* Left: Simulated video call */}
              <div className="col-span-2 bg-[#0d0d1a] border border-[#1e1e30] rounded-lg p-3 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                  <span className="text-[#606078] text-xs font-mono">zoom.exe — Meeting in progress</span>
                </div>
                <div className="grid grid-cols-2 gap-2 flex-1">
                  <div className="bg-[#13131e] border border-[#1e1e30] rounded-lg flex items-center justify-center min-h-[80px]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8b5cf6]/30 to-[#00d4ff]/30 border border-[#8b5cf6]/30 flex items-center justify-center text-[#a0a0b8] text-sm font-semibold">
                      IK
                    </div>
                  </div>
                  <div className="bg-[#13131e] border border-[#1e1e30] rounded-lg flex items-center justify-center min-h-[80px]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 border border-[#00d4ff]/30 flex items-center justify-center text-[#a0a0b8] text-sm font-semibold">
                      You
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-2 border-t border-[#1e1e30]">
                  <p className="text-[#606078] text-xs font-mono truncate">"Explain the time complexity of a hash map lookup in the worst case..."</p>
                </div>
              </div>

              {/* Right: IB AI overlay panel */}
              <div className="col-span-1 glass-card-cyan border-glow-cyan rounded-lg p-3 flex flex-col gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-pulse" />
                  <span className="text-[#00d4ff] text-xs font-bold font-mono">LIVE AI ASSIST</span>
                </div>
                <div className="flex-1 mt-1">
                  <p className="text-[#a0a0b8] text-xs leading-relaxed font-mono">
                    Hash map: O(1) avg case. Worst case O(n) due to hash collisions. Mention open addressing vs. chaining. Java's HashMap uses load factor 0.75...<span className="cursor-blink text-[#00d4ff]">|</span>
                  </p>
                </div>
                <div className="pt-2 border-t border-[#00d4ff]/10">
                  <div className="flex items-center gap-1.5">
                    <div className="h-1 flex-1 bg-[#1e1e30] rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] rounded-full" />
                    </div>
                    <span className="text-[#606078] text-xs font-mono">94%</span>
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
