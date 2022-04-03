import React from "react";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { Swiper } from "swiper/react";
import "swiper/css";
import SwiperCore, { Mousewheel, FreeMode } from "swiper";

SwiperCore.use([Mousewheel, FreeMode]);

const ModelsSlider = ({ listItem, houseRef, mobile }) => {
const breakpoints = useBreakpoint();

  return (
    <Swiper
      ref={houseRef}
      slidesPerView={breakpoints.m ? (breakpoints.xs ? "2" : "3") : "5"}
      grabCursor={true}
      loop={true}
      mousewheel={mobile ? false : true}
      direction={mobile ? "horizontal" : "vertical"}
      freeMode={breakpoints.s ? true : false}
      spaceBetween={20}
    >
      {listItem}
    </Swiper>
  );
};

export default ModelsSlider;
