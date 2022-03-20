import './style/app.scss'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { OrderPage } from './pages/OrderPage/OrderPage'
import { Layout } from './components/Layout/Layout'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
function App() {
  return (
    <Routes>
      <Route path="/drive" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
export default App
