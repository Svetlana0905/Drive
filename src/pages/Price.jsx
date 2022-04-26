import { useGetCarQuery, useGetTariffQuery } from '../redux'
import { Preload } from '../components/Preload/Preload'
import { useSelector, useDispatch } from 'react-redux'
import { getPrices, getFullPrice } from '../redux/orderSlice'
import { useEffect, useState } from 'react'

export const Price = () => {
  const dispatch = useDispatch()
  const { data: car = [], isLoading, isSuccess } = useGetCarQuery()
  const { data: tariffData = [] } = useGetTariffQuery()

  const minPrice = useSelector((state) => state.order.minPrice)
  const maxPrice = useSelector((state) => state.order.maxPrice)
  const dateFrom = useSelector((state) => state.order.dataId.dateFrom)
  const dateTo = useSelector((state) => state.order.dataId.dateTo)
  const rate = useSelector((state) => state.order.dataId.rateId)
  const surcharge = useSelector((state) => state.order.surcharge)

  const [extra, setExtra] = useState(0)
  const [netPrice, setNetPrice] = useState(
    useSelector((state) => state.order.dataId.price)
  )

  useEffect(() => {
    let a = 0
    a = Object.values(surcharge).reduce((accum, item) => {
      accum += item
      return accum
    }, 0)
    setExtra(a)
  }, [setExtra, surcharge])

  useEffect(() => {
    if (dateFrom && dateTo) {
      const itemTar = tariffData.data.filter((item) => item.id.includes(rate))
      const currentTime = dateTo - dateFrom
      const minutes = Math.floor((currentTime / (1000 * 60)) % 60)
      const day = Math.floor(currentTime / 1000 / 60 / 60 / 24)
      const hours = Math.floor((currentTime / (1000 * 60 * 60)) % 24)
      const mounth = Math.floor(
        ((currentTime / (1000 * 60 * 60 * 24 * 30)) % 12) + 1
      )
      const years = Math.floor(currentTime / (1000 * 60 * 60 * 24 * 30 * 12))

      switch (true) {
        case rate === '6259003d73b61100181028d9':
          setNetPrice(mounth * +itemTar[0].price)
          break
        case rate === '62593c9d73b61100181028ed' && minutes <= 59:
          setNetPrice(minutes * +itemTar[0].price)
          break
        case rate === '62593cac73b61100181028ee':
          if (minutes === 0 && hours === 0) {
            setNetPrice(day * +itemTar[0].price)
          }
          if (minutes > 0 || hours > 0) {
            setNetPrice((day + 1) * +itemTar[0].price)
          }
          break
        case rate === '62593cca73b61100181028ef':
          if (day <= 7) {
            setNetPrice(+itemTar[0].price)
          }
          if (day > 7) {
            setNetPrice(Math.ceil(day / 7) * +itemTar[0].price)
          }
          break
        case rate === '62593cd573b61100181028f0':
          if (day <= 7) {
            setNetPrice(+itemTar[0].price)
          }
          if (day > 7) {
            setNetPrice(Math.ceil(day / 7) * +itemTar[0].price)
          }
          break
        case rate === '62593cf073b61100181028f1':
          if (mounth < 3) {
            setNetPrice(+itemTar[0].price)
          }
          if (mounth > 3 && mounth <= 12) {
            setNetPrice(Math.ceil(mounth / 3) * +itemTar[0].price)
          }
          break
        case rate === '62593d0273b61100181028f2':
          if (years === 0) {
            setNetPrice(itemTar[0].price)
          }
          if (mounth >= 12 && mounth < 24) {
            setNetPrice(2 * itemTar[0].price)
          }
          break
        default:
          setNetPrice(null)
      }
    }
  }, [dateFrom, dateTo, rate, tariffData])

  useEffect(() => {
    let priceData = []
    if (isSuccess) {
      priceData = car.data
      dispatch(getPrices(priceData))
    }
  }, [isSuccess, dispatch, car.data])

  useEffect(() => {
    dispatch(getFullPrice({ netPrice, extra }))
  }, [netPrice, extra, dispatch])

  if (isLoading) {
    return <Preload size={'small'} />
  }
  return (
    <>
      {netPrice ? (
        <div className="total__price">
          <span className="text-bold">Цена:</span> {netPrice + extra} ₽
        </div>
      ) : (
        <div className="total__price">
          <span className="text-bold">Цена:</span> от {minPrice} до {maxPrice} ₽
        </div>
      )}
    </>
  )
}
