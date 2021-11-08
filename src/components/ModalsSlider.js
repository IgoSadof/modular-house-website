import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Swiper } from "swiper/react";
import "swiper/css";
import SwiperCore, {
  Mousewheel
} from 'swiper';

SwiperCore.use([Mousewheel]);

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
        direction={mobile ? 'horizontal' : 'vertical'}
        freeMode={true}
        spaceBetween={20}
        grabCursor={true}
      >
        {listItem}
      </Swiper>
  );
};

export default ModalsSlider;
