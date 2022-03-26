import './slider.scss'
import { SliderData } from '../../data/SliderData'
import { LinkBtnSlider } from '../Links/links'
import { useState } from 'react'
import { ArrowButtonSlider } from '../Buttons/Buttons'
import { Dots } from '../Dots/Dots'

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1)
  const dataLenght = SliderData.length

  const nextSlide = () => {
    slideIndex !== SliderData.length
      ? setSlideIndex(slideIndex + 1)
      : setSlideIndex(1)
  }

  const prevSlide = () => {
    slideIndex !== 1
      ? setSlideIndex(slideIndex - 1)
      : setSlideIndex(SliderData.length)
  }

  const moveDot = (index) => {
    setSlideIndex(index)
  }

  return (
    <section className="slider">
      {SliderData.map((item, index) => (
        <div
          key={item.title}
          className={
            slideIndex === index + 1 ? 'slide slide__active-anim' : 'slide'
          }>
          <div className="slide__context">
            <h3 className="slide__title">{item.title}</h3>
            <p className="slide__subtitle">{item.subtitle}</p>
            <LinkBtnSlider
              link={item.link}
              styleLink={item.bg}
              text={'Подробнее'}
            />
          </div>
          <div className="slide__bg">
            <img className="slide__img" src={item.imgpath} alt={item.title} />
          </div>
        </div>
      ))}
      <ArrowButtonSlider
        handleClick={prevSlide}
        styleArr={'btn_slider btn_slider__right'}
      />
      <ArrowButtonSlider
        handleClick={nextSlide}
        styleArr={'btn_slider btn_slider__left'}
      />
      <Dots moveDot={moveDot} slideIndex={slideIndex} dataLenght={dataLenght} />
    </section>
  )
}
