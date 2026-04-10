import { useState } from 'react';
import { config } from '../config';

const faqs = [
  {
    q: 'Will the interviewer be able to detect Interview Buddy?',
    a: 'No. Interview Buddy is engineered specifically to be undetectable. It does not appear in Task Manager, does not use OBS-based screen capture, does not hook into audio pipelines, and generates no detectable network signatures. It has been tested against Zoom, Google Meet, Microsoft Teams, HireVue, CoderPad, HackerRank, and Proctorio.',
  },
  {
    q: 'How does it work during an interview?',
    a: 'You launch Interview Buddy before joining your interview. It silently captures your screen in real-time. As interview questions appear on screen, the AI reads them and delivers answers directly in the app\'s overlay — visible only to you. The answers appear as text you can read while speaking naturally.',
  },
  {
    q: 'What platforms and interview tools does it support?',
    a: 'Interview Buddy works with any Windows screen-based interview: Zoom, Google Meet, Microsoft Teams, HireVue video interviews, CoderPad, HackerRank, LeetCode assessments, and any browser-based platform. If it appears on your Windows screen, Interview Buddy can read it.',
  },
  {
    q: 'What is a credit and how many will I need?',
    a: `1 credit = 1 minute of live AI assistance. A typical 45-minute technical interview uses approximately 20–30 credits (the AI runs only when questions appear, not continuously). The Starter Pack (${config.pricing.starterCredits} credits) is enough for 1–2 full interview rounds.`,
  },
  {
    q: 'Do credits expire?',
    a: 'No. Credits never expire. You can buy them whenever you want and use them months later across as many interviews as you need.',
  },
  {
    q: 'Is this a Windows-only app?',
    a: `Yes. Interview Buddy is a Windows desktop application (${config.app.platform}). Mac and Linux versions are not currently available.`,
  },
  {
    q: 'What happens after I buy credits?',
    a: 'Credits are added to your account immediately after successful payment. You can see your balance in the app. There is no subscription or auto-renewal — you only spend credits when you actively use the app during an interview.',
  },
  {
    q: 'Can I get a refund?',
    a: `We offer a ${config.policy.refundWindowDays}-day refund on your first credit purchase if you're unsatisfied. Subsequent purchases follow our standard refund policy. See the Refund Policy page for full details.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00d4ff] mb-3">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f0ff] tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-[#a0a0b8]">
            Still have questions? Email us at{' '}
            <a href={`mailto:${config.contact.support}`} className="text-[#00d4ff] hover:underline font-medium">
              {config.contact.support}
            </a>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-colors ${
                openIndex === i
                  ? 'border-[#00d4ff]/20 bg-[#00d4ff]/5'
                  : 'border-[#1e1e30] bg-[#0f0f17]'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className={`text-sm font-semibold ${openIndex === i ? 'text-[#00d4ff]' : 'text-[#f0f0ff]'}`}>
                  {faq.q}
                </span>
                <svg
                  className={`w-4 h-4 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180 text-[#00d4ff]' : 'text-[#606078]'}`}
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
                  <p className="text-sm text-[#a0a0b8] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
