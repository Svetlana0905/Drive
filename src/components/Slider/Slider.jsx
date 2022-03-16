import './slider.scss'
import { SliderData } from '../../data/SliderData'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowButtonLeft, ArrowButtonRight } from '../Buttons/Buttons'
import { Dots } from '../Dots/Dots'

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1)
  const dataLenght = SliderData.length

  const nextSlide = () => {
    if (slideIndex !== SliderData.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === SliderData.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(SliderData.length)
    }
  }
  const moveDot = (index) => {
    setSlideIndex(index)
  }

  return (
    <section className="slider">
      {SliderData.map((item, index) => (
        <div
          key={item.title}
          className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
          <div className="slide__context">
            <h3 className="slide__title">{item.title}</h3>
            <h4 className="slide__subtitle">{item.subtitle}</h4>
            <Link to={item.link} className={`slide__link ${item.bg}`}>
              Подробнее
            </Link>
          </div>
          <div className="slide__bg">
            <img className="slide__img" src={item.imgpath} alt={item.title} />
          </div>
        </div>
      ))}
      <ArrowButtonLeft handleClick={prevSlide} />
      <ArrowButtonRight handleClick={nextSlide} />
      <Dots moveDot={moveDot} slideIndex={slideIndex} dataLenght={dataLenght} />
    </section>
  )
}
