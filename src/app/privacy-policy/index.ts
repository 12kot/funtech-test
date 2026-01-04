import { lazy } from 'react'

export const PrivacyPolicyPageLazy = lazy(() =>
  import('./page').then(({ PrivacyPolicyPage }) => ({
    default: PrivacyPolicyPage,
  }))
)
