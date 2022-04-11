import React from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { Swiper } from 'swiper/react';
// import 'swiper/css';
// import "swiper/css/pagination";
import { Pagination } from 'swiper';



const HouseFotosSlider = ({ listItem, houseRef, pagination }) => {
  const breakpoints = useBreakpoint();

  return (
    <Swiper
      pagination={pagination && breakpoints.md?{
        dynamicBullets: true,
      }:false}
      modules={[Pagination]}
      ref={houseRef}
      slidesPerView={'1'}
      grabCursor={true}
      loop={true}
    >
      {listItem}
    </Swiper>
  );
};

export default HouseFotosSlider;
