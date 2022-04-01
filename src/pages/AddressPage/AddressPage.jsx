import { Point } from '../../containers/Points'
import { City } from '../../containers/City'
import { Map } from '../../components/Map/Map'

export const AddressPage = () => {
  return (
    <section className="order-page__order">
      <div className="order-page__body">
        <City />
        <Point />
      </div>
      <Map />
    </section>
  )
}
