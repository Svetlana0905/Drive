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
    disabledBtn: false,
    wasChange: false
  },
  reducers: {
    forwardStep: (state, data) => {
      const currentPage = data.payload
      state.numberPage = currentPage
    },
    changeDisabledBtn: (state, data) => {
      state.disabledBtn = data.payload
    },
    addDataAddress: (state, data) => {
      const addressData = data.payload
      state.city = addressData.city
      state.point = addressData.point
      state.options.length = 0
      if (state.city) state.biggerPage = state.numberPage
      if (addressData.city && addressData.point) {
        state.options.push([['Пункт выдачи', `${state.city}, ${state.point}`]])
        state.dataId = {
          cityId: `${addressData.cityId}`,
          pointId: `${addressData.pointId}`
        }
      } else state.disabledBtn = true
    },
    getModel: (state, data) => {
      const modelCar = data.payload
      // console.log(modelCar)
      state.model = modelCar.carModel.name
      state.carArray = modelCar.carModel
      state.options.splice(state.numberPage)
      if (modelCar.carModel.name) {
        state.options.push([['Модель', `${state.model}`]])
        state.biggerPage = state.numberPage
        state.dataId.carId = `${modelCar.carModel.id}`
      }

      state.minPrice = modelCar.carModel.priceMin
      state.maxPrice = modelCar.carModel.priceMax
    },
    getOptions: (state, data) => {
      // console.log(data.payload)
      if (data.payload.carColor) {
        state.colorCar = `${data.payload.carColor}`
        state.dataId.color = `${data.payload.carColor}`
      } else state.dataId.color = 'Любой'
      if (data.payload.carTariff) {
        state.tariffCar = data.payload.carTariff
        state.dataId.rateId = `${data.payload.carTariffВData.id}`
      } else state.tariffCar = 'На сутки'

      if (data.payload.tank) {
        state.tank = true
        state.dataId.isFullTank = `${data.payload.tank}`
      } else {
        state.tank = false
        state.dataId.isFullTank = false
      }

      if (data.payload.childChair) {
        state.chair = true
        state.dataId.isNeedChildChair = `${data.payload.childChair}`
      } else {
        state.chair = false
        state.dataId.isNeedChildChair = false
      }

      if (data.payload.rightWheel) {
        state.rightWheel = true
        state.dataId.isRightWhell = `${data.payload.childChair}`
      } else {
        state.dataId.isRightWhell = false
        state.rightWheel = false
      }
      if (data.payload.startDateId && data.payload.endDateId) {
        state.dataId.dateFrom = data.payload.startDateId
        state.dataId.dateTo = data.payload.endDateId
      }
      if (data.payload.objOptions) {
        state.options.splice(state.numberPage)
        state.options.push(data.payload.objOptions)
        state.biggerPage = state.numberPage
      }
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
  forwardStep,
  getModel,
  changeDisabledBtn,
  getPrices,
  getOptions,
  getOptArr
} = orderSlise.actions
export default orderSlise.reducer
