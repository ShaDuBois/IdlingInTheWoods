import { configureStore } from '@reduxjs/toolkit'
import experienceReducer from './features/experience/experienceSlice'
import userReducer from './features/user/userSlice'
import liveReducer from './features/live/liveSlice'

export default configureStore({
  reducer: {
    experience: experienceReducer,
    user: userReducer,
    live: liveReducer,
  },
})