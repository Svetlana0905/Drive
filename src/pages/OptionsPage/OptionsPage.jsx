import './options.scss'
import {
  RadioInput,
  Checkbox,
  ClearInputButton
} from '../../components/Buttons/Buttons'
import 'react-datepicker/dist/react-datepicker.css'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import DatePicker from 'react-datepicker'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getOptions, isDisubled } from '../../redux/orderSlice'

export const OptionsPage = () => {
  const dispatch = useDispatch()
  const [carColor, setCarColor] = useState('')
  const [carTariff, setCarTariff] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)
  const [extraOptions, setExtraOptions] = useState([])
  const carArray = useSelector((state) => state.order.carArray)

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
    dispatch(getOptions({ carColor, carTariff, extraOptions }))
    if (carColor && carTariff && extraOptions) dispatch(isDisubled(false))
  }, [carColor, dispatch, carTariff, extraOptions])

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
              value={extraOptions}
              onClick={(e) => setExtraOptions(e.target.value)}
              name={'extra'}
            />
            <Checkbox
              text={'Детское кресло, 200р'}
              value={extraOptions}
              onClick={(e) => setExtraOptions(e.target.value)}
              name={'extra'}
            />
            <Checkbox
              text={'Правый руль, 1600р'}
              value={extraOptions}
              onClick={(e) => setExtraOptions(e.target.value)}
              name={'extra'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
