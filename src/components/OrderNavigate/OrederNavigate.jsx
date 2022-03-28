import './orderNavigate.scss'
import { NavLinksData } from '../../data/NavLinksData'

export const OrderNavigate = ({ onClick, pageId }) => {
  const navName = 'nav-link'
  const getClass = (id, linkId) => {
    if (id < linkId) return `${navName} ${navName}__disabled`
    else if (id === linkId) return `${navName} ${navName}__active`
    else return `${navName}`
  }

  return (
    <nav className="nav">
      {NavLinksData.map((item, id) => (
        <button
          type="button"
          key={id}
          className={getClass(id, pageId)}
          onClick={onClick}>
          {item.title}
        </button>
      ))}
    </nav>
  )
}
