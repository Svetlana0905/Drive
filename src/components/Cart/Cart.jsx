import './cart.scss'
import { useSelector } from 'react-redux'

export const Cart = () => {
  const city = useSelector((state) => state.order.city)
  const street = useSelector((state) => state.order.street)
  return (
    <div className="option">
      <span className="option__name text">Пункт выдачи</span>
      <span className="option__name-colon"></span>
      <p className="option__value">
        <span>{city}</span>
        <span>{street}</span>
      </p>
    </div>
  )
}
