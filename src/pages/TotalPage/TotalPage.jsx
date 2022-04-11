import '../AddOrder/addOrder.scss'
import { useSelector } from 'react-redux'
export const TotalPage = () => {
  const dataCar = useSelector((state) => state.order.carArray)

  return (
    <>
      <section className="order-page__order">
        <div className="add-order">
          <div className="add-order__data">
            <h3>Ваш заказ подтверждён</h3>
            <p className="subtitle">{dataCar.name}</p>
            <p className="add-order__reg-number">{dataCar.number}</p>
            <p className="add-order__row bold-text">
              Топливо
              <span className="text">Топливо 100%</span>
            </p>
            <p className="add-order__row bold-text">
              Доступна
              <span className="text">с 12.06.2019 12:00</span>
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
