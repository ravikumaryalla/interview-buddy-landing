import { useState } from 'react';
import { config } from '../config';

const faqs = [
  {
    q: 'Is Interview Buddy ethical to use?',
    a: 'Absolutely. Interview Buddy is a preparation and practice platform — similar to a study guide or a coaching class. It helps you build genuine skills, practice answering questions, and improve your communication. All practice happens in private sessions, not during actual interviews. We are fully committed to ethical career development.',
  },
  {
    q: 'How does the AI assistance work?',
    a: 'Our AI analyzes your responses during practice sessions and provides structured feedback covering clarity, relevance, depth, and confidence. It suggests key concepts to include, flags areas for improvement, and generates personalized questions based on your resume and target role. All AI interactions are in a private practice environment.',
  },
  {
    q: 'Can I cancel my subscription anytime?',
    a: 'Yes, you can cancel anytime directly from your account settings — no phone calls, no forms, no questions asked. If you cancel a paid plan, you retain access until the end of your current billing period. We also offer a 7-day money-back guarantee on all paid plans.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. We take data security seriously. All data transmitted to and from our platform is encrypted using industry-standard TLS. Resume data and session recordings are encrypted at rest. We do not sell or share your personal data with third parties. You can delete your account and all associated data at any time.',
  },
  {
    q: 'What types of interviews can I prepare for?',
    a: 'Interview Buddy supports preparation for technical interviews (coding, system design, architecture), behavioral interviews (STAR method, leadership, conflict resolution), and role-specific interviews across domains like frontend, backend, data engineering, DevOps, and more.',
  },
  {
    q: 'Do I need technical experience to use Interview Buddy?',
    a: 'No. Interview Buddy is designed for candidates at all levels — from students preparing for their first job to senior engineers targeting staff-level roles. You can customize the difficulty and domain of your practice sessions to match your experience level.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have more questions? Email us at{' '}
            <a href={`mailto:${config.contact.support}`} className="text-violet-600 hover:underline font-medium">
              {config.contact.support}
            </a>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-colors ${
                openIndex === i ? 'border-violet-200 bg-violet-50/50' : 'border-gray-100 bg-white'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className={`text-sm font-semibold ${openIndex === i ? 'text-violet-700' : 'text-gray-900'}`}>
                  {faq.q}
                </span>
                <svg
                  className={`w-4 h-4 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180 text-violet-600' : 'text-gray-400'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
