import React from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from 'swiper';



const HouseFotosSlider = ({ listItem, houseRef, pagination, autoSlidesPerView, enabled=true }) => {
  const breakpoints = useBreakpoint();

  return (
    <Swiper
      pagination={pagination && breakpoints.md?{
        dynamicBullets: true,
      }:false}
      modules={[Pagination]}
      ref={houseRef}
      slidesPerView={autoSlidesPerView?'auto':'1'}
      grabCursor={true}
      loop={true}
      allowTouchMove={true}
      enabled={enabled}
      spaceBetween={autoSlidesPerView && !breakpoints.md? (breakpoints.xxl? '1%': 12) :0}
      className={autoSlidesPerView && !breakpoints.md?'mySwiper':'default'}
    >
      {listItem}
    </Swiper>
  );
};

export default HouseFotosSlider;
