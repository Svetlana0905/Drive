import { AddressPage } from '../pages/AddressPage/AddressPage'
import { CarPage } from '../pages/CarPage/CarPage'
import { Options } from '../containers/Options'
import { Form4 } from '../pages/Form4/Form4'
import { Cart } from '../components/Cart/Cart'
import { Price } from '../containers/Price'
export const FormSlider = [
  {
    page: <AddressPage />,
    cart: <Cart />,
    price: <Price />,
    btnText: 'Выбрать модель'
  },
  {
    page: <CarPage />,
    cart: <Cart />,
    price: <Price />,
    btnText: 'Дополнительно'
  },
  {
    page: <Options />,
    cart: <Cart />,
    price: <Price />,
    btnText: 'Итого'
  },
  {
    page: <Form4 />,
    cart: <Cart />,
    price: <Price />,
    btnText: 'Заказать'
  }
]
