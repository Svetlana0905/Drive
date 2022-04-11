import './listDropDown.scss'
import { useState } from 'react'
import { ClearInputButton } from '../Buttons/Buttons'

export const ListDropDown = ({
  label,
  addressArray,
  name,
  setInputText,
  getId,
  currentId,
  textInput,
  clearInput
}) => {
  const [isVisible, setToggleVisible] = useState(false)

  const classesList = isVisible
    ? `address__list address__list_open`
    : `address__list`
  const clssessInput =
    name === 'street' ? `address__inner` : `address__inner_city`

  return (
    <div className="address__wrapper">
      <label className={clssessInput}>
        <span>{label}</span>
        <input
          onFocus={() => setToggleVisible(true)}
          disabled={name === 'street' && addressArray.length === 0}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
          value={textInput}
          type="text"
          className={`address__input ${name}`}
          placeholder="Начните вводить пункт ..."
          onBlur={() => setToggleVisible(false)}
        />
        {textInput && <ClearInputButton clearInput={clearInput} />}
      </label>
      <ul className={classesList}>
        {addressArray
          ? addressArray
              .filter((items) =>
                items.name.toLowerCase().includes(textInput.toLowerCase())
              )
              .map((item, id) => (
                <li
                  key={id}
                  onClick={(e) => {
                    setInputText(name === 'street' ? item.address : item.name)
                    getId(item.id)
                  }}
                  className={`address__item`}>
                  {name === 'street' ? item.address : item.name}
                </li>
              ))
          : ''}
      </ul>
    </div>
  )
}
