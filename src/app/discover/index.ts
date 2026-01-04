import { lazy } from 'react'

export const DiscoverPageLazy = lazy(() =>
  import('./page').then(({ DiscoverPage }) => ({
    default: DiscoverPage,
  }))
)
