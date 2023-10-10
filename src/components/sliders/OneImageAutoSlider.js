import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import SwiperCore, { Autoplay, EffectFade } from "swiper";

// SwiperCore.use([Autoplay, EffectFade]);

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const useStyles = makeStyles((theme) => ({
  imgBox: {
    width: "100%",
    // maxHeight: "80vh",
    // aspectRatio:'9/16',
    // minHeight: '600px',
    "&>div":{
      // height: "100%",
    },
    "& img":{
      objectFit: "cover",
      height: "100%",
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      height: "520px",
    },
  },
  img: {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    objectFit: "cover",
    transition: "all .5s",
  },
}));
const OneImageAutoSlider = ({ mobile, slides }) => {
  const param = { mobile };
  const classes = useStyles(param);
  const listItems = slides
    ? slides.map((item, index) => {
        return (
          <div key={index}>
            <Box className={classes.imgBox}>
              <img
                className={classes.img}
                src={item}
                alt="house"
              />
            </Box>
          </div>
        );
      })
    : null;
    const settings = {
      className: "slider variable-width",
      speed:500,
      // dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: autoSlidesPerView? breakpoints.md?false:true: false,
      swipeToSlide: true,
      infinite: true,
      arrows: false,
      focusOnChange: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000
    };
  return (

    // <Swiper
    //   slidesPerView={"1"}
    //   // grabCursor={true}
    //   autoplay={{
    //     delay: 3000,
    //     disableOnInteraction: false,
    //   }}
    //   navigation={true}
    //   loop={true}
    //   // centeredSlides={true}
    //   spaceBetween={20}
    //   effect={"fade"}
    //   // onSlideChange={() => console.log("slide change")}
    //   // onSwiper={(swiper) => console.log(swiper)}
    // >
    //   {listItems}
    // </Swiper>
    <Slider {...settings}>{listItems}</Slider>
  );
};

export default OneImageAutoSlider;
