import './confirm.scss'
import { BigButton } from '../../components/Buttons/Buttons'
export const ConfirmPage = ({ stylePage, setVisiblePage }) => {
  return (
    <div
      className={
        stylePage ? 'confirm-page confirm-page__active' : 'confirm-page '
      }>
      <div className="confirm-page__bittons">
        <BigButton text={'Подтвердить'} />
        <BigButton
          handleClick={() => setVisiblePage(!stylePage)}
          text={'Вернуться'}
          className="btn-price btn-price__override"
        />
      </div>
    </div>
  )
}
