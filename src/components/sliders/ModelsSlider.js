import React from "react";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { Swiper } from "swiper/react";
import "swiper/css";
import SwiperCore, { Mousewheel, FreeMode } from "swiper";

SwiperCore.use([Mousewheel, FreeMode]);

const ModelsSlider = ({ listItem, houseRef }) => {
const breakpoints = useBreakpoint();

  return (
    <Swiper
      ref={houseRef}
      slidesPerView={breakpoints.m ? (breakpoints.xs ? "2" : "3") : "5"}
      grabCursor={true}
      loop={true}
      mousewheel={breakpoints.md? false : true}
      direction={breakpoints.md? "horizontal" : "vertical"}
      // freeMode={breakpoints.s ? true : false}
      spaceBetween={20}
    >
      {listItem}
    </Swiper>
  );
};

export default ModelsSlider;
