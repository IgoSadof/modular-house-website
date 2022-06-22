import "swiper/css";
import React, { useState, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "gatsby";
import getHouses from "../../utils/getHouses";
// import { Swiper, SwiperSlide } from "swiper/react";
import numberWithSpace from '../../utils/numberWithSpace'
import getPublicPath from '../../utils/getPublicPath';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import SwiperCore, { Mousewheel, FreeMode } from "swiper";

// SwiperCore.use([Mousewheel, FreeMode]);

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    // display: "flex",
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
  slide: {
    width: "645px",
    height: "auto",
    paddingRight:'20px',
    "@media (min-width:1921px)": {
      width: "33.6vw",
      paddingRight:'1vw',
    },
    "@media (max-width:768px)": {
      width: "70vw",
    },
    "@media (max-width:600px)": {
      width: "90%",
      height: "auto",
    },
    "@media (max-width:400px)": {
      paddingRight:'10px',
    },
  },
  conteiner: {
    // border: "1px solid",
    marginRight: "20px",
    cursor: "pointer",
  },
  content: {
    display:"flex",
    flexDirection:"column",
    width: "645px",
    height: "100%",
    border: "1px solid",
    cursor: "pointer",
    marginLeft:'2px',
    transformStyle: 'preserve-3d',
    marginBottom:'2px',
    "@media (min-width:1921px)": {
      width: "33.6vw",
    },
    "@media (max-width:768px)": {
      width: "70vw",
    },
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  imgBox: {
    width: "100%",
    aspectRatio:'4/3',
    height:'24vw',
    minHeight:'520px',
    overflow: "hidden",
    "&:hover $img": {
      transform: "scale(1.1)",
    },
    "&:focus $img": {
      transform: "scale(1.1)",
    },
    "@media (max-width:1180px)": {
      minHeight:'420px',
    },
    "@media (max-width:600px)": {
      minHeight:'260px',
    },
  },
  img: {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    transition: "all .5s",
  },
  description: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "6%",
    // height:"17.6vw",
    // "@media (max-width: 1900px)":{
    //   padding: "20px",
    // },
    [theme.breakpoints.down("md")]: {
      padding: "15px",
      paddingBottom: "30px",
      height:"auto",
    },
  },
  name: {
    width: "60%",
    fontSize: "42px",
     "@media (min-width: 1921px)":{
      fontSize: "2.18vw",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
      width: "100%",
    },
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    fontSize: "42px",
    [theme.breakpoints.down("md")]: {
      flexDirection:'column',
      justifyContent: "center",
      alignItems:'flex-start',
    },
  },
  properties: {
    display: "flex",
    flexDirection: "column",
    width: "55%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  property: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    "& p":{
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  price: {
    minWidth: "130px",
    textAlign: "end",
    textTransform:"lowercase",
    [theme.breakpoints.down("md")]: {
      textAlign: "right",
      paddingRight: "10px",
      "@media (max-width:600px)": {
        textAlign: "left",
      },
    },
  },
  houseDescIconBox: {
    display: "flex",
    '& > * + * ':{
      marginLeft:'20px'
    },
    marginTop: "auto",
    marginLeft: "40px",
    alignItems: "end",
    "& p": {
      lineHeight: '1.4',
      display:'none',
    },
    "& img": { objectFit: "contain !important" },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      marginTop: "15px",
      marginLeft: "0",
      justifyContent: "space-between",
      objectFit: "contain",
    },
  },
  mainPlan: {
    width:'100%',
    marginTop: "auto",
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      objectFit: "contain",
      marginLeft: "auto",
    },
  },
  subtitle: {
    display: "flex",
    marginTop: "6%",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginTop: "15px",
    },
  },
  growStageIcon: {
    display: "flex",
    width: "auto",
    height: "64px",
    marginBottom:'6px',
    "@media (min-width:1921px)": {
      width: "3.5vw",
      height: "1.4vw",
      marginBottom:'0.6vw',
    },
  },
  propertyValue:{
    textTransform: 'none',
  },
}));
const MainPageHouseSlider = ({ mobile, houseRef, data }) => {
  const dataHouses = useMemo(() => getHouses(data), [data]);
  const [swipe, setSwipe] = useState(false);
  const param = { mobile };
  const classes = useStyles(param);
  const handleClick = (e) => {
    if (swipe) {
      e.preventDefault();
      setSwipe(false);
    }
  };

  const settings = {
    className: "slider variable-width",
    speed: 300,
    // dots: true,
    infinite: true,
    // slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    infinite: true,
    arrows: false,
    focusOnChange: true
  };

  const listItems = dataHouses
    ? dataHouses.map((item, index) => {
        return (
          <div className={classes.slide} key={index}>
            <Box className={classes.content}>
              <Link
                className={classes.link}
                to={`what-we-do/model${item.URL.toUpperCase()}`}
                onClick={handleClick}
                aria-label={`model ${item.URL}`}
              >
                <Box className={classes.imgBox}>
                  <img
                    className={classes.img}
                    src ={getPublicPath(data, `${item.baner}`)}
                    alt='house_img'
                  />
                </Box>
              </Link>

              <Box className={classes.description}>
                <Box className={classes.title}>
                  <Typography
                    variant="h1"
                    color="textSecondary"
                    className={classes.name}
                  >
                    {item.code}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="p"
                    className={classes.price}
                  >
                    от{" "}
                    ${" "}
                    {numberWithSpace(Math.round((item.takeFromBaseModule(item.modules, "price") ??
                      100000)))}
                    
                  </Typography>
                </Box>
                <Box className={classes.subtitle}>
                  <Box className={classes.properties}>
                    <Box className={classes.property}>
                      <Typography
                        variant="body1"
                        className={classes.propertyName}
                      >
                        {/* {item.totalAreaText} */}
                        Общая площадь:
                      </Typography>
                      <Typography
                        variant="h6"
                        component="p"
                        className={classes.propertyValue}
                      >
                        {item.countArea(item.modules, "square")} м&#178;
                      </Typography>
                    </Box>
                    <Box className={classes.property}>
                      <Typography
                        variant="body1"
                        className={classes.propertyName}
                      >
                        {/* {item.effectiveAreaText} */}
                        Эффективная площадь:
                      </Typography>
                      <Typography
                        variant="h6"
                        component="p"
                        className={classes.propertyValue}
                      >
                        {item.countArea(item.modules, "square_effective")} м&#178;
                      </Typography>
                    </Box>
                    <Box className={classes.property}>
                      <Typography
                        variant="body1"
                        className={classes.propertyName}
                      >
                        {/* {item.baseModuleAreaText} */}
                        Площадь базового дома:
                      </Typography>
                      <Typography
                        variant="h6"
                        component="p"
                        className={classes.propertyValue}
                      >
                        {/* {item.baseModuleArea} */}
                        {item.takeFromBaseModule(
                          item.modules,
                          "square_effective"
                        ) ?? 100}{" "}
                        м&#178;
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={classes.houseDescIconBox}>
                    <Typography
                      variant="body1"
                      className={classes.propertyValue}
                    >
                      Стадии роста:
                    </Typography>
        
                    <Box className={classes.growStageIcon}>
                      {/* <img
                        className={classes.mainPlan}
                        src={getPublicPath(
                          data,
                          `${item.stages}`
                        )}
                        alt="Grow stage"
                      /> */}
                      <img className={classes.mainPlan} src={getPublicPath(data,item.stages)} alt='stage'/>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </div>
        );
      })
    : null;

  return (
    // <Swiper
    //   slidesPerView={"auto"}
    //   grabCursor={true}
    //   loop={true}
    //   spaceBetween= "1.6%"
    // >
    //   {listItems}
    // </Swiper>
    <Slider onSwipe={() => setSwipe(true)}  {...settings}>{listItems}</Slider>
  );
};

export default MainPageHouseSlider;
