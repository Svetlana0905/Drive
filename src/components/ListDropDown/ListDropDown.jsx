import './listDropDown.scss'
import { useEffect, useState, useRef } from 'react'
import { addCity, addStreet } from '../../redux/orderSlice'
import { useDispatch } from 'react-redux'
import { ClearInputButton } from '../Buttons/Buttons'
import { useOutClick } from '../../hooks/useOutClick'

export const ListDropDown = ({ label, addressArray, name }) => {
  const [isVisible, toggleVisible] = useState(false)
  const [cityFromBd, setCityFromBd] = useState('')
  const wrapperRef = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {
    name === 'street'
      ? dispatch(addStreet({ cityFromBd }))
      : dispatch(addCity({ cityFromBd }))
  })
  const clearInput = () => {
    setCityFromBd('')
  }
  useOutClick(wrapperRef, toggleVisible)

  return (
    <div className="address__wrapper">
      <label
        className={name === 'street' ? 'address__inner' : 'address__inner_city'}
        onClick={toggleVisible}>
        <span>{label}</span>
        <input
          onChange={(e) => {
            console.log(e.target.value)
            setCityFromBd(e.target.value)
          }}
          value={cityFromBd}
          type="text"
          className="address__input"
          placeholder="Начните вводить пункт ..."
        />

        <ClearInputButton clearInput={clearInput} />
      </label>
      <ul
        className={
          isVisible ? 'address__list address__list_open' : 'address__list'
        }
        ref={wrapperRef}>
        {addressArray
          .filter((item) => item.name.includes(cityFromBd))
          .map((item, id) => (
            <li
              key={id}
              onClick={(e) => setCityFromBd(item.name)}
              className="address__item">
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  )
}
