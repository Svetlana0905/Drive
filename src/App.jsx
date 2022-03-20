import './style/app.scss'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { OrderPage } from './pages/OrderPage/OrderPage'
import { Layout } from './components/Layout/Layout'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { CarPage } from './pages/CarPage/CarPage'
import { OptionsPage } from './pages/Options/OptionsPage'
import { ResultPage } from './pages/ResultPage/ResultPage'
function App() {
  return (
    <Routes>
      <Route path="/drive" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="order" element={<OrderPage />}>
          <Route path="car" element={<CarPage />} />
          <Route path="options" element={<OptionsPage />} />
          <Route path="result" element={<ResultPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
export default App
