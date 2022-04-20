import './language.scss'
import { LangButton } from '../Buttons/Buttons'
export const Language = ({ isVisible }) => {
  const classess = isVisible ? 'languege languege__open' : 'languege'
  // думаю, здесь потом нужна будет логика для смены языка
  return (
    <div className={classess}>
      <LangButton />
    </div>
  )
}
