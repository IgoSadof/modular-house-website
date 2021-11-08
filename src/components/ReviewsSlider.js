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
const ReviewsSlider = ({myRef,reviews,getImg}) => {
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
    return <Slide key={index}  image={getImg(`${reviews[index][23].substr(reviews[index][23].search(/images\//g))}`)} />;
  });

  return (
    <div>
      <ul className={classes.list}>
        <Slider ref={myRef} {...settings}>{listItems}</Slider>
      </ul>
    </div>
  );
};

const Slide = ({ image,key }) => {
  const classes = useStyles();
  return (
    <li className={classes.conteiner} key={key}>
      <Box className={classes.imgBox}>
        <GatsbyImage className={classes.img} image={image} alt="img" />
      </Box>
    </li>
  );
};

export default ReviewsSlider;
