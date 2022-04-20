import { useGetCarQuery, useGetTariffQuery } from '../redux'
import { Preload } from '../components/Preload/Preload'
import { useSelector, useDispatch } from 'react-redux'
import { getPrices } from '../redux/orderSlice'
import { useEffect } from 'react'

export const Price = () => {
  const dispatch = useDispatch()
  const minPrice = useSelector((state) => state.order.minPrice)
  const maxPrice = useSelector((state) => state.order.maxPrice)
  // const carar = useSelector((state) => state.order.carArray)
  // console.log(carar)

  const { data: car = [], isLoading, isSuccess } = useGetCarQuery()

  useEffect(() => {
    let priceData = []
    if (isSuccess) {
      priceData = car.data
      dispatch(getPrices(priceData))
    }
  }, [isSuccess, dispatch, car.data])
  if (isLoading) {
    return <Preload size={'small'} />
  }
  return (
    <div className="total__price">
      <span className="text-bold">Цена:</span> от {minPrice} до {maxPrice} ₽
    </div>
  )
}

export const TotalPrice = () => {
  // const dataId = useSelector((state) => state.order.dataId)
  // console.log(dataId.cityId)
  // console.log(dataId.pointId)

  const { data = [], isLoading, isSuccess } = useGetTariffQuery()

  const getCost = () => {
    // console.log(dateEnd, endDateId)
  }
  getCost()
  if (isLoading) {
    return <Preload size={'small'} />
  }
  if (isSuccess) {
    console.log(data)
  }
  return <></>
}
