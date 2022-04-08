import './map.scss'
import { useState, useEffect } from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

export const MapBlock = ({ city, point, setCity, setPoint, pointsArray }) => {
  const [pointMap, setPointMap] = useState(null)
  const [markers, setMarkers] = useState([])
  const [currentPoint, setCurrentPoint] = useState(null)

  useEffect(() => {
    if (city && pointMap) {
      pointMap.geocode(`${city}, ${point}`).then((result) => {
        const coordinates = result.geoObjects.get(0).geometry.getCoordinates()
        setCurrentPoint(coordinates) // координаты из инпутов город + поинт (один адрес)
      })
    }
  }, [city, point, pointMap])

  useEffect(() => {
    setMarkers([]) // собираем массив маркеров из массива адресов для карты
    if (pointsArray.length && pointMap) {
      pointsArray.forEach((item) => {
        if (item.cityId) {
          pointMap
            .geocode(`${item.cityId.name}, ${item.address}`) // имя города + адрес
            .then((result) => {
              const coordinates = result.geoObjects
                .get(0)
                .geometry.getCoordinates()
              setMarkers((prev) => [...prev, coordinates])
            })
        }
      })
    }
  }, [pointsArray, pointMap, city])

  const mapHandler = (placemark) => {
    if (placemark) {
      pointMap.geocode(placemark).then((res) => {
        // данные из карты
        const landmark = res.geoObjects.get(0)
        setCity(landmark.properties.get('description').split(', ')[1]) // ответ в формате JSON берется только город без страны разделитель запятая
        setPoint(landmark.properties.get('name'))
      })
    } else {
      pointMap.geocode([45.03547, 38.975313]).then((res) => {
        const nearestPoint = res.geoObjects.get(0)
        setCity(nearestPoint.properties.get('description').split(', ')[1])
        setPoint(nearestPoint.properties.get('name'))
      })
    }
  }

  return (
    <YMaps
      query={{
        lang: 'ru_RU',
        apikey: `${process.env.REACT_APP_API_YANDEX}`
      }}>
      <div className="map">
        <p className="map__text text">Выбрать на карте:</p>
        <Map
          modules={['geocode']}
          onLoad={(ymaps) => {
            setPointMap(ymaps)
          }}
          state={{ center: currentPoint || [45.03547, 38.975313], zoom: 13 }}
          width={'100%'}
          height={'352px'}>
          {markers &&
            markers.map((item) => (
              <Placemark
                options={{
                  preset: 'islands#circleIcon',
                  iconColor: '#0EC261'
                }}
                iconColor="#3caa3c"
                geometry={item}
                onClick={() => mapHandler(item)}
                key={item}
              />
            ))}
        </Map>
      </div>
    </YMaps>
  )
}
