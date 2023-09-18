import React, { useRef, useState } from 'react'
import thRiceImg from '../assets/product/th-rice.png'
import thOrrangeImg from '../assets/product/th-orrange.png'
import thBananaImg from '../assets/product/th-banana.png'
import thBlueBerryImg from '../assets/product/th-blueberry.png'
import thStrawberryImg from '../assets/product/th-strawberry.png'
// ////////////////
import bananaImg from '../assets/product/banana-fruit.png'
import blueberryImg from '../assets/product/blueberry-fruit.png'
import riceImg from '../assets/product/rice-fruit.png'
import strawberryImg from '../assets/product/strawberry-fruit.png'
import orrangeImg from '../assets/product/orange-fruit.png'
import { HERO_DATA, TH_IMG_DATA } from '../constant/common'
const Hero = () => {
  const changeColorRef = useRef(null)
  const heroWrapperRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isChanging, setIsChanging] = useState(false)

  const changeToNextSlide = () => {
    console.log(heroWrapperRef.current)
    changeColorRef.current.style.backgroundColor =
      HERO_DATA[currentIndex + 1].color
    setIsChanging(true)
    setTimeout(() => {
      heroWrapperRef.current.style.backgroundColor =
        HERO_DATA[currentIndex + 1].color
      setIsChanging(false)
    }, 1000)
    if (currentIndex === HERO_DATA.length - 1) setCurrentIndex(0)
    setCurrentIndex((prev) => prev + 1)
  }
  return (
    <div className={`section-wrapper `} ref={heroWrapperRef}>
      <div className='hero-container'>
        <div className='hero-item-th hero-fruit-img'>
          <img src={HERO_DATA[currentIndex].thImg} alt='' />
        </div>
        <div className='hero-item-th'>
          <h2 className='product-header'>
            TH true JUICE <br /> milk {HERO_DATA[currentIndex].discription}
          </h2>
          <p className='product-description'>
            A combination of fresh milk from TH farms and natural fruits from
            high-quality farms provides sufficient vitamins and minerals for
            your body functions.
          </p>
          <button className='button-view-product'>View Flavour</button>
        </div>
        <div className='hero-item-th th-slider-wrapper'>
          <div className='left-separate '></div>
          <div className='center-separate '></div>
          <div className='button-change-item' onClick={changeToNextSlide}>
            Next
          </div>
          <div
            className={`bg-change-color ${
              isChanging ? 'bg-change-animation' : ''
            }`}
            ref={changeColorRef}
          ></div>

          <div className='th-slider-container'>
            {TH_IMG_DATA.map((img, i) => {
              return (
                <div className='th-slider-item'>
                  <img src={img} alt='th-orrange' />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
