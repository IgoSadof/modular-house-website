import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import Box from "@material-ui/core/Box";
import { houses } from "../constant/houses";
import Typography from "@material-ui/core/Typography";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "125px",
    marginBottom: "100px",

  },
  list:{
    listStyle:"none",
    padding:"0",
    margin:"0",
  },
  conteiner:{
    border:"1px solid",
    marginRight:"20px",
  },
  imgBox:{
    width:"100%",
    height:"400px",
  },
  img:{
    width:"100%",
    height:"100%",
    objectFit: "cover",
  },
  description:{
    padding:"35px",
  },
  title:{
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center",
    width:"100%",
    fontSize:"48px",
  },
  name:{
    fontSize:"48px",
  },
  properties: {
    display: "flex",
    flexDirection:"column",
    
    width:"100%",
  },
  property: {
    display: "flex",
    justifyContent: "space-between",
    width:"265px"
  },
}));
const HouseSlider = () => {
  const classes = useStyles();
  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  const listItems = houses.map((item, index) => {
    return (
      <Slide
        key={index}
        img={item.img}
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
    <li className={classes.conteiner}>
        <Box className={classes.imgBox}>
          <img className={classes.img} src={img} alt="img" />
        </Box>
        <Box className={classes.description}>
          <Box className={classes.title}>
            <Typography className={classes.name}>{name}</Typography>
            <Typography className={classes.price}>{price}</Typography>
          </Box>
          <Box className={classes.subtitle}>
            <Box className={classes.properties}>
              <Box className={classes.property}>
                <Typography className={classes.propertyName}>
                  {totalAreaText}
                </Typography>
                <Typography className={classes.propertyValue}>
                  {totalArea}
                </Typography>
              </Box>
              <Box className={classes.property}>
                <Typography className={classes.propertyName}>
                  {effectiveAreaText}
                </Typography>
                <Typography className={classes.propertyValue}>
                  {effectiveArea}
                </Typography>
              </Box>
              <Box className={classes.property}>
                <Typography className={classes.propertyName}>
                  {baseModuleAreaText}
                </Typography>
                <Typography className={classes.propertyValue}>
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
