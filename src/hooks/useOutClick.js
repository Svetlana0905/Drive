import { useEffect } from 'react'

export const useOutClick = (ref, isVisible) => {
  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !event.target.classList.contains('address__input') &&
      !event.target.classList.contains('address')
    ) {
      isVisible(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
  return isVisible
}
