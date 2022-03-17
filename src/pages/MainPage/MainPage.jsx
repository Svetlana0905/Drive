import './mainPage.scss'
import { SideBar } from '../../components/SideBar/SideBar'
import { StartScreen } from '../../components/StartScreen/StartScreen'
import { Slider } from '../../components/Slider/Slider'
export const MainPage = () => {
  return (
    <div className="body">
      <main className="main">
        <SideBar></SideBar>
        <StartScreen></StartScreen>
      </main>
      <Slider></Slider>
    </div>
  )
}
