import './dots.scss'
export const Dots = ({ moveDot, slideIndex, dataLenght }) => {
  return (
    <div className="dots">
      {Array.from({ length: dataLenght }).map((_, index) => (
        <div
          onClick={() => moveDot(index + 1)}
          key={index}
          className={slideIndex === index + 1 ? 'dot dot__active' : 'dot'}
        />
      ))}
    </div>
  )
}
