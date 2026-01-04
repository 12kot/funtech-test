import { lazy } from 'react'

export const CreatorsPageLazy = lazy(() =>
  import('./page').then(({ CreatorsPage }) => ({
    default: CreatorsPage,
  }))
)
