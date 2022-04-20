import './buttons.scss'
import { useToggle } from '../../hooks/useToggle'
import { useEffect, useState } from 'react'

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
export const ClearInputButton = ({ clearInput, name }) => {
  return (
    <button
      onClick={clearInput}
      className={
        name === 'calendar'
          ? 'clear-input clear-input__calendar'
          : 'clear-input'
      }
    />
  )
}

export const BigButton = ({ onClick, text, disabled, className }) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {text}
    </button>
  )
}

export const RadioInput = ({ value, text, name, onChange, defaultVal }) => {
  const [currentVal, setCurrentVal] = useState(defaultVal)

  useEffect(() => {
    setCurrentVal(defaultVal)
  }, [setCurrentVal, defaultVal, currentVal])

  return (
    <label className="radio">
      <input
        className="radio__input"
        type="radio"
        onChange={onChange}
        name={name}
        value={value}
        checked={value === currentVal}
      />
      <span className="radio__span text">{text}</span>
    </label>
  )
}
export const Checkbox = ({ text, name, checked, onChange }) => {
  return (
    <label className="checkbox">
      <input
        className="checkbox__input"
        checked={checked}
        onChange={onChange}
        name={name}
        type="checkbox"
      />
      <span className="radio__span text">{text}</span>
    </label>
  )
}
