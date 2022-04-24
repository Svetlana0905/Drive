import './orderPage.scss'
import { Header } from '../../components/Header/Header'
import { useSelector, useDispatch } from 'react-redux'
import { Cart } from '../../components/Cart/Cart'
import { Price } from '../Price'
import { FormSlider, Navigate } from '../../data/FormSlider'
import { BigButton } from '../../components/Buttons/Buttons'
import { useState, useEffect } from 'react'
import { ConfirmPage } from '../ConfirmPage/ConfirmPage'

export const OrderPage = () => {
  const dispatch = useDispatch()
  const numberPage = useSelector((state) => state.order.numberPage)
  const [isDisabledBtn, setDisabledBtn] = useState(true)
  const [data, setData] = useState([])

  const objOptions = useSelector((state) => state.order.options).flat()

  // const handlerSendOrder =

  useEffect(() => {
    const arrFieldName = []
    setDisabledBtn()
    setData(FormSlider[numberPage].arr)
    for (const item of objOptions) {
      arrFieldName.push(item[0])
    }
    data.map((item) =>
      arrFieldName.includes(item) ? setDisabledBtn(false) : setDisabledBtn(true)
    )
  }, [setData, data, numberPage, isDisabledBtn, objOptions])

  const [visiblePage, setVisiblePage] = useState(false)

  return (
    <section className="order-page">
      <ConfirmPage visiblePage={visiblePage} setVisiblePage={setVisiblePage} />
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
            className={'btn-price'}
            text={FormSlider[numberPage].btnText}
            disabled={isDisabledBtn}
            onClick={() => {
              FormSlider[numberPage].order === 'open'
                ? setVisiblePage(true)
                : dispatch(FormSlider[numberPage].onClick(numberPage + 1))
            }}
          />
        </section>
      </div>
    </section>
  )
}
