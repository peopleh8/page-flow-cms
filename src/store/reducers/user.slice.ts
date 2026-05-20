import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const userReducer = createSlice({
  name: 'user',
  initialState: {
    isAuth: true as boolean | null,
    user: {} as any,
    accessToken: null as string | null,
    deviceToken: null as string | null,
    devicePlatform: null as string | null,
  },
  reducers: {
    setAuth(state, action: PayloadAction<boolean | null>) {
      state.isAuth = action.payload
    },
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload
    },
    setAccessToken(state, action: PayloadAction<string | null>) {
      state.accessToken = action.payload
    },
    setDeviceToken(state, action: PayloadAction<string | null>) {
      state.deviceToken = action.payload
    },
    setDevicePlatform(state, action: PayloadAction<string | null>) {
      state.devicePlatform = action.payload
    },
  },
})

export default userReducer.reducer
export const { setAuth, setUser, setAccessToken, setDeviceToken, setDevicePlatform } = userReducer.actions
