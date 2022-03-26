import './cart.scss'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { LinkBtnBig } from '../Links/links'
import { Price } from '../Price/Price'

export const Cart = () => {
  const [isDisubled, setIsDisubled] = useState(true)
  const city = useSelector((state) => state.order.city)
  const street = useSelector((state) => state.order.street)
  useEffect(() => {
    city && street ? setIsDisubled(false) : setIsDisubled(true)
  }, [city, street])
  return (
    <section className="total">
      <p className="total__subtitle subtitle">Ваш заказ:</p>
      <div className="total__options">
        <div className="option">
          <span className="option__name text">Пункт выдачи</span>
          <span className="option__name-colon"></span>
          <p className="option__value">
            <span>{city}</span>
            <span>{street}</span>
          </p>
        </div>
      </div>
      <Price />
      <LinkBtnBig text={'Выбрать модель'} link="#" disabled={isDisubled} />
    </section>
  )
}
