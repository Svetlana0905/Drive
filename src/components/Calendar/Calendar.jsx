import './calendar.scss'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import { useState } from 'react'

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className
        //   locale="pt-BR"
        //   timeFormat="p"
        timeIntervals={60}
        //   dateFormat="Pp"
        //   showTimeInput
      />
    </>
  )
}
