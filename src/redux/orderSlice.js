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
    tariffCar: 'Месячный',
    colorCar: 'Любой',
    categories: 'Все',
    surcharge: {},
    carArray: [],
    options: [],
    responseId: '',
    responseData: {},
    dataId: {
      dateFrom: null,
      dateTo: null,
      rateId: '6259003d73b61100181028d9',
      price: 0
    }
  },
  reducers: {
    forwardStep: (state, data) => {
      state.numberPage = data.payload
    },

    addDataAddress: (state, data) => {
      state.city = data.payload.city
      state.point = data.payload.point
      state.options.length = 0
      state.biggerPage = 0
      state.dataId.dateFrom = null
      state.dataId.dateTo = null
      if (data.payload.city && data.payload.point) {
        state.options.push([['Пункт выдачи', `${state.city}, ${state.point}`]])
        state.biggerPage = state.numberPage + 1
      }
      if (data.payload.cityId) state.dataId.cityId = `${data.payload.cityId}`
      if (data.payload.pointId) state.dataId.pointId = `${data.payload.pointId}`
    },

    getCategory: (state, data) => {
      if (data.payload.filterChek) state.categories = data.payload.filterChek
    },
    getModel: (state, data) => {
      const modelCar = data.payload
      state.model = modelCar.name
      state.carArray = modelCar
      state.options.splice(state.numberPage)
      state.biggerPage = state.numberPage
      state.dataId.dateFrom = null
      state.dataId.dateTo = null
      if (modelCar.name) {
        state.options.push([['Модель', `${state.model}`]])
        state.biggerPage = state.numberPage + 1
      }
      if (modelCar.id) state.dataId.carId = `${modelCar.id}`
      state.minPrice = modelCar.priceMin
      state.maxPrice = modelCar.priceMax
    },
    getOptions: (state, data) => {
      if (data.payload.carColor) {
        state.dataId.color = `${data.payload.carColor}`
        state.colorCar = `${data.payload.carColor}`
      }
      if (data.payload.carTariff) {
        state.tariffCar = data.payload.carTariff
      } else state.tariffCar = 'Месячный'

      if (data.payload.carTariffId) {
        state.dataId.rateId = `${data.payload.carTariffId}`
      }
      if (data.payload.tank) {
        state.dataId.isFullTank = data.payload.tank
        state.surcharge.tank = +500
      } else {
        state.dataId.isFullTank = false
        state.surcharge.tank = +0
      }

      if (data.payload.childChair) {
        state.dataId.isNeedChildChair = data.payload.childChair
        state.surcharge.child = +200
      } else {
        state.dataId.isNeedChildChair = false
        state.surcharge.child = +0
      }

      if (data.payload.rightWheell) {
        state.dataId.isRightWhell = data.payload.rightWheell
        state.surcharge.whell = +1600
      } else {
        state.dataId.isRightWhell = false
        state.surcharge.whell = +0
      }

      if (data.payload.startDateId) {
        state.dataId.dateFrom = data.payload.startDateId
      }
      if (data.payload.endDate) {
        state.biggerPage = state.numberPage + 1
      } else state.biggerPage = state.numberPage
      data.payload.endDate
        ? (state.dataId.dateTo = data.payload.endDate)
        : (state.dataId.dateTo = null)

      if (data.payload.objOptions) {
        state.options.splice(state.numberPage)
        state.options.push(data.payload.objOptions)
      }
    },
    getPrices: (state, data) => {
      const minPriceArray = data.payload.reduce((accum, item) => {
        accum.push(+item.priceMin)
        return accum
      }, [])
      const maxPriceArray = data.payload.reduce((accum, item) => {
        accum.push(+item.priceMax)
        return accum
      }, [])
      state.minPrice = Math.min(...minPriceArray)
      state.maxPrice = Math.max(...maxPriceArray)
    },
    getFullPrice: (state, data) => {
      if (data.payload) {
        state.dataId.price = +data.payload.netPrice + +data.payload.extra
        state.dataId.orderStatusId = '5e26a191099b810b946c5d89'
      } else {
        state.dataId.price = null
      }
    },
    getResponse: (state, data) => {
      if (data.payload) state.responseId = data.payload
    },
    getResponseDate: (state, data) => {
      state.responseData = data.payload
    },
    clearDate: (state, data) => {
      state.dataId.price = null
      state.options.length = 0
      state.city = ''
      state.point = ''
      state.dataId.price = 0
      state.biggerPage = 0
    }
  }
})

export const {
  addDataAddress,
  forwardStep,
  getModel,
  getPrices,
  getOptions,
  getCategory,
  getFullPrice,
  getResponse,
  getResponseDate,
  clearDate
} = orderSlise.actions
export default orderSlise.reducer
