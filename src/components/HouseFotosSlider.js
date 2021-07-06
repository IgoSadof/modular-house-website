import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  list: {
    position:'relative',
    margin:'0',
    width: "100%",
    height: "50vh",
    listStyle: "none",
    padding: "0px",
    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
  },
  slickList:{
    height:'90vh !important'
  }
}));
const HouseFotosSlider = ({listItem,myRef}) => {
  const classes = useStyles();
  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  const next = () => {
    myRef.current.slickNext();
  }
  const previous = () => {
    myRef.current.slickPrev();
  }
  const handleScroll = (e) => {
    console.log('wheel')
    next()
  };
  
  return (
    <ul className={classes.list}>
      <Slider ref={myRef} {...settings}>{listItem}</Slider>
    </ul>
  );
};

export default HouseFotosSlider;
