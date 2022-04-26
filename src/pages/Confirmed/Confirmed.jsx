import { Header } from '../../components/Header/Header'
import { Preload } from '../../components/Preload/Preload'
import { Cart } from '../../components/Cart/Cart'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { clearDate } from '../../redux/orderSlice'
import { Price } from '../Price'
import { ReturnPage } from './ReturnPage'
import { BigButton } from '../../components/Buttons/Buttons'
import { useParams } from 'react-router-dom'
import {
  useGetOrderDataQuery,
  useDeleteOrderDataMutation
} from '../../redux/carApi'
import { AddOrder } from '../AddOrder/AddOrder'
export const Confirmed = () => {
  const dispatch = useDispatch()
  const [visiblePage, setVisiblePage] = useState(false)
  const { id } = useParams()

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
        <AddOrder id={id} responseData={responseData} />
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
