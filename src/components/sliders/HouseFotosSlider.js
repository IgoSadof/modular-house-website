import React from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
// import { Swiper } from 'swiper/react';
// import 'swiper/css';
// import "swiper/css/pagination";
// import { Pagination } from 'swiper';

// import Slider from "react-slick";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const HouseFotosSlider = ({ listItem, houseRef, pagination, autoSlidesPerView, enabled=true, initialSlide=0, }) => {
  const breakpoints = useBreakpoint();

  const settings = {
    className: "slider variable-width",
    speed: 300,
    // dots: true,
    infinite: true,
    // slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: autoSlidesPerView? breakpoints.md?false:true: false,
    swipeToSlide: true,
    infinite: true,
    arrows: false,
    focusOnChange: false,
    focusOnSelect: false,
    // accessibility: false,
  };

  return (
    // <Swiper
    //   pagination={pagination && breakpoints.md?{
    //     dynamicBullets: true,
    //   }:false}
    //   modules={[Pagination]}
    //   ref={houseRef}
    //   slidesPerView={autoSlidesPerView?'auto':'1'}
    //   loopedSlides={3}
    //   grabCursor={true}
    //   loop={true}
    //   allowTouchMove={true}
    //   enabled={enabled}
    //   initialSlide={initialSlide}
    //   spaceBetween={autoSlidesPerView && !breakpoints.md? (breakpoints.xxl? '1%': 12) :0}
    //   className={autoSlidesPerView && !breakpoints.md?'mySwiper':'default'}
    // >
    //   {listItem}
    // </Swiper>
    <Slider ref={houseRef} {...settings}>{listItem}</Slider>


  );
};

export default HouseFotosSlider;
