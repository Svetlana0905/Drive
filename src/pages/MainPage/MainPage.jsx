import './mainPage.scss'
import { SideBar } from '../../components/SideBar/SideBar'
import { StartScreen } from '../../components/StartScreen/StartScreen'
import { Slider } from '../../components/Slider/Slider'
export const MainPage = () => {
  return (
    <div className="body">
      <SideBar></SideBar>
      <StartScreen></StartScreen>
      <Slider></Slider>
    </div>
  )
}
