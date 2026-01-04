import { lazy } from 'react'

export const AboutUsPageLazy = lazy(() =>
  import('./page').then(({ AboutUsPage }) => ({
    default: AboutUsPage,
  }))
)
