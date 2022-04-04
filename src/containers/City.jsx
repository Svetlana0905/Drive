import { useGetCityQuery } from '../redux/'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useMemo } from 'react'
import { addCity, isDisubled } from '../redux/orderSlice'
import { ListDropDown } from '../components/ListDropDown/ListDropDown'

export const City = () => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('')
  const point = useSelector((state) => state.order.city)
  let citiesData = useMemo(() => [], [])

  useEffect(() => {
    dispatch(addCity(city))
    point && city ? dispatch(isDisubled(false)) : dispatch(isDisubled(true))
  }, [city, dispatch, point])

  const { data: cities = [], isSuccess } = useGetCityQuery()
  if (isSuccess) {
    citiesData = cities.data
  }
  return (
    <ListDropDown
      label={'Город'}
      setInputText={setCity}
      textInput={city}
      addressArray={citiesData}
      name="city"
    />
  )
}
