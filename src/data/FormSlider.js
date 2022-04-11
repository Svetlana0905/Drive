import { AddressPage } from '../pages/AddressPage/AddressPage'
import { CarPage } from '../pages/CarPage/CarPage'
import { OptionsPage } from '../pages/OptionsPage/OptionsPage'
import { AddOrder } from '../pages/AddOrder/AddOrder'
import { TotalPage } from '../pages/TotalPage/TotalPage'
import { NumberOrder } from '../components/NumberOrder'

export const FormSlider = [
  {
    page: <AddressPage />,
    btnText: 'Выбрать модель',
    orderStatus: false
  },
  {
    page: <CarPage />,
    btnText: 'Дополнительно',
    orderStatus: false
  },
  {
    page: <OptionsPage />,
    btnText: 'Итого',
    orderStatus: false
  },
  {
    page: <AddOrder />,
    btnText: 'Заказать',
    orderStatus: true
  },
  {
    page: <TotalPage />,
    btnText: 'Отменить',
    mavText: <NumberOrder />,
    orderStatus: false
  }
]
