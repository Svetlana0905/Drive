import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api-factory.simbirsoft1.com/api',
  prepareHeaders: (headers) => {
    const token = `${process.env.REACT_APP_API_KEY}`
    if (token) {
      headers.set('X-Api-Factory-Application-Id', `${token}`)
    }
    return headers
  }
})
export const carApi = createApi({
  reducerPath: 'carApi',
  baseQuery,

  endpoints: (build) => ({
    getCity: build.query({
      query: () => `/db/city`
    }),
    getPoint: build.query({
      query: () => `/db/point`
    }),
    getCar: build.query({
      query: () => `/db/car`
    }),
    getCtegory: build.query({
      query: () => `/db/category`
    }),
    getTariff: build.query({
      query: () => `/db/rate`
    }),
    getOrderStatus: build.query({
      query: () => `/db/orderStatus`
    }),
    addOrder: build.mutation({
      query: (body) => ({
        url: `/db/order/`,
        method: 'POST',
        body
      })
    }),
    getOrderData: build.query({
      query: (id) => `/db/order/${id}`
    }),
    deleteOrderData: build.mutation({
      query: ({ id, ...data }) => ({
        url: `/db/order/${id}`,
        method: 'PUT',
        body: data
      })
    })
  })
})

export const {
  useGetCityQuery,
  useGetPointQuery,
  useGetCarQuery,
  useGetCtegoryQuery,
  useGetTariffQuery,
  useGetOrderStatusQuery,
  useAddOrderMutation,
  useGetOrderDataQuery,
  useDeleteOrderDataMutation
} = carApi
