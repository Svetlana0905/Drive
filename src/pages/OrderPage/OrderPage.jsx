import './orderPage.scss'
import { Header } from '../../components/Header/Header'
import { OrderVavigate } from '../../components/OrderNavigate/OrederNavigate'
export const OrderPage = () => {
  return (
    <section className="order-page">
      <Header />
      <OrderVavigate />
      <h1>Здесь карта. первый скин</h1>
    </section>
  )
}
