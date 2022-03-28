import './form.scss'
import { Point } from '../../components/Point/Point'
import { City } from '../../components/City/City'
import { Map } from '../../components/Map/Map'

export const Form = () => {
  return (
    <section className="order-page__order">
      <div className="address">
        <City />
        <Point />
      </div>
      <Map />
    </section>
  )
}
