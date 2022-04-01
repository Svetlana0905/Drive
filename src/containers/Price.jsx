import { useGetCarQuery } from '../redux'
import { Preload } from '../components/Preload/Preload'
import { useSelector, useDispatch } from 'react-redux'
import { getPrices } from '../redux/orderSlice'
import { useEffect } from 'react'

export const Price = () => {
  const dispatch = useDispatch()
  const minPrice = useSelector((state) => state.order.minPrice)
  const maxPrice = useSelector((state) => state.order.maxPrice)

  const { data: car = [], isLoading, isSuccess } = useGetCarQuery()
  useEffect(() => {
    let priceData = []
    if (isSuccess) {
      console.log(priceData)
      priceData = car.data
      dispatch(getPrices(priceData))
    }
  }, [isSuccess, dispatch, car.data])
  if (isLoading) {
    return <Preload />
  }
  return (
    <div className="total__price">
      Цена: от {minPrice} до {maxPrice} ₽{console.log('rend222')}
    </div>
  )
}
