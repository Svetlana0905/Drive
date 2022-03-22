import './listDropDown.scss'
// import { useSelector } from 'react-redux'
import { useGetCityQuery } from '../../redux'

export const ListDropDown = () => {
  // const address = useSelector((state) => state.user)
  let addressArray = []
  // console.log(address)
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
    <form name="order-form" method="post">
      <section className="select-address">
        <label className="select-address__label-city">
          <span>Город</span>
          <input
            list="city"
            name="select-address__input input__city"
            // placeholder="Ульяновск"
          />
          <datalist className="select-address__list" id="city">
            {addressArray.map((item, id) => (
              <option
                key={id}
                value={item.name}
                className="select-address__item"
              />
            ))}
          </datalist>
        </label>
        <label className="select-address__label-address">
          <span>Пункт выдачи</span>
          <input
            className="select-address__input"
            placeholder="Начните вводить пункт ..."
          />
        </label>
      </section>
    </form>
  )
}
