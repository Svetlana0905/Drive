import { configureStore } from '@reduxjs/toolkit'
import { carApi } from './carApi'
import orderReduser from './orderSlice'

export const store = configureStore({
  reducer: {
    [carApi.reducerPath]: carApi.reducer,
    order: orderReduser
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(carApi.middleware)
})
