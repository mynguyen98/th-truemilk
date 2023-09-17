import React from 'react'
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
import { TH_IMG_DATA } from '../constant/common'
const Hero = () => {
  return (
    <div className='section-wrapper'>
      <div className='hero-container'>
        <div className='hero-item-th hero-fruit-img'>
          <img src={riceImg} alt='' />
        </div>
        <div className='hero-item-th'>
          <h2 className='product-header'>
            TH true JUICE <br /> milk Red Rice
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
          <div className='button-change-item'>Next</div>
          <div className='bg-change-color'></div>
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
