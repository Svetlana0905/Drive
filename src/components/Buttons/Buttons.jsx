import './buttons.scss'
export const LangButton = ({ text, clickHundler }) => {
  return (
    <div className="language">
      <button onClick={clickHundler} className="language__btn">
        Eng
      </button>
    </div>
  )
}
export const ArrowButtonLeft = ({ handleClick }) => {
  return <button onClick={handleClick} className="btn--left"></button>
}
export const ArrowButtonRight = ({ handleClick }) => {
  return <button onClick={handleClick} className="btn--right"></button>
}
