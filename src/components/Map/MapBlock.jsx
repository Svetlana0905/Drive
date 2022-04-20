import './map.scss'
import { useState, useEffect, useMemo } from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

export const MapBlock = ({
  city,
  point,
  setCity,
  setCityId,
  setPoint,
  setPointId,
  pointsArray
}) => {
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
    setMarkers([])
    if (pointsArray.length && pointMap) {
      pointsArray.forEach((item) => {
        if (item.cityId) {
          pointMap
            .geocode(`${item.cityId.name}, ${item.address}`) // имя города + адрес
            .then((result) => {
              const coordinates = result.geoObjects
                .get(0)
                .geometry.getCoordinates()
              setMarkers((prev) => [
                {
                  coordinates: coordinates,
                  city: item.cityId.name,
                  cityId: item.cityId.id,
                  point: item.address,
                  pointId: item.id
                },
                ...prev
              ])
            })
        }
      })
    }
  }, [pointsArray, pointMap, city])

  const mapHandler = useMemo(
    (placemark) => {
      if (placemark) {
        setCity(placemark.city)
        setPoint(placemark.point)
        setCityId(placemark.cityId)
        setPointId(placemark.pointId)
      }
    },
    [setCity, setPoint, setCityId, setPointId]
  )

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
          state={{ center: currentPoint || [47.221705, 39.712156], zoom: 13 }}
          width={'100%'}
          height={'352px'}>
          {markers &&
            markers.map((item, index) => (
              <Placemark
                options={{
                  preset: 'islands#circleIcon',
                  iconColor: '#0EC261'
                }}
                iconColor="#3caa3c"
                geometry={item.coordinates}
                onClick={(e) => {
                  mapHandler(item)
                }}
                key={index}
              />
            ))}
        </Map>
      </div>
    </YMaps>
  )
}
