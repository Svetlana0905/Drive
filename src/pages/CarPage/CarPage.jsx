import './car-page.scss'
import { Preload } from '../../components/Preload/Preload'
import { useGetCarQuery } from '../../redux'
import { RadioInput } from '../../components/Buttons/Buttons'
import { Categories } from '../../redux/actions/Actions'
import { useEffect, useState } from 'react'
import { getModel } from '../../redux/orderSlice'
import { useDispatch } from 'react-redux'
import stub from '../../assets/stub.jpg'

export const CarPage = () => {
  const dispatch = useDispatch()

  const [filter, setFilter] = useState('')
  const [carModel, setCarModel] = useState('')
  const [idCar, setIdCar] = useState(null)
  const categories = Categories()

  let carData = []
  const { data: car = [], isSuccess, isLoading } = useGetCarQuery()

  useEffect(() => {
    if (carModel) dispatch(getModel({ carModel }))
  }, [setCarModel, carModel, dispatch])

  if (isLoading) return <Preload size={'big'} />
  if (isSuccess) {
    carData = car.data
  }
  return (
    <section className="order-page__order">
      <div className="car-page ">
        <div className="car-page__radio-block">
          <RadioInput
            text={'Все'}
            onChange={(e) => {
              setFilter('')
            }}
            name={'car'}
            value={'Все'}
          />
          {categories.map((item, id) => (
            <RadioInput
              text={item.name}
              onChange={(e) => {
                setFilter(e.target.value)
              }}
              key={id}
              name={'car'}
              value={item.name}
            />
          ))}
        </div>
        <div className="car-page__cars">
          {carData
            .filter((item) => item.categoryId.name.includes(filter))
            .map((item, id) => (
              <div
                key={id}
                className={id === idCar ? 'car car__active' : 'car'}
                onClick={(e) => {
                  setCarModel(item)
                  setIdCar(id)
                }}>
                <div>
                  <p className="text-name">{item.name}</p>
                  <p className="car__text text">
                    {item.priceMax} - {item.priceMin} &#8381;
                  </p>
                </div>
                <picture className="car__pic">
                  <source srcSet={item.thumbnail.path} type="image/jpg" />
                  <img src={stub} className="car__pic" alt={item.name} />
                </picture>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
