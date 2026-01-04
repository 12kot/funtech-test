import { ReactElement, Suspense } from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'

import { routes } from 'config'

export const Routes: React.FC = (): ReactElement => {
  return (
    <ReactRoutes>
      {Object.entries(routes).map(([path, page]) => {
        return <Route key={path} path={path} element={<Suspense fallback={<></>}>{page.element}</Suspense>} />
      })}
    </ReactRoutes>
  )
}
