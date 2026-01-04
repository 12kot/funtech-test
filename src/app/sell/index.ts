import { lazy } from 'react'

export const SellPageLazy = lazy(() =>
  import('./page').then(({ SellPage }) => ({
    default: SellPage,
  }))
)
