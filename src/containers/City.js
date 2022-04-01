import { useGetCityQuery } from '../redux'
import { useDispatch } from 'react-redux'
import { useState, useRef, useEffect } from 'react'
import { addCity, isDisubled, changeDisabledBtn } from '../redux/orderSlice'
import { ListDropDown } from '../components/ListDropDown/ListDropDown'
import { Preload } from '../components/Preload/Preload'

export const City = () => {
  const [cityFromBd, setCityFromBd] = useState('')
  const wrapperRef = useRef(null)
  const dispatch = useDispatch()
  let cityArray = []

  useEffect(() => {
    dispatch(addCity(cityFromBd))
    dispatch(changeDisabledBtn())
  })
  const clearInput = () => {
    dispatch(isDisubled(true))
    setCityFromBd('')
  }

  const { data: cities = [], isLoading, isSuccess } = useGetCityQuery()
  if (isLoading) {
    return <Preload />
  }
  if (isSuccess) {
    cityArray = cities.data
  }
  return (
    <ListDropDown
      label={'Город'}
      addressArray={cityArray}
      wrapperRef={wrapperRef}
      clearInput={clearInput}
      setCityFromBd={setCityFromBd}
      cityFromBd={cityFromBd}
      name="city"
    />
  )
}
