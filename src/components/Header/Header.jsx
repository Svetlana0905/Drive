import './header.scss'
import { Link } from 'react-router-dom'
import map from '../../assets/icons/map.svg'
export const Header = ({ homeStyle }) => {
  return (
    <header className={homeStyle}>
      <Link to="/drive" className="logo">
        Need for drive
      </Link>
      <p className="choice-sity">
        <img src={map} alt="Выбрать город" />
        <span className="choice-sity__city">Ульяновск</span>
      </p>
    </header>
  )
}
