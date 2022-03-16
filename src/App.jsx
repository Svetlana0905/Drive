import './style/app.scss'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
    </Routes>
  )
}

export default App
