import { useGetCityQuery, useGetPointQuery } from '../../redux/'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useMemo } from 'react'
import { addDataAddress } from '../../redux/orderSlice'
import { Preload } from '../../components/Preload/Preload'
import { ListDropDown } from '../../components/ListDropDown/ListDropDown'
import { MapBlock } from '../../components/Map/MapBlock'

export const AddressPage = () => {
  const dispatch = useDispatch()
  const cityFromState = useSelector((state) => state.order.city)
  const pointFromState = useSelector((state) => state.order.point)
  // const orderData = useSelector((state) => state.order.orderData)

  const [city, setCity] = useState(cityFromState)
  const [point, setPoint] = useState(pointFromState)
  const [cityId, setCityId] = useState('')
  const [pointId, setPointId] = useState('')
  const [filterPoint, setFilterPoint] = useState([])

  let pointsArray = useMemo(() => [], [])
  const { data: citiesArr = [] } = useGetCityQuery()
  const { data: points = [], isSuccess: isPointsSuccess } = useGetPointQuery()

  if (isPointsSuccess) {
    pointsArray = points.data
  }
  const clearPoint = () => {
    setPoint('')
    dispatch(addDataAddress({}))
  }

  const clearCity = () => {
    setPoint('')
    setCity('')
    dispatch(addDataAddress({}))
  }
  useEffect(() => {
    if (city && point && cityId && pointId) {
      dispatch(addDataAddress({ city, point, cityId, pointId }))
    }
  }, [city, point, cityId, pointId, dispatch])

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
          getId={setCityId}
          setInputText={setCity}
          currentId={cityId}
          textInput={city}
          addressArray={citiesArr.data}
          name="city"
        />
        <ListDropDown
          label={'Пункт выдачи'}
          setInputText={setPoint}
          clearInput={clearPoint}
          getId={setPointId}
          currentId={pointId}
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
