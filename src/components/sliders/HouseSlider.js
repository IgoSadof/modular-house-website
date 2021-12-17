import React, { useState, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "gatsby";
import getHousesData from "../../utils/getHousesData";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";
import getImg from "../../utils/getImg";
import { GatsbyImage } from "gatsby-plugin-image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

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
    width: "645px ",
    height: "633px ",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      height: "auto",
    },
  },
  conteiner: {
    // border: "1px solid",
    marginRight: "20px",
    cursor: "pointer",
  },
  content: {
    width: "645px",
    height: "100%",
    border: "1px solid",
    cursor: "pointer",
  },
  imgBox: {
    width: "100%",
    height: "410px",
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
    backgroundPosition: "center",
    backgroundSize: "cover",
    transition: "all .5s",
  },
  description: {
    padding: "40px",

    // "@media (max-width: 1900px)":{
    //   padding: "20px",
    // },
    [theme.breakpoints.down("md")]: {
      padding: "15px",
      paddingBottom: "40px",
    },
  },
  name: {
    width: "60%",
    fontSize: "42px",
    [theme.breakpoints.down("md")]: {
      fontSize: "36px",
    },
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    fontSize: "42px",
  },
  properties: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  property: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
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
    },
  },
  houseDescIconBox: {
    display: "flex",
    marginTop: "auto",
    marginLeft: "40px",
    alignItems: "end",
    "& img": { objectFit: "contain !important" },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      marginTop: "25px",
      marginLeft: "0",
      justifyContent: "space-between",
      objectFit: "contain",
    },
  },
  mainPlan: {
    marginTop: "auto",
    marginLeft: "20px",
    marginBottom: "2px",
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      objectFit: "contain",
      marginLeft: "auto",
    },
  },
  subtitle: {
    display: "flex",
    marginTop: "40px",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginTop: "25px",
    },
  },
  growStageIcon: {
    display: "flex",
    width: "50px",
    height: "20px",
  },
}));
const HouseSlider = ({ mobile, houseRef, data }) => {
  const dataHouses = useMemo(() => getHousesData(data), [data]);
  const [swipe, setSwipe] = useState(false);
  const param = { mobile };
  const classes = useStyles(param);
  const handleClick = (e) => {
    if (swipe) {
      e.preventDefault();
      setSwipe(false);
    }
  };

  const listItems = dataHouses
    ? dataHouses.map((item, index) => {
        return (
          <SwiperSlide className={classes.slide} key={index}>
            <Box className={classes.content}>
              <Link
                className={classes.link}
                to={`what-we-do/model${item["URL"].toUpperCase()}`}
                onClick={handleClick}
                aria-label={`model ${item["URL"]}`}
              >
                <Box className={classes.imgBox}>
                  <BackgroundImage
                    className={classes.img}
                    Tag="div"
                    {...convertToBgImage(getImg(data, `${item["Баннер"]}`))}
                  ></BackgroundImage>
                </Box>
              </Link>

              <Box className={classes.description}>
                <Box className={classes.title}>
                  <Typography
                    variant="h1"
                    color="textSecondary"
                    className={classes.name}
                  >
                    {item.Код}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="p"
                    className={classes.price}
                  >
                    {/* {item.price} */}
                    от{" "}
                    {item.takeFromBaseModule(item.modules, "Стоимость") ??
                      100000}{" "}
                    $
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
                        {item.countArea(item.modules, "Площадь общая")} м<sup>2</sup>
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
                        {item.countArea(item.modules, "Площадь полезная")} м<sup>2</sup>
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
                          "Площадь общая"
                        ) ?? 100}{" "}
                        м<sup>2</sup>
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
                      <GatsbyImage
                        className={classes.mainPlan}
                        image={getImg(
                          data,
                          "images/mainTitleIcons/stages/stage3.png"
                        )}
                        alt="Grow stage"
                      ></GatsbyImage>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        );
      })
    : null;

  return (
    <Swiper
      slidesPerView={"auto"}
      grabCursor={true}
      loop={true}
      spaceBetween={20}
    >
      {listItems}
    </Swiper>
  );
};

export default HouseSlider;
