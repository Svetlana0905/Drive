import './orderPage.scss'
import { Header } from '../../components/Header/Header'
import { OrderNavigate } from '../../components/OrderNavigate/OrederNavigate'

import { ListDropDown } from '../../components/ListDropDown/ListDropDown'
export const OrderPage = () => {
  return (
    <section className="order-page">
      <Header homeStyle={'order-page__header header'} />
      <OrderNavigate />
      <div className="container">
        <ListDropDown />
      </div>
    </section>
  )
}
