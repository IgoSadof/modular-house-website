import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Swiper } from "swiper/react";
import "swiper/css";
import SwiperCore, { Mousewheel, FreeMode } from "swiper";

SwiperCore.use([Mousewheel, FreeMode]);

const ModalsSlider = ({ listItem, houseRef, mobile }) => {
  const matches = {
    600: useMediaQuery("(max-width:600px)"),
    500: useMediaQuery("(max-width:500px)"),
  };

  return (
    <Swiper
      ref={houseRef}
      slidesPerView={matches[600] ? (matches[500] ? "3" : "4") : "5"}
      grabCursor={true}
      loop={true}
      mousewheel={mobile ? false : true}
      direction={mobile ? "horizontal" : "vertical"}
      freeMode={matches[600] ? true : false}
      spaceBetween={20}
    >
      {listItem}
    </Swiper>
  );
};

export default ModalsSlider;
