import './confirm.scss'
import { ButtonPrice } from '../../components/Buttons/Buttons'
export const ConfirmPage = ({ stylePage, setVisiblePage }) => {
  return (
    <div
      className={
        stylePage ? 'confirm-page' : 'confirm-page confirm-page__hidden'
      }>
      <div className="confirm-page__bittons">
        <ButtonPrice text={'Подтвердить'} />
        <ButtonPrice
          handleClick={() => setVisiblePage(!stylePage)}
          text={'Вернуться'}
          className="btn-price btn-price__override"
        />
      </div>
    </div>
  )
}
