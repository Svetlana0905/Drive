import {
  useGetCtegoryQuery,
  useGetCityQuery,
  useGetPointQuery
} from '../../redux'
import { Preload } from '../../components/Preload/Preload'

export const Categories = () => {
  let categoryArray = []
  const { data: cities = [], isLoading, isSuccess } = useGetCtegoryQuery()
  if (isLoading) {
    return <Preload />
  }
  if (isSuccess) {
    categoryArray = cities.data
  }
  return categoryArray
}

export const Cities = () => {
  let cityArray = []
  const { data: cities = [], isSuccess } = useGetCityQuery()
  if (isSuccess) {
    cityArray = cities.data
  }
  return cityArray
}

export const Points = () => {
  let pointArray = []
  const { data: points = [], isSuccess } = useGetPointQuery()
  if (isSuccess) {
    pointArray = points.data
  }
  return pointArray
}
