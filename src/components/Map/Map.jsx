import './map.scss'
import MapImg from '../../assets/map.jpg'
export const Map = () => {
  return (
    <div className="map">
      <p className="map__text text">Выбрать на карте:</p>
      <img src={MapImg} alt="карта поиска" className="map__frame" />
    </div>
  )
}
