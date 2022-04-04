import { useGetCtegoryQuery, useGetCarQuery } from '../../redux'

export const Categories = () => {
  let categoryArray = []
  const { data: cities = [], isSuccess } = useGetCtegoryQuery()

  if (isSuccess) {
    categoryArray = cities.data
  }
  return categoryArray
}

export const CarData = () => {
  let carData = []

  const { data: car = [], isSuccess } = useGetCarQuery()

  if (isSuccess) {
    carData = car.data
  }
  return carData
}
