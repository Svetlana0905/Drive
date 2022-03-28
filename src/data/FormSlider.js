import { Form } from '../pages/FormPage/Form'
import { Form2 } from '../pages/Form2/Form2'
import { Form3 } from '../pages/Form3/Form3'
import { Form4 } from '../pages/Form4/Form4'
import { Cart } from '../components/Cart/Cart'
import { Price } from '../components/Price/Price'
export const FormSlider = [
  {
    page: <Form />,
    cart: <Cart />,
    price: <Price />,
    btnText: 'Выбрать модель'
  },
  {
    page: <Form2 />,
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
