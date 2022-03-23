import './language.scss'
import { LangButton } from '../Buttons/Buttons'
export const Language = ({ isVisible }) => {
  // думаю, здесь потом нужна будет логика для смены языка
  return (
    <div className={isVisible ? 'languege languege__open' : 'languege'}>
      <LangButton />
    </div>
  )
}
