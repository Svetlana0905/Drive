import './options.scss'
import {
  RadioInput,
  Checkbox,
  ClearInputButton
} from '../../components/Buttons/Buttons'
import 'react-datepicker/dist/react-datepicker.css'
import setHours from 'date-fns/setHours'
import ru from 'date-fns/locale/ru'
import setMinutes from 'date-fns/setMinutes'
import DatePicker from 'react-datepicker'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getOptions } from '../../redux/orderSlice'
import { Rate } from '../../components/Rate/Rate'

export const OptionsPage = () => {
  const dispatch = useDispatch()
  const [carColor, setCarColor] = useState(
    useSelector((state) => state.order.dataId.color)
  )
  const [carTariff, setCarTariff] = useState(
    useSelector((state) => state.order.tariffCar)
  )
  const [carTariffВData, setCarTariffData] = useState([])
  const [tank, setTank] = useState(
    useSelector((state) => state.order.dataId.isFullTank)
  )
  const [childChair, setChildChair] = useState(
    useSelector((state) => state.order.dataId.isNeedChildChair)
  )
  const [rightWheel, setRightWheel] = useState(
    useSelector((state) => state.order.dataId.isRightWheel)
  )
  const [startDate, setStartDate] = useState(new Date())
  const [startDateId, setStartDateId] = useState('')

  const [endDateId, setEndDateId] = useState(
    useSelector((state) => state.order.dataId.dateTo) // получение endDateId из stor для сохранения данных после рендерисна
  )

  const [endDate, setEndDate] = useState(() => endDateId)

  const [objOptions, setObjOptions] = useState({})

  const currentTime = endDate > startDate ? endDate - startDate : 0
  const days = Math.floor(currentTime / 1000 / 60 / 60 / 24)
  const hours = Math.floor(currentTime / 1000 / 60 / 60) % 24
  const carArray = useSelector((state) => state.order.carArray)

  const [valTank, setValTank] = useState('')
  const [valChair, setValChair] = useState('')
  const [valWheel, setValWheel] = useState('')

  useEffect(() => {
    setValTank(tank ? 'Да' : '')
    setValChair(childChair ? 'Да' : '')
    setValWheel(rightWheel ? 'Да' : '')
  }, [tank, childChair, rightWheel])

  useEffect(() => {
    const set = new Set()
    const color = ['Цвет', `${carColor}`]
    const tariff = ['Тариф', `${carTariff}`]
    const wheel = ['Правый руль', `${valWheel}`]
    const tank = ['Полный бак', `${valTank}`]
    const chair = ['Детское кресло', `${valChair}`]
    const rent = ['Длительность аренды', `${days}д ${hours}ч`]

    if (carColor) set.add(color)
    if (carTariff) set.add(tariff)
    if (valWheel) set.add(wheel)
    if (valTank) set.add(tank)
    if (valChair) set.add(chair)
    if (hours && days) set.add(rent)
    setObjOptions(Array.from(set))
  }, [carColor, carTariff, valWheel, valChair, valTank, days, hours])

  const clearStartDate = () => {
    setStartDate(new Date())
    setEndDate(null)
  }
  const clearEndDate = () => {
    setEndDate(null)
    setEndDateId(null)
  }

  const startDateHandler = (item) => {
    setStartDate(item)
    setEndDate(null)
  }
  const endDateHandler = (item) => {
    setEndDate(item)
  }
  useEffect(() => {
    setStartDateId(new Date(startDate).getTime())
    setEndDateId(new Date(endDate).getTime())
  }, [startDate, endDate])

  useEffect(() => {
    dispatch(
      getOptions({
        objOptions,
        carColor,
        tank,
        childChair,
        rightWheel,
        carTariff,
        carTariffВData,
        startDateId,
        endDateId
      })
    )
  }, [
    objOptions,
    carTariffВData,
    dispatch,
    carColor,
    tank,
    childChair,
    rightWheel,
    carTariff,
    startDateId,
    endDateId
  ])

  return (
    <section className="order-page__order">
      <div className="options">
        <div className="options__inner">
          <p className="text">Цвет</p>
          <div className="options__radio-block">
            <RadioInput
              text={'Любой'}
              name={'color'}
              value={'Любой'}
              onChange={(e) => setCarColor(e.target.value)}
              defaultVal={carColor}
            />
            {carArray.colors?.map((item, id) => (
              <RadioInput
                text={item}
                key={id}
                name={'color'}
                value={item}
                onChange={(e) => setCarColor(e.target.value)}
                defaultVal={carColor}
              />
            ))}
          </div>
        </div>
        <div className="options__inner options__inner-data">
          <p className="text">Дата аренды</p>
          <label className="input-text__inner">
            <span>С</span>
            <DatePicker
              selected={startDate}
              minDate={new Date()}
              onChange={startDateHandler}
              minTime={
                startDate.getDate() === new Date().getDate()
                  ? startDate
                  : setHours(setMinutes(new Date(), 0), 0)
              }
              maxTime={setHours(setMinutes(new Date(), 59), 23)}
              className="input-text"
              placeholderText={'Введите дату и время'}
              timeIntervals={60}
              dateFormat="dd.MM.yyyy HH:mm"
              timeFormat="HH:mm"
              showTimeInput
              locale={ru}
            />
            {startDate && (
              <ClearInputButton clearInput={clearStartDate} name={'calendar'} />
            )}
          </label>
          <label className="input-text__inner">
            <span>По</span>
            <DatePicker
              selected={endDate}
              minDate={startDate}
              onChange={(item) => endDateHandler(item)}
              minTime={startDate.getTime()}
              maxTime={setHours(setMinutes(new Date(), 59), 23)}
              className="input-text"
              placeholderText={'Введите дату и время'}
              timeIntervals={60}
              timeFormat="HH:mm"
              dateFormat="dd.MM.yyyy HH:mm"
              showTimeInput
              locale={ru}
            />
            {endDate && (
              <ClearInputButton clearInput={clearEndDate} name={'calendar'} />
            )}
          </label>
        </div>
        <div className="options__inner">
          <p className="text">Тариф</p>
          <div className="options__inner options__inner-buttons">
            <Rate
              setCarTariff={setCarTariff}
              carTariff={carTariff}
              setCarTariffData={setCarTariffData}
            />
          </div>
        </div>
        <div className="options__inner ">
          <p className="text">Доп услуги</p>
          <div className="options__inner options__inner-buttons">
            <Checkbox
              text={'Полный бак, 500р'}
              checked={!!tank}
              onChange={(e) => {
                setTank(!tank)
              }}
              name={'extra'}
            />
            <Checkbox
              text={'Детское кресло, 200р'}
              checked={!!childChair}
              onChange={(e) => setChildChair(!childChair)}
              name={'extra'}
            />
            <Checkbox
              text={'Правый руль, 1600р'}
              checked={!!rightWheel}
              onChange={(e) => {
                setRightWheel(!rightWheel)
              }}
              name={'extra'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
