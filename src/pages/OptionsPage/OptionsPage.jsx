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

export const OptionsPage = () => {
  const dispatch = useDispatch()
  const colorCar = useSelector((state) => state.order.colorCar)
  const tariffCar = useSelector((state) => state.order.tariffCar)
  const tankCar = useSelector((state) => state.order.tank)
  const chair = useSelector((state) => state.order.chair)
  const wheel = useSelector((state) => state.order.rightWheel)

  const [carColor, setCarColor] = useState(colorCar)
  const [carTariff, setCarTariff] = useState(tariffCar)
  const [tank, setTank] = useState(tankCar)
  const [childChair, setChildChair] = useState(chair)
  const [rightWheel, setRightWheel] = useState(wheel)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)
  const [objOptions, setObjOptions] = useState({})

  // const currentTime = optionsData.dateEnd - optionsData.dateStart
  // const days = Math.floor(currentTime / 1000 / 60 / 60 / 24)
  // const hours = Math.floor(currentTime / 1000 / 60 / 60) % 24
  // console.log(days, hours)

  const carArray = useSelector((state) => state.order.carArray)

  useEffect(() => {
    const set = new Set()
    const color = ['Цвет', `${carColor}`]
    const tariff = ['Тариф', `${carTariff}`]
    const wheel = ['Детское кресло', `${rightWheel}`]
    const fullTank = ['Полный бак', `${tank}`]
    if (carColor) set.add(color)
    if (carTariff) set.add(tariff)
    if (rightWheel) set.add(wheel)
    if (tank) set.add(fullTank)
    setObjOptions(Array.from(set))
  }, [carColor, carTariff, rightWheel, tank])

  const clearStartDate = () => {
    setStartDate(new Date())
    setEndDate(null)
  }
  const clearEndDate = () => {
    setEndDate(null)
  }

  const startDateHandler = (item) => {
    setStartDate(item)
    setEndDate(null)
  }
  const endDateHandler = (item) => {
    setEndDate(item)
  }

  useEffect(() => {
    dispatch(getOptions({ objOptions }))
  }, [objOptions, dispatch])

  return (
    <section className="order-page__order">
      <div className="options">
        <div className="options__inner">
          <p className="text">Цвет</p>
          <div className="options__radio-block">
            {carArray.colors?.map((item, id) => (
              <RadioInput
                text={item}
                onClick={(e) => setCarColor(e.target.value)}
                key={id}
                name={'options'}
                value={item}
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
            {startDate && <ClearInputButton clearInput={clearStartDate} />}
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
            {endDate && <ClearInputButton clearInput={clearEndDate} />}
          </label>
        </div>
        <div className="options__inner">
          <p className="text">Тариф</p>
          <div className="options__inner options__inner-buttons">
            <RadioInput
              text="Поминутно, 7₽/мин"
              onClick={(e) => setCarTariff(e.target.value)}
              value="Поминутно"
              name={'tariff'}
            />
            <RadioInput
              text="На сутки, 1999 ₽/сутки"
              onClick={(e) => setCarTariff(e.target.value)}
              name={'tariff'}
              value="На сутки"
            />
          </div>
        </div>
        <div className="options__inner ">
          <p className="text">Доп услуги</p>
          <div className="options__inner options__inner-buttons">
            <Checkbox
              text={'Полный бак, 500р'}
              value={tank}
              onClick={(e) => setTank(!tank)}
              name={'extra'}
            />
            <Checkbox
              text={'Детское кресло, 200р'}
              value={childChair}
              onClick={(e) => setChildChair(!childChair)}
              name={'extra'}
            />
            <Checkbox
              text={'Правый руль, 1600р'}
              value={rightWheel}
              onClick={(e) => setRightWheel(!rightWheel)}
              name={'extra'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
