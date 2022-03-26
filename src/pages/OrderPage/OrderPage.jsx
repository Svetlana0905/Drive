import './orderPage.scss'
import { Header } from '../../components/Header/Header'
import { Form } from '../FormPage/Form'
export const OrderPage = () => {
  return (
    <section className="order-page">
      <Header homeStyle={'order-page__header header'} />
      <Form />
    </section>
  )
}
