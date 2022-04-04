import './car-page.scss'
import { useGetCarQuery } from '../../redux'
import { RadioInput } from '../../components/Buttons/Buttons'
import { Categories } from '../../redux/actions/Actions'
import { useEffect, useState } from 'react'
import { getModel, isDisubled } from '../../redux/orderSlice'
import { useDispatch } from 'react-redux'

export const CarPage = () => {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState('')
  const [carModel, setCarModel] = useState('')
  const categories = Categories()
  let carData = []

  const { data: car = [], isSuccess } = useGetCarQuery()

  const clearFilter = () => {
    setFilter('')
  }
  useEffect(() => {
    if (carModel) dispatch(getModel(carModel))
    if (carModel) dispatch(isDisubled(false))
  }, [setCarModel, carModel, dispatch])

  if (isSuccess) {
    carData = car.data
  }
  return (
    <section className="order-page__order">
      <div className="car-page ">
        <div className="car-page__radio-block">
          <label className="radio">
            <span className="radio__span text">Все</span>
            <input
              className="radio__input"
              type="radio"
              name={'car'}
              // checked
              onClick={clearFilter}
            />
            <span className="radio__box"></span>
          </label>
          {categories.map((item, id) => (
            <RadioInput
              text={item.name}
              onClick={(e) => setFilter(e.target.value)}
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
              <div key={id} className="car" onClick={(e) => setCarModel(item)}>
                <p className="car__name subtitle">{item.name}</p>
                <p className="car__price text">
                  {item.priceMax} - {item.priceMin}
                </p>
                <img
                  className="car__pic"
                  src={item.thumbnail.path}
                  alt={item.name}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
