import { useGetCtegoryQuery } from '../../redux'

export const Categories = () => {
  let categoryArray = []
  const { data: cities = [], isSuccess } = useGetCtegoryQuery()
  if (isSuccess) {
    categoryArray = cities.data
  }
  return categoryArray
}
