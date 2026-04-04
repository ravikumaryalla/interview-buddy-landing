import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <span className="font-bold text-gray-900 text-lg tracking-tight">Interview Buddy</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">FAQ</a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#pricing" className="text-sm text-gray-700 hover:text-violet-600 font-medium transition-colors">Sign in</a>
            <a
              href="#pricing"
              className="text-sm bg-violet-600 hover:bg-violet-700 text-white font-medium px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              Start Free Trial
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-gray-100 mt-2">
            <div className="flex flex-col gap-3">
              <a href="#features" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 hover:text-violet-600 py-1 transition-colors">Features</a>
              <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 hover:text-violet-600 py-1 transition-colors">How It Works</a>
              <a href="#pricing" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 hover:text-violet-600 py-1 transition-colors">Pricing</a>
              <a href="#faq" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 hover:text-violet-600 py-1 transition-colors">FAQ</a>
              <div className="pt-2 flex flex-col gap-2">
                <a href="#pricing" className="text-sm text-center bg-violet-600 hover:bg-violet-700 text-white font-medium px-4 py-2 rounded-lg transition-colors">Start Free Trial</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
