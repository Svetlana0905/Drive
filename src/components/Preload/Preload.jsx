import './preload.scss'
export const Preload = ({ size }) => {
  return (
    <div
      className={
        size === 'big'
          ? 'cssload-container cssload-container__big'
          : 'cssload-container'
      }>
      <div
        className={
          size === 'big'
            ? 'cssload-zenith cssload-zenith__big'
            : 'cssload-zenith'
        }></div>
    </div>
  )
}
