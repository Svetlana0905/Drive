import './links.scss'
import { Link } from 'react-router-dom'

export const LinkBtnBig = ({ text, link, disabled }) => {
  const classess = disabled ? 'link-btn-big disabled' : 'link-btn-big'
  return (
    <Link to={link} className={classess}>
      {text}
    </Link>
  )
}

export const LinkBtnSlider = ({ link, styleLink, text }) => {
  return (
    <Link to={link} className={`slide_link slide_link__${styleLink}`}>
      {text}
    </Link>
  )
}
