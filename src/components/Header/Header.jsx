import './header.scss'
import map from '../../assets/icons/map.svg'
export const Header = () => {
  return (
    <header className="header">
      <p className="logo">Need for drive</p>
      <p className="choice--sity">
        <img src={map} alt="Выбрать город" />
      </p>
    </header>
  )
}
