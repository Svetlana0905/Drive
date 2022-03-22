import './icons.scss'
import { Link } from 'react-router-dom'
import { SocialIconsData } from '../../data/SocialIconsData'

export const IconBlock = () => {
  return (
    <div className="icons-block">
      {SocialIconsData.map((item) => (
        <Link to={item.link} key={item.title}>
          {item.img}
        </Link>
      ))}
    </div>
  )
}
