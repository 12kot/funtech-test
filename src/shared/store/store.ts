import { configureStore } from '@reduxjs/toolkit'

import { discoverReducer, discoverApi } from 'shared/features/discover'

export const Reducers = {
  discover: discoverReducer,
  [discoverApi.reducerPath]: discoverApi.reducer,
}

export const store = configureStore({
  reducer: Reducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(discoverApi.middleware)
  },
})
