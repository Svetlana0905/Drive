import { useGetCtegoryQuery } from '../../redux'
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
