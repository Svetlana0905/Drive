import './orderPage.scss'
import { Header } from '../../components/Header/Header'
import { OrderNavigate } from '../../components/OrderNavigate/OrederNavigate'
import { ListDropDown } from '../../components/ListDropDown/ListDropDown'
import { Map } from '../../components/Map/Map'
export const OrderPage = () => {
  return (
    <section className="order-page">
      <Header homeStyle={'order-page__header header'} />
      <OrderNavigate />
      <div className="order-page__wrapper">
        <section className="order-page__order order">
          <ListDropDown />
          <Map />
        </section>
        <section className="order-page__total">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo animi
            temporibus voluptatem perferendis eos ducimus ut, suscipit
            recusandae labore cum!
          </p>
        </section>
      </div>
    </section>
  )
}
