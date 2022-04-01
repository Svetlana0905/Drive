import { AddressPage } from '../pages/AddressPage/AddressPage'
import { CarPage } from '../pages/CarPage/CarPage'
import { Form3 } from '../pages/Form3/Form3'
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
    page: <Form3 />,
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
