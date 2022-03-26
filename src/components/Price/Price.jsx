import { useGetCarQuery } from '../../redux'
import { Preload } from '../Preload/Preload'

export const Price = () => {
  let carData = []
  let maxPriceArray = []
  let minPriceArray = []
  let maxPrice = 0
  let minPrice = 0

  const { data: car = [], isLoading, isSuccess } = useGetCarQuery()
  if (isLoading) {
    return <Preload />
  }
  if (isSuccess) {
    carData = car.data
    maxPriceArray = carData.reduce((accum, item) => {
      accum.push(item.priceMax)
      return accum
    }, [])
    maxPrice = Math.max.apply(null, maxPriceArray)

    minPriceArray = carData.reduce((accum, item) => {
      accum.push(item.priceMin)
      return accum
    }, [])
    minPrice = Math.min.apply(null, minPriceArray)
  }
  return (
    <>
      <div className="total__price">
        Цена: от {minPrice} до {maxPrice} ₽
      </div>
    </>
  )
}
