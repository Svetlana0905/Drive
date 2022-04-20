import { useGetPointQuery } from '../redux'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useMemo } from 'react'
import { addStreet, isDisubled } from '../redux/orderSlice'
import { ListDropDown } from '../components/ListDropDown/ListDropDown'

export const Point = () => {
  const dispatch = useDispatch()
  const [point, setPoint] = useState('')
  const [filterPoint, setFilterPoint] = useState([])
  const city = useSelector((state) => state.order.city)
  let pointArray = useMemo(() => [], [])

  const getText = (word) => {
    setPoint(word)
  }

  useEffect(() => {
    if (city && pointArray) {
      setFilterPoint(
        pointArray.filter((item) => item.cityId && item.cityId.name === city)
      )
    } else {
      setFilterPoint(pointArray)
    }
  }, [setFilterPoint, city, pointArray])

  useEffect(() => {
    city ? dispatch(addStreet(point)) : setPoint('')
    point && city ? dispatch(isDisubled(false)) : dispatch(isDisubled(true))
  }, [point, dispatch, city])

  const { data: points = [], isSuccess } = useGetPointQuery()
  if (isSuccess) {
    pointArray = points.data
  }
  return (
    <ListDropDown
      label={'Пункт выдачи'}
      getText={getText}
      setInputText={setPoint}
      textInput={point}
      addressArray={filterPoint}
      name="street"
    />
  )
}
