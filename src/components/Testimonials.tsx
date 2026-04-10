import { config } from '../config';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'SDE-2 @ Flipkart',
    avatar: 'RS',
    quote: 'Used it during my Flipkart system design round. The AI answers were spot-on and nobody had a clue. Cleared it on first attempt.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Frontend Dev @ Swiggy',
    avatar: 'PN',
    quote: 'HireVue didn\'t detect anything. I used it for 3 rounds and kept getting call-backs. Interview Buddy is a game-changer.',
    rating: 5,
  },
  {
    name: 'Arjun Mehta',
    role: 'Full Stack @ Razorpay',
    avatar: 'AM',
    quote: 'The credit system is perfect — I only paid for the interviews I used it in. 150 credits lasted me all 5 rounds.',
    rating: 5,
  },
  {
    name: 'Sneha Patel',
    role: 'Backend Engineer @ Zomato',
    avatar: 'SP',
    quote: 'Completely invisible even on their Zoom proctored interview. The answers came in under 2 seconds every time.',
    rating: 5,
  },
  {
    name: 'Karan Gupta',
    role: 'DevOps Engineer @ Infosys',
    avatar: 'KG',
    quote: 'I was nervous the platform would detect it. Zero issues across 4 different companies. Worth every rupee.',
    rating: 5,
  },
  {
    name: 'Deepika Rao',
    role: 'Data Engineer @ PhonePe',
    avatar: 'DR',
    quote: 'Failed system design twice before Interview Buddy. Passed with it the third time. The AI actually knows its stuff.',
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#00d4ff]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00d4ff] mb-3">Success Stories</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f0ff] tracking-tight">
            {config.social.userCount} users already{' '}
            <span className="gradient-text">winning interviews</span>
          </h2>
          <p className="mt-4 text-lg text-[#a0a0b8] max-w-xl mx-auto">
            Real results from real users who used Interview Buddy during live interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card rounded-2xl p-6 hover:border-[#00d4ff]/10 transition-all flex flex-col gap-4"
            >
              <StarRating count={t.rating} />
              <p className="text-sm text-[#a0a0b8] leading-relaxed flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-[#1e1e30]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00d4ff]/30 to-[#8b5cf6]/30 border border-[#00d4ff]/20 text-[#a0a0b8] flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#f0f0ff]">{t.name}</p>
                  <p className="text-xs text-[#606078]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
