import './header.scss'
import { Link } from 'react-router-dom'
import map from '../../assets/icons/map.svg'
export const Header = () => {
  return (
    <header className="header">
      <Link to="/drive" className="logo">
        Need for drive
      </Link>
      <p className="choice--sity">
        <img src={map} alt="Выбрать город" />
      </p>
    </header>
  )
}
