// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Slider from "react-slick";

// const useStyles = makeStyles((theme) => ({
//   list: {
//     position:'relative',
//     margin:'0',
//     width: "100%",
//     height: "50vh",
//     listStyle: "none",
//     padding: "0px",
//     [theme.breakpoints.down("md")]: {
//       height: "100%",
//     },
//   },
//   slickList:{
//     height:'90vh !important'
//   }
// }));
// const HouseFotosSlider = ({listItem,myRef}) => {
//   const classes = useStyles();
//   const settings = {
//     infinite: true,
//     arrows: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     swipeToSlide: true,
//     adaptiveHeight: true,
//   };
  
//   return (
//     <ul className={classes.list}>
//       <Slider ref={myRef} {...settings}>{listItem}</Slider>
//     </ul>
//   );
// };

// export default HouseFotosSlider;

import React from "react";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { Swiper } from "swiper/react";
import "swiper/css";
import SwiperCore, { Mousewheel, FreeMode } from "swiper";

SwiperCore.use([Mousewheel]);

const HouseFotosSlider = ({ listItem, houseRef}) => {
const breakpoints = useBreakpoint();
console.log(houseRef)

  return (
    <Swiper
      ref={houseRef}
      slidesPerView={'1'}
      grabCursor={true}
      loop={true}
      // freeMode={breakpoints.s ? true : false}
    >
      {listItem}
    </Swiper>
  );
};

export default HouseFotosSlider;