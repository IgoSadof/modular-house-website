import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
    height: "100%",
    listStyle: "none",
    padding: "10px",
  },
  slickList: {
    height: "90vh !important",
  },
}));
const ModalsSlider = ({ listItem, houseRef,mobile}) => {
  const classes = useStyles();
  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: mobile? 3:5,
    slidesToScroll: 1,
    vertical: mobile? false : true,
    swipeToSlide: true,
    // focusOnSelect: true,
  };
  const myRef = useRef(null);

  const next = () => {
    myRef.current.slickNext();
  };
  const previous = () => {
    myRef.current.slickPrev();
  };
  const handleScroll = (e) => {
    console.log("wheel");
    next();
  };

  return (
    <ul className={classes.list}>
      <Slider ref={houseRef} onClick={(e) => handleScroll(e)} {...settings}>
        {listItem}
      </Slider>
    </ul>
  );
};

export default ModalsSlider;
