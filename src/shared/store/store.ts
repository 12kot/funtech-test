import { configureStore } from '@reduxjs/toolkit'

import { commonReducer } from 'shared/features/common'

export const Reducers = {
  common: commonReducer,
}

export const store = configureStore({
  reducer: Reducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
  },
})
