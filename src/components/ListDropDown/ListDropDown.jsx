import './listDropDown.scss'
import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { isDisubled } from '../../redux/orderSlice'
import { ClearInputButton } from '../Buttons/Buttons'
import { useOutClick } from '../../hooks/useOutClick'

export const ListDropDown = ({
  label,
  addressArray,
  name,
  setInputText,
  textInput
}) => {
  const [isVisible, toggleVisible] = useState(false)
  const dispatch = useDispatch()
  const wrapperRef = useRef(null)
  useOutClick(wrapperRef, toggleVisible)

  const getText = (word) => {
    setInputText(word)
  }

  const clearInput = () => {
    dispatch(isDisubled(true))
    setInputText('')
  }
  const clssessInput =
    name === 'street' ? `address__inner` : `address__inner_city`
  const classesList = isVisible
    ? `address__list address__list_open`
    : `address__list`

  return (
    <div className={`address__wrapper`}>
      <label className={clssessInput} onClick={toggleVisible}>
        <span>{label}</span>
        <input
          onChange={(e) => {
            getText(e.target.value)
          }}
          value={textInput}
          type="text"
          className={`address__input`}
          placeholder="Начните вводить пункт ..."
        />
        {textInput && <ClearInputButton clearInput={clearInput} />}
      </label>
      <ul className={classesList} ref={wrapperRef}>
        {addressArray
          .filter((item) =>
            item.name.toLowerCase().includes(textInput.toLowerCase())
          )
          .map((item, id) => (
            <li
              key={id}
              onClick={(e) => {
                setInputText(item.name)
              }}
              className={`address__item`}>
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  )
}
