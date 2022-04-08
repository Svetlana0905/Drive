import { createSlice } from '@reduxjs/toolkit'

export const orderSlise = createSlice({
  name: 'order',
  initialState: {
    city: '',
    point: '',
    minPrice: 0,
    maxPrice: 0,
    model: '',
    colorCar: '',
    tariffCar: '',
    carArray: [],
    numberPage: 0,
    options: {},
    sliderLength: 0,
    disabledBtn: true,
    wasChange: false
  },
  reducers: {
    addCity: (state, data) => {
      const city = data.payload
      // console.log(city)
      state.options['Пункт выдачи'] = `${city.city}, ${city.point}`
      state.disabledBtn = false
      delete state.options['Модель']
      delete state.options['Цвет']
      delete state.options['Тариф']
      state.wasChange = true
    },
    getCityData: (state, data) => {
      // console.log(data.payload)
    },

    forwardStep: (state, data) => {
      const lenght = data.payload.sliderLenght
      state.sliderLength = lenght
      data.payload.index < state.sliderLength
        ? state.numberPage++
        : (state.numberPage = lenght)
      state.wasChange ? (state.disabledBtn = true) : (state.disabledBtn = false)
    },
    backStep: (state, data) => {
      if (data.payload < state.numberPage) {
        state.numberPage = data.payload
        state.wasChange = state.disabledBtn
        state.disabledBtn = false
      } else state.numberPage = 0
    },

    isDisubled: (state, data) => {
      state.disabledBtn = data.payload
    },
    getModel: (state, data) => {
      const modelCar = data.payload
      state.model = modelCar.name
      state.carArray = modelCar
      state.options['Модель'] = `${modelCar.name}`
      state.minPrice = modelCar.priceMin
      state.maxPrice = modelCar.priceMax
      delete state.options['Цвет']
      delete state.options['Тариф']
    },
    getOptions: (state, data) => {
      console.log(data.payload)
      const color = data.payload.carColor
      state.colorCar = color
      if (color) state.options['Цвет'] = `${color}`
      const tariff = data.payload.carTariff
      state.carTariff = tariff
      if (tariff) state.options['Тариф'] = `${tariff}`
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
  backStep,
  forwardStep,
  getModel,
  isDisubled,
  getPrices,
  getOptions,
  getCityData
} = orderSlise.actions
export default orderSlise.reducer
