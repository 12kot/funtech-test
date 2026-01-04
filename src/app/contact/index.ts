import { lazy } from 'react'

export const ContactPageLazy = lazy(() =>
  import('./page').then(({ ContactPage }) => ({
    default: ContactPage,
  }))
)
