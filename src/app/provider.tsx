import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import { ENV } from 'config'
import i18n from 'i18n/config'
import { store } from 'shared/store'
import { ErrorPage } from 'shared/components/errors'

import { Routes } from './router'
import { AppLayout } from './layout'

i18n.init()

const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={(props) => <ErrorPage error={props.error} />}>
      <Provider store={store}>
        <BrowserRouter basename={ENV.BASE_URL}>
          <AppLayout>
            <Routes />
          </AppLayout>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  )
}

export default App
