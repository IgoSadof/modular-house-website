import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import Box from "@material-ui/core/Box";
import { houses } from "../constant/houses";
import Typography from "@material-ui/core/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "gatsby";

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
    border: "1px solid",
    marginRight: "20px",
    cursor: "pointer",
  },
  imgBox: {
    width: "100%",
    height: "400px",
    overflow: "hidden",
    "&:hover $img": {
      transform: "scale(1.1)",
    },
    "&:focus $img": {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("md")]: {
      height: "250px",
    },
  },
  img: {
    width: "100%",
    height: "100%",
    // objectFit: "cover",
    transition: "1s",
    backgroundPosition: "center",
    backgroundSize: "cover",
    transition: "all .5s",
  },
  description: {
    padding: "35px",
    [theme.breakpoints.down("md")]: {
      padding: "15px",
    },
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    fontSize: "48px",
  },
  properties: {
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",

    width: "100%",
  },
  property: {
    display: "flex",
    justifyContent: "space-between",
    width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  price: {
    minWidth:'130px',
  },
}));
const HouseSlider = ({mobile}) => {
  console.log(mobile)
  const param = {mobile};
  // console.log(param)
  const classes = useStyles(param);
  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: mobile?1:2,
    slidesToScroll: 1,
  };
  const listItems = houses.map((item, index) => {
    return (
      <Slide
        key={index}
        link={item.link}
        img={item.img.main}
        name={item.name}
        price={item.price}
        totalArea={item.totalArea}
        effectiveArea={item.effectiveArea}
        baseModuleArea={item.baseModuleArea}
        totalAreaText={item.totalAreaText}
        effectiveAreaText={item.effectiveAreaText}
        baseModuleAreaText={item.baseModuleAreaText}
      />
    );
  });

  return (
    <ul className={classes.list}>
      <Slider {...settings}>{listItems}</Slider>
    </ul>
  );
};

const Slide = ({
  key,
  link,
  img,
  name,
  price,
  totalArea,
  effectiveArea,
  baseModuleArea,
  totalAreaText,
  effectiveAreaText,
  baseModuleAreaText,
}) => {
  const classes = useStyles();
  return (
    <li className={classes.conteiner} key={key}>
      <Link className={classes.link} to={`what-we-do/${link}`}>
        <Box className={classes.imgBox}>
          <Box
            className={classes.img}
            style={{ backgroundImage: `url(${img})` }}
          ></Box>
        </Box>
      </Link>

      <Box className={classes.description}>
        <Box className={classes.title}>
          <Typography
            variant="h1"
            color="textSecondary"
            className={classes.name}
          >
            {name}
          </Typography>
          <Typography variant="h5" className={classes.price}>
            {price}
          </Typography>
        </Box>
        <Box className={classes.subtitle}>
          <Box className={classes.properties}>
            <Box className={classes.property}>
              <Typography variant="body1" className={classes.propertyName}>
                {totalAreaText}
              </Typography>
              <Typography variant="h6" className={classes.propertyValue}>
                {totalArea}
              </Typography>
            </Box>
            <Box className={classes.property}>
              <Typography variant="body1" className={classes.propertyName}>
                {effectiveAreaText}
              </Typography>
              <Typography variant="h6" className={classes.propertyValue}>
                {effectiveArea}
              </Typography>
            </Box>
            <Box className={classes.property}>
              <Typography variant="body1" className={classes.propertyName}>
                {baseModuleAreaText}
              </Typography>
              <Typography variant="h6" className={classes.propertyValue}>
                {baseModuleArea}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </li>
  );
};

export default HouseSlider;
