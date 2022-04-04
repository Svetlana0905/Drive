import { useGetCityQuery } from '../redux/'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { addCity } from '../redux/orderSlice'
import { ListDropDown } from '../components/ListDropDown/ListDropDown'

export const City = () => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('Уфа')

  // const [filterCity, setFilterCity] = useState(null)
  // useEffect(() => {
  //   if (city && citiesData) {
  //     setFilterCity(
  //       citiesData.filter((item) =>
  //         item.name.toLowerCase().includes(city.toLowerCase())
  //       )
  //     )
  //   } else {
  //     setFilterCity(citiesData[0])
  //   }
  // }, [city, citiesData])
  // console.log(filterCity + ' page filterCity')

  useEffect(() => {
    dispatch(addCity(city))
  }, [city, dispatch])

  let citiesData = []
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
