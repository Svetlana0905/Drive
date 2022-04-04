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
  // const stepForward = (id, linkId) => {
  //   if (id === linkId + 1) dispatch(forwardStepLink(id))
  // }
  return (
    <nav className="nav">
      {NavLinksData.map((item, index) => (
        <button
          type="button"
          key={index}
          className={getClass(index, page)}
          disabled={index > page + 1}
          onClick={(e) => {
            dispatch(backStep(index))
            // stepForward({ index, page })
          }}>
          {item.title}
        </button>
      ))}
    </nav>
  )
}
