export default function StealthTech() {
  const processes = [
    { name: 'chrome.exe',   pid: '4821', cpu: '12.3', mem: '312 MB' },
    { name: 'zoom.exe',     pid: '7234', cpu: '4.1',  mem: '198 MB' },
    { name: 'teams.exe',    pid: '5501', cpu: '2.8',  mem: '156 MB' },
    { name: 'explorer.exe', pid: '1104', cpu: '0.4',  mem: '48 MB'  },
    { name: 'svchost.exe',  pid: '892',  cpu: '0.1',  mem: '22 MB'  },
    { name: 'msedge.exe',   pid: '3312', cpu: '1.9',  mem: '241 MB' },
    { name: 'discord.exe',  pid: '6671', cpu: '0.3',  mem: '94 MB'  },
  ];

  const capabilities = [
    {
      title: 'Process-Level Invisibility',
      desc: 'Completely absent from Windows Task Manager, process scanners, and any system monitoring tool.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
        </svg>
      ),
    },
    {
      title: 'Custom Screen Capture Engine',
      desc: 'Proprietary capture method bypasses OBS-based detection and platform screen-share checks.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
        </svg>
      ),
    },
    {
      title: 'Zero Audio Hooks',
      desc: 'Does not access, hook, or modify your microphone, speaker, or audio pipeline in any way.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      ),
    },
    {
      title: 'Isolated Memory Footprint',
      desc: 'Operates in an isolated memory space with no detectable inter-process communications.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
  ];

  const platforms = ['Zoom', 'Google Meet', 'Microsoft Teams', 'HireVue', 'CoderPad', 'Proctorio', 'HackerRank'];

  return (
    <section id="stealth-tech" className="py-20 sm:py-28 bg-[#0f0f17] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#00d4ff]/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00d4ff] mb-3">
            Stealth Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f0ff] tracking-tight">
            Built to Be{' '}
            <span className="gradient-text">Invisible</span>
          </h2>
          <p className="mt-4 text-lg text-[#a0a0b8] max-w-2xl mx-auto">
            Interview Buddy operates below the radar of every interview platform and proctoring system.
            No traces. No alerts. No detection.
          </p>
        </div>

        {/* Main 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT: Task Manager terminal mock */}
          <div className="bg-[#080810] border border-[#1e1e30] rounded-xl overflow-hidden">
            {/* Terminal titlebar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#050508] border-b border-[#1e1e30]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[#606078] text-xs font-mono ml-2">Task Manager — Processes</span>
            </div>

            {/* Table header */}
            <div className="px-4 py-2 grid grid-cols-4 gap-2 border-b border-[#1e1e30] bg-[#0a0a12]">
              {['Name', 'PID', 'CPU %', 'Memory'].map(h => (
                <span key={h} className="text-[#606078] text-xs font-mono font-bold uppercase">{h}</span>
              ))}
            </div>

            {/* Process rows */}
            <div className="px-4 py-1">
              {processes.map((p, i) => (
                <div key={i} className="grid grid-cols-4 gap-2 py-1.5 border-b border-[#1e1e30]/50 last:border-0">
                  <span className="text-[#a0a0b8] text-xs font-mono">{p.name}</span>
                  <span className="text-[#606078] text-xs font-mono">{p.pid}</span>
                  <span className="text-[#606078] text-xs font-mono">{p.cpu}%</span>
                  <span className="text-[#606078] text-xs font-mono">{p.mem}</span>
                </div>
              ))}
            </div>

            {/* Detection result */}
            <div className="px-4 py-3 bg-[#001a0d] border-t border-[#00d4ff]/20 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse flex-shrink-0" />
              <span className="text-[#00d4ff] text-xs font-mono font-bold">
                0 instances of interview-buddy.exe detected
              </span>
            </div>
          </div>

          {/* RIGHT: Capability cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((c, i) => (
              <div key={i} className="glass-card-cyan rounded-xl p-5 hover:-translate-y-0.5 transition-transform duration-200">
                <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] mb-3">
                  {c.icon}
                </div>
                <h3 className="text-[#f0f0ff] font-semibold text-sm mb-1.5">{c.title}</h3>
                <p className="text-[#a0a0b8] text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tested Against banner */}
        <div className="mt-10 glass-card rounded-2xl px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-[#606078] text-xs font-bold uppercase tracking-widest whitespace-nowrap">
              Tested Against:
            </span>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {platforms.map(p => (
                <span key={p} className="bg-[#0f0f17] border border-[#1e1e30] text-[#a0a0b8] text-xs px-3 py-1.5 rounded-full">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
