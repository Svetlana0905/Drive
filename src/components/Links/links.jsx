import './links.scss'
import { Link } from 'react-router-dom'

export const LinkBtnBig = ({ text, link, disabled }) => {
  return (
    <Link
      to={link}
      className={disabled ? 'link-btn-big disabled' : 'link-btn-big'}>
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
