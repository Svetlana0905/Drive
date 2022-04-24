import { useGetTariffQuery } from '../../redux/carApi'
import { RadioInput } from '../Buttons/Buttons'

export const Rate = ({ setCarTariff, carTariff, setCarTariffId }) => {
  const { data: rate = [], isLoading, isSuccess } = useGetTariffQuery()
  let rentArr = []

  if (isLoading) return <div>Loading...</div>
  if (isSuccess) {
    rentArr = rate.data
  }
  return (
    <>
      {rentArr?.map((item, index) => (
        <RadioInput
          key={index}
          text={`${item.rateTypeId.name}, ${item.price} ₽`}
          onChange={(e) => {
            setCarTariff(e.target.value)
            setCarTariffId(item.id)
          }}
          value={item.rateTypeId.name}
          name="tariff"
          defaultVal={carTariff}
        />
      ))}
    </>
  )
}
