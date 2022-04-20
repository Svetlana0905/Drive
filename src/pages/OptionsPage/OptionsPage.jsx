import './options.scss'
import { RadioInput, Checkbox } from '../../components/Buttons/Buttons'
import { InputText } from '../../components/Inputs/Inputs'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getOptions, isDisubled } from '../../redux/orderSlice'

export const OptionsPage = () => {
  const dispatch = useDispatch()
  const [carColor, setCarColor] = useState('')
  const [carTariff, setCarTariff] = useState('')
  const [dataFrom, setDateFrom] = useState('')
  const [dataTo, setDateTo] = useState('')
  const [extraOptions, setExtraOptions] = useState([])
  const carArray = useSelector((state) => state.order.carArray)
  // console.log(extraOptions)

  const clearInput = () => {
    dispatch(isDisubled(true))
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
          <InputText
            label={'С'}
            placeholder={'12.06.2019 12:00'}
            getText={setDateFrom}
            textInput={dataFrom}
            clearInput={clearInput}
          />
          <InputText
            label={'По'}
            placeholder={'Введите дату и время'}
            getText={setDateTo}
            textInput={dataTo}
            clearInput={clearInput}
          />
        </div>
        <div className="options__inner options__tariff">
          <p className="text">Тариф</p>
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
        <div className="options__inner">
          <p className="text">Доп услуги</p>
          <Checkbox
            label={'lvvv'}
            value={extraOptions}
            onClick={(e) => setExtraOptions(e.target.value)}
            name={'extra'}
          />
          <Checkbox
            label={'aaaaa'}
            value={extraOptions}
            onClick={(e) => setExtraOptions(e.target.value)}
            name={'extra'}
          />
        </div>
      </div>
    </section>
  )
}
