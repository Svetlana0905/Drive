import './style/app.scss'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { Layout } from './components/Layout/Layout'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
