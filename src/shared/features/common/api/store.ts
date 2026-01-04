import { createSlice } from '@reduxjs/toolkit'

interface ICommonSlice {}

const initialState: ICommonSlice = {}

const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,

  reducers: {},
})

export const commonReducer = commonSlice.reducer

export const {} = commonSlice.actions
