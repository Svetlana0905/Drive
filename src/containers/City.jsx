import { useGetCityQuery } from '../redux/'
import { Preload } from '../components/Preload/Preload'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { addCity, isDisubled } from '../redux/orderSlice'
import { ListDropDown } from '../components/ListDropDown/ListDropDown'

export const City = () => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('')
  const point = useSelector((state) => state.order.city)

  const getText = (word) => {
    setCity(word)
    console.log(word)
    console.log(city)
  }

  useEffect(() => {
    dispatch(addCity(city))
    point && city ? dispatch(isDisubled(false)) : dispatch(isDisubled(true))
  }, [city, dispatch, point])

  const { data: cities = [], isLoading } = useGetCityQuery()
  if (isLoading) {
    return <Preload />
  }
  return (
    <ListDropDown
      label={'Город'}
      getText={getText}
      setInputText={setCity}
      textInput={city}
      addressArray={cities.data}
      name="city"
    />
  )
}
