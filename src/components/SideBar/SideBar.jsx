import './sideBar.scss'
import { Link } from 'react-router-dom'
import { useToggle } from '../../hooks/useToggle'
import { Language } from '../Language/Language'
import { Burger } from '../Burger/Burger'
import { IconBlock } from '../IconsBlock/IconsBlock'

export const SideBar = () => {
  const [isVisible, toggleVisible] = useToggle(false)

  return (
    <section className={isVisible ? 'sidebar open' : 'sidebar'}>
      <Burger toggleVisible={toggleVisible} isVisible={isVisible} />
      {isVisible && (
        <div className="sidebar__content">
          <div className="sidebar__links">
            <Link to="/" className="sidebar__link">
              ПАРКОВКА
            </Link>
            <Link to="/" className="sidebar__link">
              СТРАХОВКА
            </Link>
            <Link to="/" className="sidebar__link">
              БЕНЗИН
            </Link>
            <Link to="/" className="sidebar__link">
              ОБСЛУЖИВАНИЕ
            </Link>
          </div>
          <IconBlock />
        </div>
      )}
      <div className="sidebar__lang--btn">
        <Language />
      </div>
    </section>
  )
}
