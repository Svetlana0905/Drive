import './addOrder.scss'
import { useSelector } from 'react-redux'

export const AddOrder = () => {
  const dataCar = useSelector((state) => state.order.carArray)
  const dateD = new Date(useSelector((state) => state.order.dataId.dateFrom))

  const hour = dateD.getHours()
  const minute = dateD.getMinutes()
  const day = dateD.toLocaleDateString()
  const numberCar = () => {
    const reg = /\d{1,}/g
    return dataCar.number.replace(reg, ` $& `)
  }

  return (
    <section className="order-page__order">
      <div className="add-order">
        <div className="add-order__data">
          <p className="text-name">{dataCar.name}</p>
          <span className="add-order__reg-number">{numberCar()}</span>
          <p className="add-order__row bold-text">
            Доступна c
            <span className="text">{`${day} ${hour < 10 ? '0' + hour : hour}:${
              minute < 10 ? '0' + minute : minute
            }`}</span>
          </p>
        </div>
        <img
          className="add-order__pic"
          src={dataCar.thumbnail.path}
          alt={dataCar.name}
        />
      </div>
    </section>
  )
}
