import './listDropDown.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { isDisubled } from '../../redux/orderSlice'
import { ClearInputButton } from '../Buttons/Buttons'

export const ListDropDown = ({
  label,
  addressArray,
  name,
  setInputText,
  textInput
}) => {
  // const [isVisible, setToggleVisible] = useState(false)
  const [style, setStyle] = useState(`address__list`)
  const dispatch = useDispatch()

  const getText = (word) => {
    setInputText(word)
    // setStyle(`address__list`)
  }
  const clearInput = () => {
    dispatch(isDisubled(true))
    setInputText('')
  }

  //   const getClass = (id, linkId) => {
  //    if (id < linkId) return `${navName} ${navName}__disabled`
  //    else if (id === linkId) return `${navName} ${navName}__active`
  //    else return navName
  //  }

  const closeDropdown = () => {
    setStyle(`address__list`)
  }
  const open = () => {
    setStyle(`address__list address__list_open`)
  }
  const clssessInput =
    name === 'street' ? `address__inner` : `address__inner_city`

  return (
    <div className="address__wrapper">
      <label className={clssessInput}>
        <span>{label}</span>
        <input
          onFocus={open}
          disabled={name === 'street' && addressArray.length === 0}
          onChange={(e) => {
            getText(e.target.value)
          }}
          value={textInput}
          type="text"
          className={`address__input ${name}`}
          placeholder="Начните вводить пункт ..."
          // onBlur={closeDropdown}
        />
        {textInput && <ClearInputButton clearInput={clearInput} />}
      </label>
      <ul className={style}>
        {addressArray
          .filter((items) =>
            items.name.toLowerCase().includes(textInput.toLowerCase())
          )
          .map((item, id) => (
            <li
              key={id}
              onClick={(e) => {
                setInputText(name === 'street' ? item.address : item.name)
                closeDropdown()
              }}
              // onBlur={(e) => closeDropdown(e)}
              className={`address__item`}>
              {name === 'street' ? item.address : item.name}
            </li>
          ))}
      </ul>
    </div>
  )
}
