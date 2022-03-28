import './buttons.scss'
import { useToggle } from '../../hooks/useToggle'

export const LangButton = () => {
  const [lang, toggleLang] = useToggle(false)
  return (
    <button onClick={toggleLang} className="language-btn">
      {lang ? 'RU' : 'ENG'}
    </button>
  )
}
export const ArrowButtonSlider = ({ handleClick, styleArr }) => {
  return <button onClick={handleClick} className={styleArr} />
}
export const ClearInputButton = ({ clearInput }) => {
  return <button onClick={clearInput} className="clear-input" />
}
export const ButtonPrice = ({ handleClick, disabled, text }) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={disabled ? 'btn-price btn-price__disabled' : 'btn-price'}>
      {text}
    </button>
  )
}
