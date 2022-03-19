import './links.scss'
import { Link } from 'react-router-dom'
export const LinkBtnBig = ({ text, link }) => {
  return (
    <Link to={link} className="link--btn--big">
      {text}
    </Link>
  )
}
export const LinkBtnSlider = ({ link, styleLink, text }) => {
  return (
    <Link to={link} className={`slide__link ${styleLink}`}>
      {text}
    </Link>
  )
}
