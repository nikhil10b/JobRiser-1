import React, { Component }  from 'react'
import "./carousel.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    
  return (
    
      <div className='carousel'>
    <Slider {...settings}>
          <div className='outer-banner'>
            <img src="/images/banner1.png" alt="" className='banner'/>
          </div>
          <div className='outer-banner'>
          <img src="/images/banner2.png" alt="" className='banner' />
          </div>
          <div className='outer-banner'>
          <img src="/images/banner1.png" alt="" className='banner' />
          </div>
          
        </Slider>
        </div>
  )
}

export default Carousel
