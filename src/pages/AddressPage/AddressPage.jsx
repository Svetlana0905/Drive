import { useGetCityQuery, useGetPointQuery } from '../../redux/'
import { useDispatch } from 'react-redux'
import { useState, useEffect, useMemo } from 'react'
import { addCity } from '../../redux/orderSlice'
import { Preload } from '../../components/Preload/Preload'
import { ListDropDown } from '../../components/ListDropDown/ListDropDown'
import { MapBlock } from '../../components/Map/MapBlock'

export const AddressPage = () => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('')
  const [point, setPoint] = useState('')
  const [filterPoint, setFilterPoint] = useState([])
  // const [cityData, setCityData] = useState({})
  let pointsArray = useMemo(() => [], [])
  const { data: citiesArr = [] } = useGetCityQuery()
  const { data: points = [], isSuccess: isPointsSuccess } = useGetPointQuery()

  if (isPointsSuccess) {
    pointsArray = points.data
  }
  const clearPoint = () => {
    setPoint('')
  }
  const clearCity = () => {
    setPoint('')
    setCity('')
  }
  useEffect(() => {
    if (city && point) dispatch(addCity({ city, point }))
  })
  useEffect(() => {
    if (city && pointsArray) {
      setFilterPoint(
        pointsArray.filter((item) => item.cityId && item.cityId.name === city)
      )
    } else {
      setFilterPoint([])
    }
  }, [setFilterPoint, city, pointsArray])

  return pointsArray && citiesArr ? (
    <section className="order-page__order">
      <div className="order-page__body">
        <ListDropDown
          label={'Город'}
          clearInput={clearCity}
          setInputText={setCity}
          textInput={city}
          addressArray={citiesArr.data}
          name="city"
        />
        <ListDropDown
          label={'Пункт выдачи'}
          setInputText={setPoint}
          clearInput={clearPoint}
          textInput={point}
          addressArray={filterPoint}
          name="street"
        />
      </div>
      <MapBlock
        city={city}
        point={point}
        setCity={setCity}
        setPoint={setPoint}
        pointsArray={pointsArray}
      />
    </section>
  ) : (
    <Preload />
  )
}
