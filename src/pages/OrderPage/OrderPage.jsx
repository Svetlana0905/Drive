import './orderPage.scss'
import { Header } from '../../components/Header/Header'
import { useSelector } from 'react-redux'
import { Cart } from '../../components/Cart/Cart'
import { Price } from '../../containers/Price'
import { FormSlider, ButtonBtn, Navigate } from '../../data/FormSlider'

export const OrderPage = () => {
  const numberPage = useSelector((state) => state.order.numberPage)

  return (
    <section className="order-page">
      {/* <ConfirmPage stylePage={visiblePage} setVisiblePage={setVisiblePage} /> */}
      <Header homeStyle="order-page__header header" />
      <nav className="nav">
        <div className="nav__inner">{<Navigate />}</div>
      </nav>
      <div className="order-page__inner">
        {FormSlider[numberPage].page}
        <section className="total">
          <p className="total__subtitle subtitle">Ваш заказ:</p>
          <div className="total__options">
            <Cart />
          </div>
          <Price />
          {<ButtonBtn />}
        </section>
      </div>
    </section>
  )
}
