import React from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

const HouseMainImgSlider = ({listItem,myRef}) => {
  
  return (
    <Swiper
      ref={myRef}
      slidesPerView={'1'}
      grabCursor={false}
      loop={true}
      allowTouchMove={false}
    >
      {listItem}
    </Swiper>
  );
};

export default HouseMainImgSlider;
