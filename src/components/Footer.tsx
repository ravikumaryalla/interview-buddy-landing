import { Link } from 'react-router-dom';
import { config } from '../config';

export default function Footer() {
  return (
    <footer className="bg-[#080810] text-[#606078]">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#001a2e] via-[#000d1a] to-[#0d001a] border-y border-[#00d4ff]/10 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#f0f0ff] mb-3">
            Download Interview Buddy for Windows
          </h2>
          <p className="text-[#a0a0b8] mb-8 text-lg">
            Join {config.social.userCount} users already winning interviews with AI assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={config.app.downloadUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-[#0a0a0f] font-bold px-8 py-3.5 rounded-xl glow-cyan-sm hover:opacity-90 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Now
            </a>
            <a
              href={`mailto:${config.contact.support}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff]/10 font-semibold px-8 py-3.5 rounded-xl transition-all"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>

      {/* Footer body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-[#0a0a0f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-[#f0f0ff] font-bold text-lg">{config.app.name}</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Real-time AI assistance for live interviews on Windows. Completely undetectable.
            </p>
            <p className="text-xs">{config.app.platform} only.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[#f0f0ff] font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li><a href="#features" className="text-sm hover:text-[#00d4ff] transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-sm hover:text-[#00d4ff] transition-colors">How It Works</a></li>
              <li><a href="#stealth-tech" className="text-sm hover:text-[#00d4ff] transition-colors">Stealth Tech</a></li>
              <li><a href="#pricing" className="text-sm hover:text-[#00d4ff] transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* App */}
          <div>
            <h4 className="text-[#f0f0ff] font-semibold text-sm mb-4">App</h4>
            <ul className="space-y-2.5">
              <li>
                <a href={config.app.downloadUrl} className="text-sm hover:text-[#00d4ff] transition-colors">Download</a>
              </li>
              <li>
                <Link to="/login" className="text-sm hover:text-[#00d4ff] transition-colors">Login</Link>
              </li>
              <li>
                <a href="#faq" className="text-sm hover:text-[#00d4ff] transition-colors">FAQ</a>
              </li>
              <li>
                <a href={`mailto:${config.contact.support}`} className="text-sm hover:text-[#00d4ff] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[#f0f0ff] font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-[#00d4ff] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm hover:text-[#00d4ff] transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-sm hover:text-[#00d4ff] transition-colors">Refund Policy</Link>
              </li>
              <li>
                <a href={`mailto:${config.contact.legal}`} className="text-sm hover:text-[#00d4ff] transition-colors">Legal Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e1e30] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} {config.app.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secure Payments
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-[#00d4ff]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
              </svg>
              Windows Only
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
