import { AddressPage } from '../pages/AddressPage/AddressPage'
import { CarPage } from '../pages/CarPage/CarPage'
import { OptionsPage } from '../pages/OptionsPage/OptionsPage'
import { AddOrder } from '../pages/AddOrder/AddOrder'
import { useDispatch, useSelector } from 'react-redux'
import { backStep, forwardStep } from '../redux/orderSlice'

import '../style/navigate.scss'
// import { useEffect, useState } from 'react'

export const FormSlider = [
  {
    page: <AddressPage />,
    btnText: 'Выбрать модель',
    isDone: false,
    title: 'Местоположение',
    dataId: { cityId: null, pointId: null },
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
    dataId: { carId: null, category: '' },
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
    dataId: {
      color: 'Любой',
      dateFrom: 0,
      dateTo: 0,
      rateId: null,
      isFullTank: false,
      isNeedChildChair: false,
      isRightWheel: false,
      price: 0
    },
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
    data: {
      orderStatusId: { id: '5e26a191099b810b946c5d89', name: 'new' },
      cityId: null,
      pointId: null,
      carId: null,
      color: 'Любой',
      dateFrom: 0,
      dateTo: 0,
      rateId: null,
      isFullTank: false,
      isNeedChildChair: false,
      isRightWheel: false,
      price: 0
    },
    onClick: (page) => {
      return (dispatch) => {
        dispatch(forwardStep(page))
      }
    }
  }
]

export const Navigate = () => {
  const page = useSelector((state) => state.order.numberPage)
  const biggerPage = useSelector((state) => state.order.biggerPage)
  // console.log(biggerPage + ' bigger')
  const dispatch = useDispatch()

  const navName = 'nav-link'
  const getClass = (id, linkId) => {
    if (id < linkId) return `${navName} ${navName}__disabled`
    else if (id === linkId) return `${navName} ${navName}__active`
    else return navName
  }

  const click = (id) => {
    console.log(id + ' index')
  }
  return (
    <>
      {FormSlider.map((item, index) => (
        <button
          type="button"
          key={index}
          className={getClass(index, page)}
          // disabled={index > page + 1}
          onClick={(e) => {
            if (index === page + 1 || index <= biggerPage + 1)
              dispatch(forwardStep(index))
            else if (index < page) dispatch(backStep(index))
            click(index)
          }}>
          {item.title}
        </button>
      ))}
    </>
  )
}
