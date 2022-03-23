import './burger.scss'
import burgerLine from '../../assets/icons/line_burger.svg'

export const Burger = ({ isVisible, toggleVisible }) => {
  return (
    <button
      type="button"
      className={isVisible ? 'burger burger_open' : 'burger'}
      onClick={toggleVisible}>
      {Array.from({ length: 4 }).map((_, index) => (
        <img src={burgerLine} alt="Меню бургер" key={index} />
      ))}
    </button>
  )
}
