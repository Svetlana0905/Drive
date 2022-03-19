import './sideBar.scss'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useToggle } from '../../hooks/useToggle'
import { Language } from '../Language/Language'
import { Burger } from '../Burger/Burger'
import { IconBlock } from '../IconsBlock/IconsBlock'
import { LinksData } from '../../data/LinksData'

export const SideBar = () => {
  const [isVisible, toggleVisible] = useToggle(false)

  const wrapperRef = useRef(null)
  const openSidebar = (e) => {
    const arr = Array.from(wrapperRef.current.children)
    // if (!arr.current.contains('sidebar__links')) {
    //   console.log('jjjj')
    // } else console.log('no current')
    console.log(arr)
    // toggleVisible()
  }

  return (
    <section
      className={isVisible ? 'sidebar open' : 'sidebar'}
      ref={wrapperRef}
      onClick={openSidebar}>
      <Burger toggleVisible={toggleVisible} isVisible={isVisible} />
      {isVisible && (
        <div className="sidebar__content">
          {LinksData.map((item) => (
            <Link to={item.link} className="sidebar__link" key={item.title}>
              {item.title}
            </Link>
          ))}
          <IconBlock />
        </div>
      )}
      <Language isVisible={isVisible} />
    </section>
  )
}
