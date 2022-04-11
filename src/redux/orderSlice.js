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
    options2: [],
    orderData: {},
    sliderLength: 0,
    disabledBtn: false,
    wasChange: false
  },
  reducers: {
    forwardStep: (state, data) => {
      const sliderLength = data.payload.sliderLength
      const currentPage = data.payload.numberPage
      // console.log(sliderLength, currentPage)
      if (currentPage < sliderLength - 1) {
        state.numberPage = currentPage + 1
      } else {
        console.log('здесь функция на удаление данных из options')
        state.numberPage = 0
      }

      state.wasChange ? (state.disabledBtn = true) : (state.disabledBtn = false)
    },
    backStep: (state, data) => {
      if (data.payload < state.numberPage) {
        state.numberPage = data.payload
        state.wasChange = state.disabledBtn
        state.disabledBtn = false
      } else state.numberPage = 0
    },

    changeDisubledBtn: (state, data) => {
      state.disabledBtn = data.payload
    },
    addDataAddress: (state, data) => {
      const dataAddress = data.payload
      const obj = dataAddress.objAddress
      console.log(obj)
      if (obj) state.options = [...[obj]]

      // console.log(`${state.options[0]['Пункт выдачи']} nmnmnm,nn`)
      state.orderData.cityId = `${dataAddress.cityId}`
      state.orderData.pointId = `${dataAddress.pointId}`
      state.city && state.point
        ? (state.disabledBtn = false)
        : (state.disabledBtn = true)
      state.wasChange = true
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
      const optionsData = data.payload
      const obj = data.payload.objOptions
      console.log(data.payload.objOptions)
      if (optionsData) state.options.splice(state.numberPage)
      console.log(obj)
      if (obj) state.options = [[obj]]
      console.log(state.options)
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
