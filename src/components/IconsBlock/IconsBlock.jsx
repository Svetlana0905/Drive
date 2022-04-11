import './icons.scss'
import { Link } from 'react-router-dom'
import { SocialIconsData } from '../../data/SocialIconsData'

export const IconsBlock = () => {
  return (
    <div className="icons-block">
      {SocialIconsData.map((item, id) => (
        <Link to={item.link} key={id}>
          {item.img}
        </Link>
      ))}
    </div>
  )
}
