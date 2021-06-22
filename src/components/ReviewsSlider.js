import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import Box from "@material-ui/core/Box";
import reviews from "../constant/reviews";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    height: "170px",
  },
  conteiner: {
    display: "flex",
    // border:"1px solid",
    // marginRight:"20px",
    height: "170px",
    // width:"170px",
    marginLeft: "20px",
    gap: "20px",
  },
  imgBox: {
    width: "100%",
    height: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));
const ReviewsSlider = ({myRef}) => {
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
  // const myref = useRef(null);

  // const next = () => {
  //   myref.current.slickNext();
  // }
  // const previous = () => {
  //   myref.current.slickPrev();
  // }
  const listItems = reviews.map((item, index) => {
    return <Slide key={index} img={item.img} />;
  });

  return (
    <div>
      <ul className={classes.list}>
        <Slider ref={myRef} {...settings}>{listItems}</Slider>
      </ul>
      {/* <button className="button" onClick={()=>previous()}>
        Previous
      </button>
      <button className="button" onClick={()=>next()}>
        Next
      </button> */}
    </div>
  );
};

const Slide = ({ img,key }) => {
  const classes = useStyles();
  return (
    <li className={classes.conteiner} key={key}>
      <Box className={classes.imgBox}>
        <img className={classes.img} src={img} alt="img" />
      </Box>
    </li>
  );
};

export default ReviewsSlider;
