import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const ForwardStep = (id) => {
  const [isDisubled, setIsDisubled] = useState(true)

  const city = useSelector((state) => state.order.city)
  const street = useSelector((state) => state.order.street)

  useEffect(() => {
    id === 0 && city && street ? setIsDisubled(false) : setIsDisubled(true)
  }, [street, city, id])
  useEffect(() => {
    if (id === 1) setIsDisubled(false)
  }, [id])
  return isDisubled
}
