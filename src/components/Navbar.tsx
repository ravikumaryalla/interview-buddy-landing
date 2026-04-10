import { useState } from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-[#1e1e30]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] rounded-lg flex items-center justify-center glow-cyan-sm">
              <svg className="w-4 h-4 text-[#0a0a0f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="font-bold text-[#f0f0ff] text-lg tracking-tight">{config.app.name}</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-[#a0a0b8] hover:text-[#00d4ff] transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-[#a0a0b8] hover:text-[#00d4ff] transition-colors">How It Works</a>
            <a href="#stealth-tech" className="text-sm text-[#a0a0b8] hover:text-[#00d4ff] transition-colors">Stealth Tech</a>
            <a href="#pricing" className="text-sm text-[#a0a0b8] hover:text-[#00d4ff] transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-[#a0a0b8] hover:text-[#00d4ff] transition-colors">FAQ</a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="text-sm text-[#a0a0b8] hover:text-[#f0f0ff] font-medium transition-colors">
              Login
            </Link>
            <a
              href={config.app.downloadUrl}
              className="text-sm bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-[#0a0a0f] font-bold px-4 py-2 rounded-lg glow-cyan-sm hover:opacity-90 transition-all"
            >
              Download Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-[#a0a0b8] hover:text-[#f0f0ff] hover:bg-[#1e1e30] transition-colors"
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
          <div className="md:hidden pb-4 pt-2 border-t border-[#1e1e30] mt-2 bg-[#0f0f17]">
            <div className="flex flex-col gap-3 px-1">
              <a href="#features" onClick={() => setMenuOpen(false)} className="text-sm text-[#a0a0b8] hover:text-[#00d4ff] py-1.5 transition-colors">Features</a>
              <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-sm text-[#a0a0b8] hover:text-[#00d4ff] py-1.5 transition-colors">How It Works</a>
              <a href="#stealth-tech" onClick={() => setMenuOpen(false)} className="text-sm text-[#a0a0b8] hover:text-[#00d4ff] py-1.5 transition-colors">Stealth Tech</a>
              <a href="#pricing" onClick={() => setMenuOpen(false)} className="text-sm text-[#a0a0b8] hover:text-[#00d4ff] py-1.5 transition-colors">Pricing</a>
              <a href="#faq" onClick={() => setMenuOpen(false)} className="text-sm text-[#a0a0b8] hover:text-[#00d4ff] py-1.5 transition-colors">FAQ</a>
              <div className="pt-2 flex flex-col gap-2">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-center border border-[#1e1e30] text-[#a0a0b8] hover:border-[#00d4ff]/30 hover:text-[#00d4ff] font-medium px-4 py-2 rounded-lg transition-all"
                >
                  Login
                </Link>
                <a
                  href={config.app.downloadUrl}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-center bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-[#0a0a0f] font-bold px-4 py-2 rounded-lg glow-cyan-sm hover:opacity-90 transition-all"
                >
                  Download for Windows
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
