export const ENV = {
  API_URL: import.meta.env.VITE_API_URL,
  BASE_URL: import.meta.env.VITE_BASE_URL,
  ENVIRONMENT: import.meta.env.VITE_ENVIRONMENT as 'develop' | 'production' | 'local',
} as const

if (!ENV.API_URL) {
  throw new Error('API_URL is required')
}

