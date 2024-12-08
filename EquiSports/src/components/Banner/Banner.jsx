import React from 'react';
import { useLocation } from 'react-router-dom';  
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';  
import { Navigation, Pagination } from 'swiper/modules';

import BannerImage1 from './sports.jpg'; 
import BannerImage2 from './sports1.jpg';
import BannerImage3 from './sports2.jpg'; 

const Banner = () => {
  const location = useLocation();  
  
  if (location.pathname !== '/') {
    return null;  
  }

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className="w-[90%] mx-auto my-8"
    >
      
      <SwiperSlide>
        <div
          className="hero h-[60vh] md:h-[55vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[75vh] rounded-lg overflow-hidden p-4"
          style={{
            backgroundImage: `url(${BannerImage1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md px-4">
              <h1 className="mb-5 text-4xl text-white font-bold">Premium Sports Equipment</h1>
              <p className="mb-5 text-lg text-white font-semibold">
                Top-quality gear for every athlete. Achieve your peak performance with our wide range of sports equipment.
              </p>
              <button className="btn bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 shadow-lg transform hover:scale-105 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      
      <SwiperSlide>
        <div
          className="hero h-[60vh] md:h-[55vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[75vh] rounded-lg overflow-hidden p-4"
          style={{
            backgroundImage: `url(${BannerImage2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md px-4">
              <h1 className="mb-5 text-4xl text-white font-bold">Find Your Ideal Gear</h1>
              <p className="mb-5 text-lg text-white font-semibold">
                Whether you're a professional or a beginner, we have the perfect gear to fit your needs.
              </p>
              <button className="btn bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 shadow-lg transform hover:scale-105 transition">
                Browse Collection
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      
      <SwiperSlide>
        <div
          className="hero h-[60vh] md:h-[55vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[75vh] rounded-lg overflow-hidden p-4"
          style={{
            backgroundImage: `url(${BannerImage3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md px-4">
              <h1 className="mb-5 text-4xl text-white font-bold">Gear Up for Success</h1>
              <p className="mb-5 text-lg text-white font-semibold">
                Our sports equipment is designed to elevate your performance. Get ready to level up your game!
              </p>
              <button className="btn bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 shadow-lg transform hover:scale-105 transition">
                Start Shopping
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
