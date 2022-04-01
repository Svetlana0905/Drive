import './cart.scss'
import { useSelector } from 'react-redux'

export const Cart = () => {
  const objOptions = useSelector((state) => state.order.options)
  const entries = Object.entries(objOptions)

  return (
    <>
      {entries ? (
        entries.map((item, id) => (
          <div className="option" key={item.id}>
            {console.log(item)}
            <span className="option__name text">{item[0]}</span>
            <span className="option__name-colon"></span>
            <p className="option__value">
              <span>{item[1]}</span>
            </p>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </>
  )
}
