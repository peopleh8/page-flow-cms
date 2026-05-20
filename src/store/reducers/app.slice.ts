import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const appReducer = createSlice({
  name: 'app',
  initialState: {
    isFirstLoad: true as boolean,
  },
  reducers: {
    setFirstLoad(state, action: PayloadAction<boolean>) {
      state.isFirstLoad = action.payload
    },
  },
})

export const { setFirstLoad } = appReducer.actions
export default appReducer.reducer
