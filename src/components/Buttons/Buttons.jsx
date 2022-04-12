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
export const BigButton = ({ onClick, text, className, disabled }) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {text}
    </button>
  )
}

export const RadioInput = ({ value, text, name, onClick }) => {
  return (
    <label className="radio">
      <input
        className="radio__input"
        type="radio"
        onClick={onClick}
        name={name}
        value={value}
      />
      <span className="radio__span text">{text}</span>
    </label>
  )
}
export const Checkbox = ({ text, value, onClick, name }) => {
  return (
    <label className="checkbox">
      <input
        className="checkbox__input"
        checked={value}
        onChange={onClick}
        name={name}
        type="checkbox"
      />
      <span className="radio__span text">{text}</span>
    </label>
  )
}
