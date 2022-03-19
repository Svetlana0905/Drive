import '../../style/app.scss'
import { Outlet } from 'react-router-dom'
import { SideBar } from '../SideBar/SideBar'
export const Layout = () => {
  return (
    <div className="body">
      <SideBar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}
