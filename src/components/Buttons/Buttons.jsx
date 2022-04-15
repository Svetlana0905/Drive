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

export const BigButton = ({ onClick, text, id, page, disabled }) => {
  return (
    <button onClick={onClick} className={'btn-price'} disabled={disabled}>
      {text}
    </button>
  )
}

export const RadioInput = ({
  value,
  text,
  name,
  onChange,
  tarifvalue,
  colorvalue
}) => {
  const [color, setColor] = useState(colorvalue)
  const [tariff, setTariff] = useState(tarifvalue)
  // console.log(tariff)

  useEffect(() => {
    setColor(colorvalue)
    setTariff(tarifvalue)
  }, [setColor, colorvalue, color, tariff, tarifvalue])

  return (
    <label className="radio">
      <input
        className="radio__input"
        type="radio"
        onChange={onChange}
        name={name}
        value={value}
        checked={name === 'color' ? value === color : value === tariff}
      />
      <span className="radio__span text">{text}</span>
    </label>
  )
}
export const Checkbox = ({ text, value, name, checked, onChange }) => {
  return (
    <label className="checkbox">
      <input
        className="checkbox__input"
        checked={checked}
        onChange={onChange}
        value={value}
        name={name}
        type="checkbox"
      />
      <span className="radio__span text">{text}</span>
    </label>
  )
}
