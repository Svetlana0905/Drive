import './orderPage.scss'
import { OrderNavigate } from '../../components/OrderNavigate/OrederNavigate'
import { ButtonPrice } from '../../components/Buttons/Buttons'
import { Header } from '../../components/Header/Header'
import { useSelector, useDispatch } from 'react-redux'
import { Cart } from '../../components/Cart/Cart'
import { Price } from '../../containers/Price'
import { forwardStep } from '../../redux/orderSlice'
import { useEffect, useState } from 'react'
import { FormSlider } from '../../data/FormSlider'
import { ConfirmPage } from '../ConfirmPage/ConfirmPage'
export const OrderPage = () => {
  const dispatch = useDispatch()
  const [visiblePage, setVisiblePage] = useState(false)
  const [currentPage, setCurrentPage] = useState({})
  const sliderLength = FormSlider.length

  // const btnStyle = useSelector((state) => state.order.disabledBtn)
  const numberPage = useSelector((state) => state.order.numberPage)
  const conditionalRendering = (num) => {
    setCurrentPage(
      FormSlider.reduce((accum, item, id) => {
        if (id === num) accum = item
        return accum
      }, {})
    )
  }

  useEffect(() => {
    conditionalRendering(numberPage)
  }, [numberPage])

  return (
    <section className="order-page">
      <ConfirmPage stylePage={visiblePage} setVisiblePage={setVisiblePage} />
      <Header homeStyle="order-page__header header" />
      <nav className="nav">
        <div className="nav__inner">
          {currentPage.mavText ? currentPage.mavText : <OrderNavigate />}
        </div>
      </nav>
      <div className="order-page__inner">
        {currentPage.page}
        <section className="total">
          <p className="total__subtitle subtitle">Ваш заказ:</p>
          <div className="total__options">
            <Cart />
          </div>
          <Price />
          <ButtonPrice
            handleClick={(e) => {
              currentPage.orderStatus
                ? setVisiblePage(!visiblePage)
                : dispatch(forwardStep({ numberPage, sliderLength }))
            }}
            text={currentPage.btnText}
            styleClass={currentPage.orderStatus}
            // disabled={btnStyle}
          />
        </section>
      </div>
    </section>
  )
}
