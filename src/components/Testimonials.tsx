const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Software Engineer @ Flipkart',
    avatar: 'RS',
    color: 'bg-violet-600',
    quote: 'Interview Buddy completely changed how I prepare. The AI suggestions helped me structure my answers much more effectively. Cleared my Flipkart SDE-2 interview on the first attempt!',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Frontend Developer @ Swiggy',
    avatar: 'PN',
    color: 'bg-indigo-600',
    quote: 'The resume-based question generation is a game-changer. It asked me exactly the kind of deep-dive questions I faced in my actual interviews. Highly recommended for serious candidates.',
    rating: 5,
  },
  {
    name: 'Arjun Mehta',
    role: 'Full Stack Dev @ Razorpay',
    avatar: 'AM',
    color: 'bg-emerald-600',
    quote: 'The behavioral prep section is outstanding. After 2 weeks of mock sessions, I could answer STAR questions confidently. The performance analytics showed exactly where I was losing points.',
    rating: 5,
  },
  {
    name: 'Sneha Patel',
    role: 'Backend Engineer @ Zomato',
    avatar: 'SP',
    color: 'bg-rose-600',
    quote: 'Incredible tool for interview preparation. The instant feedback after each practice session is specific and actionable — not generic advice. Worth every rupee.',
    rating: 5,
  },
  {
    name: 'Karan Gupta',
    role: 'DevOps Engineer @ Infosys',
    avatar: 'KG',
    color: 'bg-amber-600',
    quote: 'I was skeptical at first but Interview Buddy exceeded my expectations. The mock interview simulations feel realistic and the AI guidance is genuinely helpful for improving clarity.',
    rating: 5,
  },
  {
    name: 'Deepika Rao',
    role: 'Data Engineer @ PhonePe',
    avatar: 'DR',
    color: 'bg-sky-600',
    quote: 'Went from failing system design rounds to clearing them consistently. The structured practice sessions and feedback reports made a measurable difference in my performance.',
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Loved by developers across India
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Join 1,000+ developers who leveled up their interview skills with Interview Buddy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col gap-4"
            >
              <StarRating count={t.rating} />
              <p className="text-sm text-gray-700 leading-relaxed flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                <div className={`w-9 h-9 rounded-full ${t.color} text-white flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
