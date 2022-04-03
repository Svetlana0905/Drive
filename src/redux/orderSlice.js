import { createSlice } from '@reduxjs/toolkit'

export const orderSlise = createSlice({
  name: 'order',
  initialState: {
    city: '',
    point: '',
    fullLocation: '',
    minPrice: 0,
    maxPrice: 0,
    model: '',
    numberPage: 0,
    options: {},
    disabledBtn: true,
    wasChange: false
  },
  reducers: {
    addCity: (state, data) => {
      const city = data.payload
      state.city = city
      state.fullLocation = `${city}`
      if (city) state.options['Пункт выдачи'] = `${state.fullLocation}`
    },
    addStreet: (state, data) => {
      const point = data.payload
      state.point = point
      state.fullLocation = `${point} ${state.city}`
      state.options['Пункт выдачи'] = `${state.fullLocation}`
    },
    forwardStep: (state, data) => {
      const lenght = data.payload.sliderLenght
      data.payload.index < lenght
        ? state.numberPage++
        : (state.numberPage = lenght)
      state.wasChange ? (state.disabledBtn = true) : (state.disabledBtn = false)
      console.log(state.wasChange + ' forw')
    },
    backStep: (state, data) => {
      data.payload < state.numberPage
        ? (state.numberPage = data.payload)
        : (state.numberPage = 0)
      state.wasChange = state.disabledBtn
      state.disabledBtn = false
    },

    firstStep: (state, data) => {
      state.model = ''
      delete state.options['Модель']
      state.wasChange = true
      console.log(state.wasChange + ' 1 step')
    },
    isDisubled: (state, data) => {
      state.disabledBtn = data.payload
    },
    getModel: (state, data) => {
      const modelCar = data.payload
      state.model = modelCar.name
      state.options['Модель'] = `${modelCar.name}`
      state.minPrice = modelCar.priceMin
      state.maxPrice = modelCar.priceMax
    },
    getPrices: (state, data) => {
      const minPriceArray = data.payload.reduce((accum, item) => {
        accum.push(item.priceMin)
        return accum
      }, [])
      const maxPriceArray = data.payload.reduce((accum, item) => {
        accum.push(item.priceMax)
        // console.log('rend')
        return accum
      }, [])
      state.minPrice = Math.min.apply(null, minPriceArray)
      state.maxPrice = Math.max.apply(null, maxPriceArray)
    }
  }
})

export const {
  addCity,
  addStreet,
  backStep,
  forwardStep,
  getModel,
  isDisubled,
  getPrices,
  // getChange,
  firstStep
} = orderSlise.actions
export default orderSlise.reducer
