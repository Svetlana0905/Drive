import { AddressPage } from '../pages/AddressPage/AddressPage'
import { CarPage } from '../pages/CarPage/CarPage'
import { OptionsPage } from '../pages/OptionsPage/OptionsPage'
import { AddOrder } from '../pages/AddOrder/AddOrder'
import { useDispatch, useSelector } from 'react-redux'
import { forwardStep, backStep } from '../redux/orderSlice'
import { BigButton } from '../components/Buttons/Buttons'
import '../style/navigate.scss'

export const FormSlider = [
  {
    page: <AddressPage />,
    btnText: 'Выбрать модель',
    isDone: false,
    title: 'Местоположение'
  },
  {
    page: <CarPage />,
    btnText: 'Дополнительно',
    isDone: false,
    title: 'Модель'
  },
  {
    page: <OptionsPage />,
    btnText: 'Итого',
    isDone: false,
    title: 'Дополнительно'
  },
  {
    page: <AddOrder />,
    btnText: 'Заказать',
    isDone: false,
    title: 'Итого'
  }
]

export const ButtonBtn = () => {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.order.numberPage)
  const isDisabled = useSelector((state) => state.order.disabledBtn)

  const getClass = (index, num) => {
    if (index === num) return 'btn-price'
    else if (index !== num) return 'btn-price btn-price__hidden'
  }
  return (
    <>
      {FormSlider.map((item, id) => (
        <BigButton
          key={id}
          type="button"
          className={getClass(id, page)}
          text={item.btnText}
          disabled={isDisabled}
          onClick={(e) => {
            if (id === page) dispatch(forwardStep({ id }))
          }}
        />
      ))}
    </>
  )
}

export const Navigate = () => {
  const page = useSelector((state) => state.order.numberPage)
  const dispatch = useDispatch()

  const navName = 'nav-link'
  const getClass = (id, linkId) => {
    if (id < linkId) return `${navName} ${navName}__disabled`
    else if (id === linkId) return `${navName} ${navName}__active`
    else return navName
  }

  return (
    <>
      {FormSlider.map((item, index) => (
        <button
          type="button"
          key={index}
          className={getClass(index, page)}
          disabled={index > page + 1}
          onClick={(e) => {
            dispatch(backStep(index))
          }}>
          {item.title}
        </button>
      ))}
    </>
  )
}
