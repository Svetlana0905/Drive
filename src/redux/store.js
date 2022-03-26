import { configureStore } from '@reduxjs/toolkit'
import { carApi } from './carApi'
import userReduser from './userSlice'

export const store = configureStore({
  reducer: {
    [carApi.reducerPath]: carApi.reducer,
    user: userReduser
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(carApi.middleware)
})
