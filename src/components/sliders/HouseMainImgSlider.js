import React from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

const HouseMainImgSlider = ({listItem,myRef}) => {
  
  return (
    <Swiper
      ref={myRef}
      slidesPerView={'1'}
      grabCursor={true}
      loop={true}
    >
      {listItem}
    </Swiper>
  );
};

export default HouseMainImgSlider;
