import './burger.scss'
import burgerLine from '../../assets/icons/line_burger.svg'

export const Burger = ({ isVisible, toggleVisible }) => {
  return (
    <div
      className={isVisible ? 'burger open' : 'burger'}
      onClick={toggleVisible}>
      <img
        className={isVisible ? 'svg-1 open' : 'svg-1'}
        src={burgerLine}
        alt="Меню бургер"
      />
      <img
        className={isVisible ? 'svg-2 open' : 'svg-2'}
        src={burgerLine}
        alt="Меню бургер"
      />
      <img
        className={isVisible ? 'svg-3 open' : 'svg-3'}
        src={burgerLine}
        alt="Меню бургер"
      />
      <img
        className={isVisible ? 'svg-4 open' : 'svg-4'}
        src={burgerLine}
        alt="Меню бургер"
      />
    </div>
  )
}
