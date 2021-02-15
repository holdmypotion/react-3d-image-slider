import React, { useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules

import "./ImageSlider.css";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};

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

  const templateImages = images.map((image, idx) => {
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
