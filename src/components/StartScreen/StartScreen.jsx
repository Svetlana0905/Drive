import './startScreen.scss'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { LinkBtnBig } from '../Links/links'

export const StartScreen = () => {
  return (
    <section className="start--screen">
      <Header />
      <div className="start--screen__inner">
        <div className="start--screen__content">
          <h1 className="start--screen__title">
            Каршеринг <br />
            <mark className="start--screen__mark">Need for drive</mark>
          </h1>
          <h2 className="start--screen__subtitle">
            Поминутная аренда авто твоего города
          </h2>
        </div>
        <LinkBtnBig text="Забронировать" link="/" />
      </div>
      <Footer />
    </section>
  )
}
