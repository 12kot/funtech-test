import { lazy } from 'react'

export const TermConditionsPageLazy = lazy(() =>
  import('./page').then(({ TermConditionsPage }) => ({
    default: TermConditionsPage,
  }))
)
