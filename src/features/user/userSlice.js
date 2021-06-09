import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    headers: {},
    user_data: {},
  },
  reducers: {
    set: (state, payload) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.headers = payload.payload.headers;
      state.user_data = payload.payload.user_data;
    },
    reset: (state) => {
      state.headers = {}
      state.user_data = {}
    }
  },
})

// Action creators are generated for each case reducer function
export const { set, reset } = userSlice.actions

export default userSlice.reducer