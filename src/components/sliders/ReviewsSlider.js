import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import Box from "@material-ui/core/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "125px",
    marginBottom: "100px",
  },
  list: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  conteiner: {
    display: "flex",
    marginLeft: "20px",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      // marginLeft: "0",
    },
  },
  imgBox: {
    width: "176px",
    height: "176px",
    "@media (min-width:1921px)": {
      width: "12.2vw",
      height: "12.2vw",
    },
    [theme.breakpoints.down("md")]: {

    },
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity:'0.5',
  },
}));
const ReviewsSlider = ({myRef,reviews,getImg,data}) => {
  const classes = useStyles();
  const settings = {
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: false,
    swipe:false,
  };
  const listItems = reviews.map((item, index) => {
    return <Slide key={index}  image={getImg(data,`${reviews[index].foto.substr(reviews[index].foto.search(/images\//g))}`)} />;
  });

  return (
    <div>
      <div className={classes.list}>
        <Slider ref={myRef} {...settings}>{listItems}</Slider>
      </div>
    </div>
  );
};

const Slide = ({ image,key }) => {
  const classes = useStyles();
  return (
    <div className={classes.conteiner} key={key}>
      <Box className={classes.imgBox}>
        <GatsbyImage className={classes.img} image={image} alt="img" />
      </Box>
    </div>
  );
};

export default ReviewsSlider;
