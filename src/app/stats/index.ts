import { lazy } from 'react'

export const StatsPageLazy = lazy(() =>
  import('./page').then(({ StatsPage }) => ({
    default: StatsPage,
  }))
)
