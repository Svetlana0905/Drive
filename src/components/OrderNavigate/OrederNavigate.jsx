import './orderNavigate.scss'
import { NavLink } from 'react-router-dom'
import { NavLinksData } from '../../data/NavLinksData'

export const OrderVavigate = () => {
  // const setActive = ({ isActive }) =>
  //   isActive ? 'nav-link active' : 'nav-link'
  return (
    <section className="nav">
      {/* <Link to="order">Местоположение</Link> */}
      {NavLinksData.map((item, id) => (
        <NavLink to={item.link} key={id} className="nav__nav-link">
          {item.title}
        </NavLink>
      ))}
    </section>
  )
}
