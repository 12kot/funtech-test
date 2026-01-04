import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ENV } from 'config'

export const baseQuery = fetchBaseQuery({
  baseUrl: ENV.API_URL + '/api/v3',
  prepareHeaders: (headers) => {
    return headers
  },
})
