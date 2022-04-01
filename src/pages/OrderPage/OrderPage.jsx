import './orderPage.scss'
import { OrderNavigate } from '../../components/OrderNavigate/OrederNavigate'
import { ButtonPrice } from '../../components/Buttons/Buttons'
import { Header } from '../../components/Header/Header'
import { FormSlider } from '../../data/FormSlider'
import { forwardStep } from '../../redux/orderSlice'
import { useDispatch, useSelector } from 'react-redux'

export const OrderPage = () => {
  const btnStyle = useSelector((state) => state.order.disabledBtn)
  const pageNum = useSelector((state) => state.order.numberPage)
  const dispatch = useDispatch()
  const sliderLenght = FormSlider.length

  return (
    <section className="order-page">
      <Header homeStyle={'order-page__header header'} />
      <OrderNavigate />
      <div className="order-page__slider">
        {FormSlider.map((item, index) => (
          <div
            key={index}
            className={
              pageNum === index
                ? 'form-slide form-slide__active-anim'
                : 'form-slide'
            }>
            {item.page}
            <section className="total">
              <p className="total__subtitle subtitle">Ваш заказ:</p>
              <div className="total__options">{item.cart}</div>
              {item.price}
              <ButtonPrice
                handleClick={() =>
                  dispatch(forwardStep({ index, sliderLenght }))
                }
                text={item.btnText}
                disabled={btnStyle}
              />
            </section>
          </div>
        ))}
      </div>
    </section>
  )
}
