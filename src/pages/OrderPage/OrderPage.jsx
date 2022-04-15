import './orderPage.scss'
import { Header } from '../../components/Header/Header'
import { useSelector, useDispatch } from 'react-redux'
import { Cart } from '../../components/Cart/Cart'
import { Price } from '../../containers/Price'
import { FormSlider, Navigate } from '../../data/FormSlider'
import { BigButton } from '../../components/Buttons/Buttons'

export const OrderPage = () => {
  const numberPage = useSelector((state) => state.order.numberPage)
  const isDisabled = useSelector((state) => state.order.disabledBtn)
  const dispatch = useDispatch()

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
          <BigButton
            text={FormSlider[numberPage].btnText}
            disabled={isDisabled}
            onClick={() => {
              dispatch(FormSlider[numberPage].onClick(numberPage + 1))
            }}
          />
        </section>
      </div>
    </section>
  )
}
