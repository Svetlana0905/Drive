import './buttons.scss'
import { useToggle } from '../../hooks/useToggle'

export const LangButton = () => {
  const [lang, toggleLang] = useToggle(false)
  return (
    <button onClick={toggleLang} className="language--btn">
      {lang ? 'RU' : 'EN'}
    </button>
  )
}
export const ArrowButtonLeft = ({ handleClick }) => {
  return <button onClick={handleClick} className="btn--left"></button>
}
export const ArrowButtonRight = ({ handleClick }) => {
  return <button onClick={handleClick} className="btn--right"></button>
}
