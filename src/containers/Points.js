import { ListDropDown } from '../components/ListDropDown/ListDropDown'
import { useGetPointQuery } from '../redux'
import { addStreet, changeDisabledBtn, isDisubled } from '../redux/orderSlice'
import { useDispatch } from 'react-redux'
import { useState, useRef, useEffect } from 'react'
import { Preload } from '../components/Preload/Preload'

export const Point = () => {
  const [pointFromBd, setPointFromBd] = useState('')
  const wrapperRef = useRef(null)
  const dispatch = useDispatch()

  let pointArray = []

  useEffect(() => {
    dispatch(addStreet(pointFromBd))
    dispatch(changeDisabledBtn())
  })

  const clearInput = () => {
    setPointFromBd('')
    dispatch(isDisubled(true))
  }

  const { data: points = [], isLoading, isSuccess } = useGetPointQuery()
  if (isLoading) {
    return <Preload />
  }
  if (isSuccess) {
    pointArray = points.data
  }
  return (
    <ListDropDown
      label={'Пункт выдачи'}
      addressArray={pointArray}
      wrapperRef={wrapperRef}
      clearInput={clearInput}
      setCityFromBd={setPointFromBd}
      cityFromBd={pointFromBd}
      name="street"
    />
  )
}
