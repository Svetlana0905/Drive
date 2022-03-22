import { createSlice } from '@reduxjs/toolkit'
// const cityData = [
//   'Москва',
//   'Орел',
//   'Ульяновск',
//   'Ростов',
//   'Краснодар',
//   'Воронеж'
// ]
// const addressData = [
//   'Начните вводить пункт ...',
//   'Address-1',
//   'Address-2',
//   'Address-3',
//   'Address-4',
//   'Address-5',
//   'Address-6'
// ]

export const userSlise = createSlice({
  name: 'user',
  initialState: {
    city: 'city',
    address: 'Начните вводить пункт ...'
  },
  reducers: {
    getCity: (state, data) => {
      state.removeError = 'Введите корректный артикул'
    }
  }
})

export const { getCity } = userSlise.actions
// export const selectCity = (state) => state.item.city
export default userSlise.reducer
