import './sideBar.scss'
import { useToggle } from '../../hooks/useToggle'

import { Language } from '../Language/Language'

export const SideBar = () => {
  const [isVisible, toggleVisible] = useToggle(true)

  return (
    <section className={isVisible ? 'sidebar' : 'hidden'}>
      <div className="sidebar__burger" onClick={toggleVisible}>
        <span></span>
      </div>
      {/* <div className={isVisible? 'show':'hidden'}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, repellat.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      </div> */}
      {isVisible && (
        <div className="">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
            repellat.
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      )}
      <Language />
    </section>
  )
}
