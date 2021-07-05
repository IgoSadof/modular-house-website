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
    height: "100%",
    listStyle: "none",
    padding: "0px",
  },
  item:{
    width:'20px',
    height:'20px',
    border:'1px solid'
  },
  slickList:{
    height:'90vh !important'
  }
}));
const HouseModelSlider = ({listItem,myRef}) => {
  const classes = useStyles();
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          {/* <img src={`${baseUrl}/abstract0${i + 1}.jpg`} /> */}
          <div className={classes.item}>i</div>
        </a>
      );
    },
    infinite: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    swipe:false,
    adaptiveHeight: true
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

export default HouseModelSlider;
