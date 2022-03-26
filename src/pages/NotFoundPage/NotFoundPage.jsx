import { Link } from 'react-router-dom'
export const NotFoundPage = () => {
  return (
    <div>
      <h1>NotFountPage</h1>
      <p>Такая страница не существует</p>
      <Link to="/">Вернуться на главную страницу Home</Link>
    </div>
  )
}
