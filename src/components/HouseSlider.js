import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import Box from "@material-ui/core/Box";
import { houses } from "../constant/houses";
import Typography from "@material-ui/core/Typography";
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
    // border: "1px solid",
    marginRight: "20px",
    cursor: "pointer",
  },
  content: {
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
  name: {
    width: "50%",
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
    minWidth: "130px",
    [theme.breakpoints.down("md")]: {
      textAlign: 'right',
    },
  },
}));
const HouseSlider = ({ mobile, houseRef }) => {
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
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: mobile ? 1 : 2,
    // slidesToScroll: 1,
    adaptiveHeight: true,
  };
  const listItems = houses.map((item, index) => {
    return (
      <li className={classes.conteiner} key={index}>
        <Box className={classes.content}>
          <Link
            className={classes.link}
            to={`what-we-do/${item.link}`}
            onClick={handleClick}
          >
            <Box className={classes.imgBox}>
              <Box
                className={classes.img}
                style={{ backgroundImage: `url(${item.img.main})` }}
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
                {item.name}
              </Typography>
              <Typography variant="h5" className={classes.price}>
                {item.price}
              </Typography>
            </Box>
            <Box className={classes.subtitle}>
              <Box className={classes.properties}>
                <Box className={classes.property}>
                  <Typography variant="body1" className={classes.propertyName}>
                    {item.totalAreaText}
                  </Typography>
                  <Typography variant="h6" className={classes.propertyValue}>
                    {item.totalArea}
                  </Typography>
                </Box>
                <Box className={classes.property}>
                  <Typography variant="body1" className={classes.propertyName}>
                    {item.effectiveAreaText}
                  </Typography>
                  <Typography variant="h6" className={classes.propertyValue}>
                    {item.effectiveArea}
                  </Typography>
                </Box>
                <Box className={classes.property}>
                  <Typography variant="body1" className={classes.propertyName}>
                    {item.baseModuleAreaText}
                  </Typography>
                  <Typography variant="h6" className={classes.propertyValue}>
                    {item.baseModuleArea}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </li>
    );
  });

  return (
    <ul className={classes.list}>
      <Slider onSwipe={() => setSwipe(true)} ref={houseRef} {...settings}>
        {listItems}
      </Slider>
    </ul>
  );
};
export default HouseSlider;
