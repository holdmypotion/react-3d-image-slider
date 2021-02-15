import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import "./ImageSlider.css";

const ImageSlider = ({ images, slidesToShow = 3 }) => {
  const settings = {
    centeredSlides: true,
    loop: true,
    slidesToShow: 1,
    breakpoints: {
      820: {
        slidesPerView: slidesToShow,
      },
    },
  };

  const templateImages = images.map((image) => {
    if (image !== null) {
      return (
        <SwiperSlide key={image.id}>
          <div className="slideWrapper">
            {image.code ? image.code : <img src={image.src} alt={image.alt} />}
          </div>
        </SwiperSlide>
      );
    }
    return null;
  });

  return <Swiper {...settings} navigation style={{ '--swiper-navigation-color': 'black' }}>{templateImages}</Swiper>;
};

export default ImageSlider;
