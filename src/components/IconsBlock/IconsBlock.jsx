import './icons.scss'
import { Link } from 'react-router-dom'
import facebook from '../../assets/icons/facebook.svg'
import insta from '../../assets/icons/insta.svg'
import telegram from '../../assets/icons/telegram.svg'

export const IconBlock = () => {
  return (
    <div className="icons__block">
      <Link to="/" className="icons__link">
        <img className="icons__item" src={facebook} alt="Перейти на фейсбук" />
      </Link>
      <Link to="/" className="icons__link">
        <img className="icons__item" src={insta} alt="Перейти в инстаграм" />
      </Link>
      <Link to="/" className="icons__link">
        <img className="icons__item" src={telegram} alt="Перейти в телеграм" />
      </Link>
    </div>
  )
}
