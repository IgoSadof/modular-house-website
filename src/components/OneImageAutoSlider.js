import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
// import slide1 from "../assets/images/slide1.png";
// import slide2 from "../assets/images/slide2.jpg";
// import slide3 from "../assets/images/slide3.jpg";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { GatsbyImage } from "gatsby-plugin-image";
import getImg from "../utils/getImg";

SwiperCore.use([Autoplay, EffectFade]);

const useStyles = makeStyles((theme) => ({
  imgBox: {
    width: "100%",
    height: "850px",
    "&>div":{
      height: "100%",
    },

    [theme.breakpoints.down("md")]: {
      height: "250px",
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
          <SwiperSlide key={index}>
            <Box className={classes.imgBox}>
              <GatsbyImage
                className={classes.houseListImg}
                image={item}
                alt="img"
              ></GatsbyImage>
            </Box>
          </SwiperSlide>
        );
      })
    : null;
  return (
    <Swiper
      slidesPerView={"1"}
      // grabCursor={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={true}
      loop={true}
      // centeredSlides={true}
      spaceBetween={20}
      effect={"fade"}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {listItems}
    </Swiper>
  );
};

export default OneImageAutoSlider;
