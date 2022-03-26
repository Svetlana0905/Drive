import { useGetPointQuery } from '../../redux'
import { ListDropDown } from '../../components/ListDropDown/ListDropDown'
import { Preload } from '../Preload/Preload'

export const Point = () => {
  let addressArray = []
  const name = 'street'
  const { data: point = [], isLoading, isSuccess } = useGetPointQuery()
  if (isLoading) {
    return <Preload />
  }
  if (isSuccess) {
    addressArray = point.data
  }
  return (
    <>
      <ListDropDown
        label={'Пункт выдачи'}
        addressArray={addressArray}
        name={name}
      />
    </>
  )
}
