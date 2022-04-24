import { Link } from 'react-router-dom'

export const ReturnPage = ({ visiblePage }) => {
  return (
    <div
      className={
        visiblePage ? 'confirm-page confirm-page__active' : 'confirm-page '
      }>
      <div className="confirm-page__body">
        <p className="confirm-page__title">Заказ отменен</p>
        <div className="confirm-page__bittons">
          <Link className={'btn-price'} to={`/drive`}>
            На главную
          </Link>
        </div>
      </div>
    </div>
  )
}
