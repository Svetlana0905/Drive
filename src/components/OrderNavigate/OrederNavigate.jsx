import './orderNavigate.scss'
import { NavLink } from 'react-router-dom'
import { NavLinksData } from '../../data/NavLinksData'

export const OrderNavigate = () => {
  return (
    <nav className="nav">
      {NavLinksData.map((item, id) => (
        <NavLink to={item.link} key={id} className="nav__nav-link">
          {item.title}
        </NavLink>
      ))}
    </nav>
  )
}
