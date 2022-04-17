import './confirm.scss'
import { BigButton } from '../../components/Buttons/Buttons'
export const ConfirmPage = ({ visiblePage, setVisiblePage }) => {
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
          />
          <BigButton
            onClick={() => {
              setVisiblePage(!visiblePage)
            }}
            text={'Вернуться'}
            className={'btn-price btn-price__override'}
          />
        </div>
      </div>
    </div>
  )
}
