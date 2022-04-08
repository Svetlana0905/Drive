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
    })
  })
})

export const {
  useGetCityQuery,
  useGetPointQuery,
  useGetCarQuery,
  useGetCtegoryQuery
} = carApi
