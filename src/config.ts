// Central config — all environment variables resolved here.
// Import from this file instead of reading import.meta.env directly.

export const config = {
  app: {
    name: import.meta.env.VITE_APP_NAME ?? 'Interview Buddy',
    tagline: import.meta.env.VITE_APP_TAGLINE ?? 'AI-Powered Interview Preparation Platform',
    url: import.meta.env.VITE_APP_URL ?? 'https://interviewbuddy.ai',
  },
  contact: {
    support: import.meta.env.VITE_SUPPORT_EMAIL ?? 'support@interviewbuddy.ai',
    legal: import.meta.env.VITE_LEGAL_EMAIL ?? 'legal@interviewbuddy.ai',
    privacy: import.meta.env.VITE_PRIVACY_EMAIL ?? 'privacy@interviewbuddy.ai',
  },
  social: {
    userCount: import.meta.env.VITE_USER_COUNT ?? '1,000+',
    satisfactionRate: import.meta.env.VITE_SATISFACTION_RATE ?? '98%',
    questionsCount: import.meta.env.VITE_QUESTIONS_COUNT ?? '500+',
    improvementFactor: import.meta.env.VITE_IMPROVEMENT_FACTOR ?? '3x',
  },
  pricing: {
    pro: import.meta.env.VITE_PRICE_PRO ?? '199',
    premium: import.meta.env.VITE_PRICE_PREMIUM ?? '499',
    annualDiscount: Number(import.meta.env.VITE_ANNUAL_DISCOUNT ?? '20'),
  },
  policy: {
    refundWindowDays: import.meta.env.VITE_REFUND_WINDOW_DAYS ?? '7',
    refundProcessingDays: import.meta.env.VITE_REFUND_PROCESSING_DAYS ?? '5-7',
    lastUpdated: import.meta.env.VITE_POLICY_LAST_UPDATED ?? 'April 4, 2026',
  },
} as const;
