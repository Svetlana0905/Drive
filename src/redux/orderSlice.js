import { createSlice } from '@reduxjs/toolkit'

export const orderSlise = createSlice({
  name: 'order',
  initialState: {
    city: '',
    street: '',
    location: ''
  },
  reducers: {
    addCity: (state, data) => {
      state.city = data.payload.cityFromBd
    },
    addStreet: (state, data) => {
      state.street = data.payload.cityFromBd
    },
    getPage: (state, data) => {
      state.location = data.payload.slideIndex
    }
  }
})

export const { addCity, addStreet, getPage } = orderSlise.actions
export default orderSlise.reducer
