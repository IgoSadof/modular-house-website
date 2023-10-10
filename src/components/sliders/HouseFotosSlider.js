import React,{ useState } from 'react';
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

  const [swipe, setSwipe] = useState(false);
  const handleClick = (e) => {
    houseRef.focus((e) => {
      e.preventDefault();
      e.target.focus({preventScroll: true});
    })
  };

  const settings = {
    className: "slider variable-width slider_top",
    speed: 300,
    dots: !!pagination && breakpoints.md,
    infinite: true,
    // slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: autoSlidesPerView? breakpoints.md?true:true: false,
    swipeToSlide: true,
    infinite: true,
    arrows: false,
    focusOnChange: true,
    initialSlide,
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
    <Slider onClick={handleClick} ref={houseRef} {...settings}>{listItem}</Slider>


  );
};

export default HouseFotosSlider;
