import './listDropDown.scss'
// import { useSelector } from 'react-redux'
import { useGetCityQuery } from '../../redux'
import { ClearInputButton } from '../Buttons/Buttons'

export const ListDropDown = () => {
  // const address = useSelector((state) => state.user)
  let addressArray = []
  // console.log(address)
  const handleClick = () => {}
  const { data: city = [], isLoading, isSuccess } = useGetCityQuery()
  if (isLoading)
    return (
      <div>
        <h1>Loading</h1>
      </div>
    )
  if (isSuccess) {
    addressArray = city.data
  }
  return (
    <form method="post" className="form">
      <section className="address">
        <div className="address__city city">
          <div className="city__inner">
            <span>Город</span>
            <input
              type="text"
              className="city__input"
              placeholder="Ульяновск"
            />
            <ClearInputButton handleClick={handleClick} />
          </div>
          <ul className="city__list">
            {addressArray.map((item, id) => (
              <li key={id} value={item.name} className="city__item">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <label className="address__street">
          <span>Пункт выдачи</span>
          <input
            className="street__input"
            placeholder="Начните вводить пункт ..."
          />
        </label>
      </section>
    </form>
  )
}
