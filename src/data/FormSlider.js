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
    isDone: false,
    title: 'Местоположение',
    arr: ['Пункт выдачи'],
    onClick: (page) => {
      return (dispatch) => {
        dispatch(forwardStep(page))
      }
    }
  },
  {
    page: <CarPage />,
    btnText: 'Дополнительно',
    isDone: false,
    title: 'Модель',
    arr: ['Модель'],
    onClick: (page) => {
      return (dispatch) => {
        dispatch(forwardStep(page))
      }
    }
  },
  {
    page: <OptionsPage />,
    btnText: 'Итого',
    isDone: false,
    title: 'Дополнительно',
    arr: ['Пункт выдачи', 'Модель', 'Длительность аренды'],
    onClick: (page) => {
      return (dispatch) => {
        dispatch(forwardStep(page))
      }
    }
  },
  {
    page: <AddOrder />,
    btnText: 'Заказать',
    isDone: false,
    title: 'Итого',
    arr: ['Пункт выдачи', 'Модель', 'Длительность аренды']
    // onClick: (style) => {
    //   return (dispatch) => {
    //     dispatch(forwardStep(!style))
    //   }
    // }
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

  return (
    <>
      {FormSlider.map((item, index) => (
        <button
          type="button"
          key={index}
          className={getClass(index, page)}
          onClick={(e) => {
            if (index === page + 1 || index <= biggerPage + 1)
              dispatch(forwardStep(index))
            else if (index < page) dispatch(forwardStep(index))
          }}>
          {item.title}
        </button>
      ))}
    </>
  )
}
