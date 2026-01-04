import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQuery } from 'shared/features/base-query'

import { NFT } from '../types'

export const discoverApi = createApi({
  reducerPath: 'discoverApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getWeeklyNFTList: builder.query<NFT[], void>({
      query: () => '/nfts/list',
    }),
  }),
})

export const { useGetWeeklyNFTListQuery } = discoverApi
