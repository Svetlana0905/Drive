import { useGetCityQuery } from '../../redux'
import { ListDropDown } from '../../components/ListDropDown/ListDropDown'
import { Preload } from '../Preload/Preload'
export const City = () => {
  let addressArray = []
  const name = 'city'
  const { data: cities = [], isLoading, isSuccess } = useGetCityQuery()
  if (isLoading) {
    return <Preload />
  }
  if (isSuccess) {
    addressArray = cities.data
  }
  return (
    <>
      <ListDropDown label={'Город'} addressArray={addressArray} name={name} />
    </>
  )
}
