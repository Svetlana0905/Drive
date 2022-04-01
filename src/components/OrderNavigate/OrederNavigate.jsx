import './orderNavigate.scss'
import { NavLinksData } from '../../data/NavLinksData'
import { backStep } from '../../redux/orderSlice'
import { useDispatch, useSelector } from 'react-redux'

export const OrderNavigate = () => {
  const page = useSelector((state) => state.order.numberPage)
  const dispatch = useDispatch()

  const navName = 'nav-link'
  const getClass = (id, linkId) => {
    if (id < linkId) return `${navName} ${navName}__disabled`
    else if (id === linkId) return `${navName} ${navName}__active`
    else return navName
  }

  return (
    <nav className="nav">
      {NavLinksData.map((item, id) => (
        <button
          type="button"
          key={id}
          className={getClass(id, page)}
          onClick={(e) => {
            dispatch(backStep(id))
          }}>
          {item.title}
        </button>
      ))}
    </nav>
  )
}
