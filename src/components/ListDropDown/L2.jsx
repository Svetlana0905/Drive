import './listDropDown.scss'
import { useState, useRef } from 'react'
import { ClearInputButton } from '../Buttons/Buttons'
import { useOutClick } from '../../hooks/useOutClick'

export const ListDropDown = ({
  label,
  addressArray,
  name,
  clearInput,
  setCityFromBd,
  cityFromBd
}) => {
  const [isVisible, toggleVisible] = useState(false)
  const wrapperRef = useRef(null)
  useOutClick(wrapperRef, toggleVisible)
  const clssessInput =
    name === 'street' ? `address__inner` : `address__inner_city`
  const classesLi = isVisible
    ? `address__list address__list_open`
    : `address__list`

  return (
    <div className={`address__wrapper`}>
      <label className={clssessInput} onClick={toggleVisible}>
        <span>{label}</span>
        <input
          onChange={(e) => {
            setCityFromBd(e.target.value)
          }}
          value={cityFromBd}
          type="text"
          className={`address__input`}
          placeholder="Начните вводить пункт ..."
        />
        <ClearInputButton clearInput={clearInput} />
      </label>
      <ul className={classesLi} ref={wrapperRef}>
        {addressArray
          .filter((item) =>
            item.name.toLowerCase().includes(cityFromBd.toLowerCase())
          )
          .map((item, id) => (
            <li
              key={id}
              onClick={(e) => setCityFromBd(item.name)}
              className={`address__item`}>
              {item.name}
              {console.log(item)}
            </li>
          ))}
      </ul>
    </div>
  )
}
