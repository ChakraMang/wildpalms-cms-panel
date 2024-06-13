import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation, HashNavigation } from 'swiper/modules';

const ImageGallery = ({pictures}) => {
  console.log('pictures', pictures)
  return (
    <div className="image-gallery-container">
      <Swiper
          slidesPerView={3}
          spaceBetween={30}
          hashNavigation={{
            watchState: true,
          }}
        // loop = {true}        
        speed={2000}
        navigation = {
          {
            prevEl:".left-arrow",
            nextEl: ".right-arrow"
          }
        }
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          591: {
            slidesPerView: 2,
          },
          1750: {
            slidesPerView: 3,
          },
        }}
        modules={[ Navigation, HashNavigation]}
        className="mySwiper"
      >
        {pictures?.map((item, ind)=>(
            <SwiperSlide data-hash="slide1" key={ind}>
                <div className="items">
                  <img src={item} alt="" className="d-block w-100"/>
              </div>
            </SwiperSlide>                
          ))}
      </Swiper>   
        <div className="owl-nav detail-nav">
          <div className="owl-prev left-arrow">
            <i className="fas fa-caret-left" />
          </div>
          <div className="owl-next right-arrow">
            <i className="fas fa-caret-right" />
          </div>
        </div>   
    </div>
  );
};

export default ImageGallery;
