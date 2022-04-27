import './confirm.scss'
import { useNavigate } from 'react-router-dom'
import { BigButton } from '../../components/Buttons/Buttons'
import { getResponse } from '../../redux/orderSlice'
import { useAddOrderMutation } from '../../redux'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

export const ConfirmPage = ({ visiblePage, setVisiblePage }) => {
  const dispatch = useDispatch()
  const [addOrder, { data, isSuccess }] = useAddOrderMutation({
    fixedCacheKey: 'shared-update-post'
  })

  const dataId = useSelector((state) => state.order.dataId)
  let param = useSelector((state) => state.order.responseId)
  const navigate = useNavigate()

  const goTo = () => navigate(`/order/${param}`, { replace: true })

  const handleAddOrder = async () => {
    if (dataId) {
      await addOrder(dataId).unwrap()
    }
  }
  useEffect(() => {
    if (param) goTo()
  })
  if (isSuccess) {
    param = data.data.id
    dispatch(getResponse(param))
  }
  return (
    <div
      className={
        visiblePage ? 'confirm-page confirm-page__active' : 'confirm-page '
      }>
      <div className="confirm-page__body">
        <p className="confirm-page__title">Подтвердить заказ</p>
        <div className="confirm-page__bittons">
          <BigButton
            text={'Подтвердить'}
            className={'btn-price btn-price__small'}
            onClick={handleAddOrder}
          />
          <BigButton
            onClick={() => {
              setVisiblePage(!visiblePage)
            }}
            text={'Вернуться'}
            className={'btn-price btn-price__override btn-price__small'}
          />
        </div>
      </div>
    </div>
  )
}
