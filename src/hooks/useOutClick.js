import { useEffect } from 'react'

export const useOutClick = (ref, isVisible) => {
  useEffect(() => {
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
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, isVisible])
  return isVisible
}
