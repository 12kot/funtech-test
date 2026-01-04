import { createSlice } from '@reduxjs/toolkit'

interface IDiscoverSlice {}

const initialState: IDiscoverSlice = {}

const discoverSlice = createSlice({
  name: 'discoverSlice',
  initialState,

  reducers: {},
})

export const discoverReducer = discoverSlice.reducer

export const {} = discoverSlice.actions
