import './form.scss'
import { Point } from '../../components/Point/Point'
import { City } from '../../components/City/City'
import { OrderNavigate } from '../../components/OrderNavigate/OrederNavigate'
import { Map } from '../../components/Map/Map'
import { Cart } from '../../components/Cart/Cart'

export const Form = () => {
  return (
    <>
      <OrderNavigate />
      <div className="form-page__wrapper">
        <section className="form-page__order order">
          <div className="address">
            <City />
            <Point />
          </div>
          <Map />
        </section>
        <Cart />
      </div>
    </>
  )
}
