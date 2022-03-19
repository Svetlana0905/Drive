import './icons.scss'
import { Link } from 'react-router-dom'
import { SocialIconsData } from '../../data/SocialIconsData'

export const IconBlock = () => {
  return (
    <div className="icons__block">
      {SocialIconsData.map((item) => (
        <Link to={item.link} className="icons__link" key={item.title}>
          <img className="icons__item" src={item.imgpath} alt={item.title} />
        </Link>
      ))}
    </div>
  )
}
