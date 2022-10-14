import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import image1 from '../images/image-1.jpg'
import image2 from '../images/image-2.jpg'
import image3 from '../images/image-3.jpg'
import image4 from '../images/image-4.jpg'
import Layout2 from "../pages/Layout2";
import {AiOutlineArrowRight} from 'react-icons/ai'
function Home() {
  return (
    
    <>
    <Layout2/>
    <div className="home-section">
       <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true, color: '#008000' }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      style={{width: '100vw', height: '100vh'}}
    >
      <SwiperSlide style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}} className="swiper-slide">
        <img src={image1} alt="" className="slider-image" />
        <div className="text-wrapper">
        <h1 className="title title-after">Creative</h1>
        <h1 className="sub-title">Color up your life</h1>
        <Link to="/products" className="action-button">Shop now</Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <img src={image2} alt="" className="slider-image" />
      <div className="text-wrapper text-wrapper-2">
        <h1 className="title">Airpods cases</h1>
        <Link to="/products" className="action-button">More Info</Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <img src={image3} alt="" className="slider-image" />
      <div className="text-wrapper text-wrapper-2">
        <h1 className="title">Having problems?</h1>
        <Link to="/contact" className="action-button">Contact Us</Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <img src={image4} alt="" className="slider-image" />
      <div className="text-wrapper text-wrapper-2">
        <h1 className="title title-4">Sign up for our newspaper</h1>
        <input type="text" name="email" id="email" placeholder='e-mail...' className='newspaper'></input>
        <AiOutlineArrowRight className='submit-email'/>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
    </>
  )
}

export default Home