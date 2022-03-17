import './header.scss'
import map from '../../assets/icons/map.svg'
export const Header = () => {
  return (
    <header className="header">
      <p className="logo">Need for drive</p>
      <p>
        <img src={map} alt="Выбрать город" />
      </p>
    </header>
  )
}
