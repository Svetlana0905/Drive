import { Cities, Points } from '../redux/actions/Actions'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { addCity, addStreet, isDisubled, firstStep } from '../redux/orderSlice'
import { ListDropDown } from '../components/ListDropDown/ListDropDown'

export const City = () => {
  const dispatch = useDispatch()
  const citiesData = Cities()
  const pointsData = Points()

  const [city, setCity] = useState('Уфа')
  const [point, setPoint] = useState('')
  const [filterPoint, setFilterPoint] = useState([])
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
    if (city && pointsData) {
      setFilterPoint(
        pointsData.filter((item) => item.cityId && item.cityId.name === city)
      )
    } else {
      setFilterPoint(pointsData)
    }
  }, [setFilterPoint, pointsData, city])

  useEffect(() => {
    dispatch(addCity(city))
    dispatch(addStreet(point))
    dispatch(firstStep())
    if (city && point) dispatch(isDisubled(false))
  }, [point, city, dispatch])

  return (
    <>
      <ListDropDown
        label={'Город'}
        setInputText={setCity}
        textInput={city}
        addressArray={citiesData}
        name="city"
      />
      <ListDropDown
        label={'Пункт выдачи'}
        setInputText={setPoint}
        textInput={point}
        addressArray={filterPoint}
        name="street"
      />
    </>
  )
}
