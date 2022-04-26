import { AddressPage } from '../pages/AddressPage/AddressPage'
import { CarPage } from '../pages/CarPage/CarPage'
import { OptionsPage } from '../pages/OptionsPage/OptionsPage'
import { AddOrder } from '../pages/AddOrder/AddOrder'
import { useDispatch, useSelector } from 'react-redux'
import { forwardStep } from '../redux/orderSlice'

import '../style/navigate.scss'

export const FormSlider = [
  {
    page: <AddressPage />,
    btnText: 'Выбрать модель',
    title: 'Местоположение',
    arr: ['Пункт выдачи'],
    order: 'close',
    onClick: (page) => {
      return (dispatch) => {
        dispatch(forwardStep(page))
      }
    }
  },
  {
    page: <CarPage />,
    btnText: 'Дополнительно',
    title: 'Модель',
    arr: ['Модель'],
    order: 'close',
    onClick: (page) => {
      return (dispatch) => {
        dispatch(forwardStep(page))
      }
    }
  },
  {
    page: <OptionsPage />,
    btnText: 'Итого',
    title: 'Дополнительно',
    arr: ['Пункт выдачи', 'Модель', 'Длительность аренды'],
    order: 'close',
    onClick: (page) => {
      return (dispatch) => {
        dispatch(forwardStep(page))
      }
    }
  },
  {
    page: <AddOrder />,
    btnText: 'Заказать',
    title: 'Итого',
    arr: ['Пункт выдачи', 'Модель', 'Длительность аренды'],
    order: 'open'
  }
]

export const Navigate = () => {
  const page = useSelector((state) => state.order.numberPage)
  const biggerPage = useSelector((state) => state.order.biggerPage)
  const dispatch = useDispatch()

  const navName = 'nav-link'
  const getClass = (id, linkId) => {
    if (id < linkId) return `${navName} ${navName}__disabled`
    else if (id === linkId) return `${navName} ${navName}__active`
    else return navName
  }
  const dis = (id, bigger) => {
    if (id <= bigger) return false
    else return true
  }
  return (
    <>
      {FormSlider.map((item, index) => (
        <button
          type="button"
          key={index}
          className={getClass(index, page)}
          disabled={dis(index, biggerPage)}
          onClick={(e) => {
            dispatch(forwardStep(index))
          }}>
          {item.title}
        </button>
      ))}
    </>
  )
}
