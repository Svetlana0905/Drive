import { createSlice } from '@reduxjs/toolkit'

export const orderSlise = createSlice({
  name: 'order',
  initialState: {
    city: '',
    street: ''
  },
  reducers: {
    addCity: (state, data) => {
      const street = data.payload.cityFromBd
      street !== '' ? (state.city = `${street},`) : (state.city = '')
    },
    addStreet: (state, data) => {
      state.street = data.payload.cityFromBd
    }
  }
})

export const { addCity, addStreet } = orderSlise.actions
export default orderSlise.reducer
