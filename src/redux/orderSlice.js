import { createSlice } from '@reduxjs/toolkit'

export const orderSlise = createSlice({
  name: 'order',
  initialState: {
    numberPage: 0,
    city: '',
    point: '',
    minPrice: 0,
    maxPrice: 0,
    model: '',
    colorCar: '',
    tariffCar: '',
    chair: false,
    tank: false,
    rightWheel: false,
    startDate: '',
    endDate: '',
    carArray: [],
    options: [],
    orderData: {},
    sliderLength: 0,
    disabledBtn: true,
    wasChange: false
  },
  reducers: {
    forwardStep: (state, data) => {
      const currentPage = data.payload.id
      state.numberPage = currentPage + 1
      // state.disabledBtn = false
    },
    backStep: (state, data) => {
      if (data.payload < state.numberPage) {
        state.numberPage = data.payload
        state.wasChange = state.disabledBtn
        state.disabledBtn = false
      } else state.numberPage = 0
    },

    addDataAddress: (state, data) => {
      const addressData = data.payload
      // console.log(addressData)
      state.city = addressData.city
      state.point = addressData.point
      if (state.city) state.options.length = 0
      if (addressData.city && addressData.point) {
        state.options.push([['Пункт выдачи', `${state.city}, ${state.point}`]])
        state.disabledBtn = false
      } else state.disabledBtn = true
    },
    getModel: (state, data) => {
      const modelCar = data.payload
      state.model = modelCar.name
      state.carArray = modelCar
      if (modelCar.name) state.options.splice(state.numberPage)
      state.options.push([['Модель', `${state.model}`]])
      state.minPrice = modelCar.priceMin
      state.maxPrice = modelCar.priceMax
      state.disabledBtn = false
    },
    getOptions: (state, data) => {
      // const optionsData = data.payload
      // const obj = data.payload.objOptions
      // console.log(data.payload.objOptions)
      // if (optionsData) state.options.splice(state.numberPage)
      // console.log(obj)
      // if (obj) state.options = [[obj]]
      // console.log(state.options)
      state.disabledBtn = false
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
  addDataAddress,
  backStep,
  forwardStep,
  getModel,
  changeDisubledBtn,
  getPrices,
  getOptions,
  getOptArr
} = orderSlise.actions
export default orderSlise.reducer
