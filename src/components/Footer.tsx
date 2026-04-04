import { Link } from 'react-router-dom';
import { config } from '../config';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to ace your next interview?
          </h2>
          <p className="text-violet-100 mb-8 text-lg">
            Join {config.social.userCount} developers already preparing smarter with {config.app.name}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/login"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-violet-700 hover:bg-violet-50 font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
            >
              Start Free Trial
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href={`mailto:${config.contact.support}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-xl transition-all"
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
              <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg">{config.app.name}</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              AI-powered interview preparation and guidance platform for serious candidates.
            </p>
            <p className="text-xs text-gray-600">
              Designed for learning and preparation purposes only.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2.5">
              {['Features', 'How It Works', 'Pricing', 'Changelog'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#faq" className="text-sm hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href={`mailto:${config.contact.support}`} className="text-sm hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <span className="text-sm">{config.contact.support}</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-sm hover:text-white transition-colors">Refund Policy</Link>
              </li>
              <li>
                <a href={`mailto:${config.contact.legal}`} className="text-sm hover:text-white transition-colors">Legal Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {config.app.name}. All rights reserved. · For preparation purposes only.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secure Payments
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Privacy First
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
