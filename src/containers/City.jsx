import { useGetCityQuery } from '../redux/'
import { useDispatch } from 'react-redux'
import { useState, useEffect, useMemo } from 'react'
import { addCity } from '../redux/orderSlice'
import { ListDropDown } from '../components/ListDropDown/ListDropDown'

export const City = () => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('Уфа')
  let citiesData = useMemo(() => [], [])

  useEffect(() => {
    dispatch(addCity(city))
  }, [city, dispatch])

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
