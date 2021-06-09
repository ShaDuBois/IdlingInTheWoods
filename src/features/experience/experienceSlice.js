import { createSlice } from '@reduxjs/toolkit'

export const experienceSlice = createSlice({
  name: 'experience',
  initialState: {
    value: 0,
    mult: 1
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += state.mult
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload * state.mult
    },
    load: (state, action) => {
        state.value = action.payload
    },
    change_mult: (state, action) => {
      if(action.payload.type === '+') {
        state.mult += action.payload.value
      } else if(action.payload.type === '-') {
        state.mult -= action.payload.value
      } else if(action.payload.type === '*') {
        state.mult *= action.payload.value
      } else if(action.payload.type === '/') {
        state.mult /= action.payload.value
      } else {
        console.warn('Unexpected change mult arg '+ action.payload.type)
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = experienceSlice.actions

export default experienceSlice.reducer