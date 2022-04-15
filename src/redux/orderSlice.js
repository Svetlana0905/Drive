import { createSlice } from '@reduxjs/toolkit'

export const orderSlise = createSlice({
  name: 'order',
  initialState: {
    numberPage: 0,
    biggerPage: 0,
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
    dataId: {},
    disabledBtn: true,
    wasChange: false
  },
  reducers: {
    forwardStep: (state, data) => {
      const currentPage = data.payload
      state.numberPage = currentPage
    },
    backStep: (state, data) => {
      if (data.payload < state.numberPage) {
        state.numberPage = data.payload
        state.wasChange = state.disabledBtn
        state.disabledBtn = false
      } else state.numberPage = 0
    },
    changeDisabledBtn: (state, data) => {
      state.disabledBtn = data.payload
    },
    addDataAddress: (state, data) => {
      const addressData = data.payload
      state.city = addressData.city
      state.point = addressData.point
      if (state.city) state.options.length = 0
      if (state.city) state.biggerPage = state.numberPage
      if (addressData.city && addressData.point) {
        state.options.push([['Пункт выдачи', `${state.city}, ${state.point}`]])
        state.disabledBtn = false
      } else state.disabledBtn = true
    },
    getModel: (state, data) => {
      const modelCar = data.payload
      state.model = modelCar.carModel.name
      state.carArray = modelCar.carModel
      if (modelCar.carModel.name) state.options.splice(state.numberPage)
      state.options.push([['Модель', `${state.model}`]])
      if (modelCar.carModel.name) state.biggerPage = state.numberPage
      state.minPrice = modelCar.carModel.priceMin
      state.maxPrice = modelCar.carModel.priceMax
      state.disabledBtn = false
    },
    getOptions: (state, data) => {
      data.payload.carColor
        ? (state.colorCar = data.payload.carColor)
        : (state.colorCar = 'Любой')
      data.payload.carTariff
        ? (state.tariffCar = data.payload.carTariff)
        : (state.tariffCar = 'На сутки')
      data.payload.tank ? (state.tank = true) : (state.tank = false)
      data.payload.childChair ? (state.chair = true) : (state.chair = false)
      data.payload.rightWheel
        ? (state.rightWheel = true)
        : (state.rightWheel = false)
      if (data.payload.objOptions) state.options.splice(state.numberPage)
      state.options.push(data.payload.objOptions)
      if (data.payload.objOptions) state.biggerPage = state.numberPage
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
  changeDisabledBtn,
  getPrices,
  getOptions,
  getOptArr
} = orderSlise.actions
export default orderSlise.reducer
