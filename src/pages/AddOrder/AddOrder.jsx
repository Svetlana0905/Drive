import './addOrder.scss'
import { useSelector } from 'react-redux'
export const AddOrder = () => {
  const dataCar = useSelector((state) => state.order.carArray)

  const numberCar = () => {
    const reg = /\d{1,}/g
    return dataCar.number.replace(reg, ` $& `)
  }

  return (
    <>
      <section className="order-page__order">
        <div className="add-order">
          <div className="add-order__data">
            <p className="text-name">{dataCar.name}</p>
            <p className="add-order__reg-number">{numberCar()}</p>
            <p className="add-order__row bold-text">
              Топливо
              <span className="text">100%</span>
            </p>
            <p className="add-order__row bold-text">
              Доступна c<span className="text">12.06.2019 12:00</span>
            </p>
          </div>
          <img
            className="add-order__pic"
            src={dataCar.thumbnail.path}
            alt={dataCar.name}
          />
        </div>
      </section>
    </>
  )
}
