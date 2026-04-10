// Central config — all environment variables resolved here.
// Import from this file instead of reading import.meta.env directly.

export const config = {
  api: {
    url: import.meta.env.VITE_API_URL ?? 'https://api.interviewbuddy.ai',
  },
  app: {
    name: import.meta.env.VITE_APP_NAME ?? 'Interview Buddy',
    tagline: import.meta.env.VITE_APP_TAGLINE ?? 'Your Secret Weapon for Every Interview',
    url: import.meta.env.VITE_APP_URL ?? 'https://interviewbuddy.ai',
    downloadUrl: import.meta.env.VITE_DOWNLOAD_URL ?? 'https://interviewbuddy.ai/download',
    platform: 'Windows 10/11',
  },
  contact: {
    support: import.meta.env.VITE_SUPPORT_EMAIL ?? 'support@interviewbuddy.ai',
    legal: import.meta.env.VITE_LEGAL_EMAIL ?? 'legal@interviewbuddy.ai',
    privacy: import.meta.env.VITE_PRIVACY_EMAIL ?? 'privacy@interviewbuddy.ai',
  },
  social: {
    userCount: import.meta.env.VITE_USER_COUNT ?? '2,400+',
    interviewsCracked: import.meta.env.VITE_INTERVIEWS_CRACKED ?? '8,000+',
    successRate: import.meta.env.VITE_SUCCESS_RATE ?? '94%',
    satisfactionRate: import.meta.env.VITE_SATISFACTION_RATE ?? '98%',
  },
  pricing: {
    starterCredits: import.meta.env.VITE_STARTER_CREDITS ?? '50',
    starterPrice: import.meta.env.VITE_STARTER_PRICE ?? '499',
    proCredits: import.meta.env.VITE_PRO_CREDITS ?? '150',
    proPrice: import.meta.env.VITE_PRO_PRICE ?? '1299',
    eliteCredits: import.meta.env.VITE_ELITE_CREDITS ?? '500',
    elitePrice: import.meta.env.VITE_ELITE_PRICE ?? '3499',
    creditDefinition: '1 credit = 1 minute of live AI assistance',
  },
  policy: {
    refundWindowDays: import.meta.env.VITE_REFUND_WINDOW_DAYS ?? '7',
    refundProcessingDays: import.meta.env.VITE_REFUND_PROCESSING_DAYS ?? '5-7',
    lastUpdated: import.meta.env.VITE_POLICY_LAST_UPDATED ?? 'April 10, 2026',
  },
} as const;
