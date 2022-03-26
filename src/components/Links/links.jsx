import './links.scss'
import { Link } from 'react-router-dom'

export const LinkBtnBig = ({ text, link }) => {
  return (
    <Link to={link} className="link_btn_big">
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
