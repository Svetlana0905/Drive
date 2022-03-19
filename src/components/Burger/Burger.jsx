import './burger.scss'
import burgerLine from '../../assets/icons/line_burger.svg'

export const Burger = ({ isVisible, toggleVisible }) => {
  return (
    <div
      className={isVisible ? 'burger open' : 'burger'}
      onClick={toggleVisible}>
      {Array.from({ length: 4 }).map((_, index) => (
        <img
          className={isVisible ? 'burger-line open' : 'burger-line'}
          src={burgerLine}
          alt="Меню бургер"
          key={index}
        />
      ))}
    </div>
  )
}
