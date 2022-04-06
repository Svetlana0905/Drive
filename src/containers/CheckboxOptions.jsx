import { Checkbox } from '../components/Buttons/Buttons'
import { useState } from 'react'
export const CheckboxOptions = () => {
  const [extraOptions, setExtraOptions] = useState([])

  console.log(extraOptions)
  return (
    <>
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
    </>
  )
}
