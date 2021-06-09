import { createSlice } from '@reduxjs/toolkit'

export const liveSlice = createSlice({
  name: 'live',
  initialState: {
    live: false
  },
  reducers: {
    set: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.live = true
    },
    reset: (state) => {
      state.live = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { set, reset } = liveSlice.actions

export default liveSlice.reducer