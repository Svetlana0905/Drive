import './orderPage.scss'
import { useState } from 'react'
import { OrderNavigate } from '../../components/OrderNavigate/OrederNavigate'
import { ButtonPrice } from '../../components/Buttons/Buttons'
import { Header } from '../../components/Header/Header'
import { FormSlider } from '../../data/FormSlider'
import { ForwardStep } from '../../hooks/ForwardStep'
import { getPage } from '../../redux/orderSlice'
import { useDispatch } from 'react-redux'

export const OrderPage = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const btnStyle = ForwardStep(slideIndex)
  const dispatch = useDispatch()
  dispatch(getPage({ slideIndex }))

  const nextSlide = () => {
    slideIndex !== FormSlider.length
      ? setSlideIndex(slideIndex + 1)
      : setSlideIndex(FormSlider.length)
  }

  const prevSlide = () => {
    slideIndex !== 0 ? setSlideIndex(slideIndex - 1) : setSlideIndex(0)
  }
  return (
    <section className="order-page">
      <Header homeStyle={'order-page__header header'} />
      <OrderNavigate onClick={prevSlide} pageId={slideIndex} />
      <div className="order-page__slider">
        {FormSlider.map((item, index) => (
          <div
            key={index}
            className={
              slideIndex === index
                ? 'form-slide form-slide__active-anim'
                : 'form-slide'
            }>
            {item.page}
            <section className="total">
              <p className="total__subtitle subtitle">Ваш заказ:</p>
              <div className="total__options">{item.cart}</div>
              {item.price}
              <ButtonPrice
                handleClick={nextSlide}
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
