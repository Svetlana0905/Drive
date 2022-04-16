import './orderPage.scss'
import { Header } from '../../components/Header/Header'
import { useSelector, useDispatch } from 'react-redux'
import { Cart } from '../../components/Cart/Cart'
import { Price } from '../../containers/Price'
import { FormSlider, Navigate } from '../../data/FormSlider'
import { BigButton } from '../../components/Buttons/Buttons'
import { useState, useEffect } from 'react'
// import { ConfirmPage } from '../ConfirmPage/ConfirmPage'

export const OrderPage = () => {
  const dispatch = useDispatch()
  // const isDisabled = useSelector((state) => state.order.disabledBtn)
  const numberPage = useSelector((state) => state.order.numberPage)
  const [isDisabledBtn, setDisabledBtn] = useState(true)
  const [data, setData] = useState([])
  const [titleState, setTitleState] = useState([])

  const objOptions = useSelector((state) => state.order.options).flat()

  console.log(objOptions)

  useEffect(() => {
    setData(FormSlider[numberPage].arr)
    setTitleState()
    objOptions.map((item) => {
      console.log(item)
      return setTitleState(item[0])
    })

    objOptions.length >= data.length
      ? setDisabledBtn(false)
      : setDisabledBtn(true)

    console.log(data)
    console.log(titleState)
  }, [setData, data, numberPage, titleState, isDisabledBtn, objOptions])

  // const [visiblePage, setVisiblePage] = useState(false)

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
          {/* {console.log(FormSlider[numberPage].data.orderStatusId.name)} */}
          <BigButton
            text={FormSlider[numberPage].btnText}
            disabled={isDisabledBtn}
            onClick={() => {
              dispatch(FormSlider[numberPage].onClick(numberPage + 1))
            }}
          />
        </section>
      </div>
    </section>
  )
}
