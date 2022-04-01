import { createSlice } from '@reduxjs/toolkit'

export const orderSlise = createSlice({
  name: 'order',
  initialState: {
    city: '',
    street: '',
    fullLocation: '',
    model: '',
    numberPage: 0,
    options: {},
    disabledBtn: true
  },
  reducers: {
    addCity: (state, data) => {
      const city = data.payload
      state.city = city
      state.fullLocation = `${city} ${state.street}`
      state.options['Пункт выдачи'] = `${state.fullLocation}`
    },
    addStreet: (state, data) => {
      const street = data.payload
      state.street = street
      state.fullLocation = `${street} ${state.city}`
      state.options['Пункт выдачи'] = `${state.fullLocation}`
    },
    forwardStep: (state, data) => {
      const lenght = data.payload.sliderLenght
      data.payload.index < lenght
        ? state.numberPage++
        : (state.numberPage = lenght)
      state.disabledBtn = true
    },
    backStep: (state, data) => {
      data.payload < state.numberPage
        ? (state.numberPage = data.payload)
        : (state.numberPage = 0)
      if (state.city && state.street && state.numberPage === 0)
        state.disabledBtn = false
    },
    getModel: (state, data) => {
      const modelCar = data.payload
      state.model = modelCar
      state.options['Модель'] = `${modelCar}`
    },
    changeDisabledBtn: (state) => {
      if (state.city && state.street && state.numberPage === 0)
        state.disabledBtn = false
      if (state.model && state.numberPage === 1) state.disabledBtn = false
    },
    isDisubled: (state, data) => {
      state.disabledBtn = data.payload
    }
  }
})

export const {
  addCity,
  addStreet,
  backStep,
  forwardStep,
  getModel,
  changeDisabledBtn,
  isDisubled
} = orderSlise.actions
export default orderSlise.reducer
