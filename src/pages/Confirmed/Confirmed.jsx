import './confirmed.scss'
import { Header } from '../../components/Header/Header'
import { Preload } from '../../components/Preload/Preload'
import { Cart } from '../../components/Cart/Cart'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { clearDate } from '../../redux/orderSlice'
import { Price } from '../Price'
import { ReturnPage } from './ReturnPage'
import { BigButton } from '../../components/Buttons/Buttons'
import {
  useGetOrderDataQuery,
  useDeleteOrderDataMutation
} from '../../redux/carApi'

export const Confirmed = () => {
  const dispatch = useDispatch()
  const [visiblePage, setVisiblePage] = useState(false)
  const id = useSelector((state) => state.order.responseId)
  const { data: responseData = [], isLoading } = useGetOrderDataQuery(id)
  const [deleteOrder] = useDeleteOrderDataMutation()

  const handlerDelete = async (obj) => {
    let { data } = obj
    data = {
      ...data,
      orderStatusId: { name: 'Отмененные', id: '5e26a1f5099b810b946c5d8c' }
    }
    await deleteOrder({ id, data }).unwrap
    dispatch(clearDate())
    setVisiblePage(true)
  }

  const dateD = new Date(useSelector((state) => state.order.dataId.dateFrom))
  const hour = dateD.getHours()
  const minute = dateD.getMinutes()
  const day = dateD.toLocaleDateString()

  const numberCar = () => {
    const reg = /\d{1,}/g
    return responseData.data.carId.number.replace(reg, ` $& `)
  }

  if (isLoading) return <Preload size={'big'} />

  return (
    <section className="order-page">
      <ReturnPage visiblePage={visiblePage} />
      <Header homeStyle="order-page__header header" />
      <nav className="nav">
        <div className="nav__inner">
          <span className="response__bold-text">Заказ номер {id}</span>
        </div>
      </nav>
      <div className="order-page__inner">
        <section className="order-page__response">
          <div className="add-order">
            <div className="add-order__data">
              <p className="response__title">
                {visiblePage ? 'Ваш заказ отменен' : 'Ваш заказ подтверждён'}
              </p>
              <p className="text-name">{responseData.data.carId.name}</p>
              <span className="add-order__reg-number">{numberCar()}</span>
              <p className="add-order__row bold-text">
                Доступна c
                <span className="text">{`${day} ${
                  hour < 10 ? '0' + hour : hour
                }:${minute < 10 ? '0' + minute : minute}`}</span>
              </p>
            </div>
            <img
              className="add-order__pic"
              src={responseData.data.carId.thumbnail.path}
              alt={responseData.data.carId.name}
            />
          </div>
        </section>
        <section className="total">
          <p className="total__subtitle subtitle">Ваш заказ:</p>
          <div className="total__options">
            <Cart />
          </div>
          <Price />
          <BigButton
            className={'btn-price btn-price__override'}
            text="Отменить"
            onClick={() => {
              handlerDelete(responseData)
            }}
          />
        </section>
      </div>
    </section>
  )
}
