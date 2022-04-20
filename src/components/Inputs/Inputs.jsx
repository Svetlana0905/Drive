import './inputs.scss'
import { ClearInputButton } from '../Buttons/Buttons'
export const InputText = ({
  placeholder,
  label,
  textInput,
  getText,
  clearInput
}) => {
  return (
    <label className="input-text__inner">
      <span>{label}</span>
      <input
        onChange={(e) => {
          getText(e.target.value)
        }}
        value={textInput}
        type="text"
        className="input-text"
        placeholder={placeholder}
      />
      {textInput && <ClearInputButton clearInput={clearInput} />}
    </label>
  )
}
