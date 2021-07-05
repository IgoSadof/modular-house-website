import "../../components/global.css";
import React, { useRef, useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import modularHouseTheme from "../../config/modularHouseTheme";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import SendForm from "../../components/SendForm";
import { houses } from "../../constant/houses";
import { Link } from "gatsby";
import RegularButton from "../../components/buttons/RegularButton";
import ModalsSlider from "../../components/ModalsSlider";
import Fade from "../../components/animations/Fade"
import HouseModelSlider from "../../components/HouseModelSlider";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { TransitionGroup, CSSTransition } from "react-transition-group";

const style = {
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};
const useStyles = makeStyles((theme) => ({
  page: { ...style.flexColumn, height: "100vh" },
  Block: {
    position: "relative",
    display: "flex",
    paddingLeft: "11%",
    backgroundColor: "#D1D1D1",
    overflow: "hidden",
    height: "100%",
  },
  button: {
    position: "absolute",
    top: "5%",
    right: "10%",
    zIndex: "2",
  },
  houseListBlock: {
    width: "11vw",
    borderRight: "1px solid",
  },
  houseList: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    padding: "0",
    justifyContent: "space-around",
    alignItems: "center",
    // gap: "40px",
  },
  houseListItem: {
    height: "19vh",
    position: "relative",
    cursor: "pointer",
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // border: "1px solid",
    // marginTop:'20px',
  },
  houseListNumber: {
    position: "absolute",
    zIndex: "0",
    top: "-7%",
    fontSize: param=>param.matches[1920]?"92px":"64px",
    margin: "auto",
    color: "white",
    transition:'2s'
  },
  houseListActiveNumber:{
    top: "20%",
    transition:'2s'

  },
  houseListImg: {
    position: "absolute",
    left: "10%",
    top: "20%",
    zIndex: "2",
    width: "80%",
  },
  houseListName: {
    position: "absolute",
    left: "10%",
    top: "70%",
  },
  houseDesc: {
    display: "flex",
    width: "42%",
    height: "100%",
  },
  houseDescContent: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "100%",
    height: "80%",
    padding: "0 60px",
    justifyContent: "space-between",
    // gap: "40px",
  },
  houseDescImgBox: {
    position: "relative",
    width: "100%",
    height: "28vh",
    // height: "350px",
  },
  houseDescImg: {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height:"100%",
    objectFit: "contain",
  },
  houseDescTitleBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  houseDescTitle: {
    fontSize: "48px",
    lineHeight: "52px",
    width: "200px",
  },
  houseDescIconBox: {
    width: "40px",
    height: "40px",
    // border: "1px solid",
  },
  mainPlan: {
    width: "100%",
    height: "100%",
  },
  houseDescText: {
    fontSize: "14px",
  },
  houseDescSpecBox: style.flex,
  houseDescSpec: style.flexColumn,
  houseDescSpecOne: style.flex,
  houseDescMore: style.flex,
  houseDescPrice: style.flexColumn,
  houseSpecPrice: {
    fontSize: "20px",
  },
  Link: {
    textDecoration: "none",
  },

  houseImg: {
    width: "47%",
  },
  mainImg: {
    width: "100%",
    objectFit: "cover",
    height: "100vh",
  },
}));

const WhatWeDo = () => {
  const matches = {
    1920: useMediaQuery("(min-width:1920px)"),
    1200: useMediaQuery("(max-width:1200px)"),
  };
  const [house, setHouse] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [animation, setAnimation] = useState(true);
  const param = {matches};
  const classes = useStyles(param);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClickConnect = () => {
    setIsFormOpen((state) => !state);
  };
  const handleItemclick = (index) => {
    setHouse((state) => index);
    // console.log(animation);
    setAnimation(state=>!state)
    // console.log(element.current.getBoundingClientRect());
    myRef.current.slickGoTo(index)
    // modelsRef.current.slickGoTo(index)
    setActiveSlide(index)
  };
  const element = useRef(null)
  const myRef = useRef(null);
  // const modelsRef = useRef(null);

  const listItem = houses.map((item, index) => {
    return (
      <li
        className={classes.houseListItem}
        key={item.id}
        onClick={() => handleItemclick(index)}
      >
        <Typography className={(activeSlide === index)? `${classes.houseListNumber} ${classes.houseListActiveNumber}`: classes.houseListNumber}>{`0${
          index + 1
        }`}</Typography>
        {!(activeSlide === index) ? (
          <>
            <CSSTransition
              key={item.id}
              in={true}
              appear={true}
              timeout={500}
              classNames="houseMove"
            >
              <img
                className={classes.houseListImg}
                src={item.img.list}
                alt="img"
              ></img>
            </CSSTransition>
            <Typography variant="subtitle1" className={classes.houseListName}>
              {item.name}
            </Typography>
          </>
        ) : null}
      </li>
    );
  });

  const listMainImages = houses.map(
    (item, index) => {
      return (
        <li className={classes.mainImg} key={index}>
           <img
                  className={classes.mainImg}
                  src={item.img.main}
                  alt="img"
                ></img>
        </li>
      );
    }
  );

  return (
    <ThemeProvider theme={modularHouseTheme}>
      <div className="conteiner">
        <div className="content">
          <div className={classes.page}>
            <Box className={classes.Block}>
              <SendForm isFormOpen={isFormOpen} click={handleClickConnect} />
              <Box className={classes.button}>
                <RegularButton variant="outlined" click={handleClickConnect}>
                  СВЯЗАТЬСЯ
                </RegularButton>
              </Box>
              <Box className={classes.houseListBlock}>
                {/* <ul className={classes.houseList}>{housesList}</ul> */}
                <ModalsSlider listItem={listItem} />
              </Box>
              <Box className={classes.houseDesc}>
                <Box className={classes.houseDescContent}>
                  <TransitionGroup className={classes.houseDescImgBox}>
                    <CSSTransition
                      in={animation}
                      key={activeSlide}
                      appear={true}
                      timeout={2000}
                      classNames="fadeHouse"
                    >
                    {/* <Fade inProp={animation}> */}
                      <img
                        ref={element}
                        className={classes.houseDescImg}
                        src={houses[house].img.desc}
                        alt="img"
                      ></img>
                      {/* </Fade> */}
                    </CSSTransition>
                  </TransitionGroup>

                  <Box className={classes.houseDescTitleBox}>
                    <Typography
                      variant="h1"
                      color="textSecondary"
                      className={classes.houseDescTitle}
                    >
                      {houses[house].name}
                    </Typography>
                    <Box className={classes.houseDescIconBox}>
                      <img
                        className={classes.mainPlan}
                        src={houses[house].img.plan}
                        alt="img"
                      ></img>
                    </Box>
                  </Box>

                  <Typography variant="body1" className={classes.houseDescText}>
                    {houses[house].desc}
                  </Typography>

                  <Box className={classes.houseDescSpecBox}>
                    <Box className={classes.houseDescSpec}>
                      <Box className={classes.houseDescSpecOne}>
                        <Typography
                          variant="body1"
                          className={classes.houseDescSpecName}
                        >
                          {houses[house].totalAreaText}
                        </Typography>
                        <Typography
                          variant="h6"
                          className={classes.houseSpecValue}
                        >
                          {houses[house].totalArea}
                        </Typography>
                      </Box>
                      <Box className={classes.houseDescSpecOne}>
                        <Typography
                          variant="body1"
                          className={classes.houseDescSpecName}
                        >
                          {houses[house].effectiveAreaText}
                        </Typography>
                        <Typography
                          variant="h6"
                          className={classes.houseSpecValue}
                        >
                          {houses[house].effectiveArea}
                        </Typography>
                      </Box>
                    </Box>

                    <Box className={classes.houseDescSpec}>
                      <Box className={classes.houseDescSpecOne}>
                        <Typography
                          variant="body1"
                          className={classes.houseDescSpecName}
                        >
                          Этажность:
                        </Typography>
                        <Typography
                          variant="h6"
                          className={classes.houseSpecValue}
                        >
                          {houses[house].totalArea}
                        </Typography>
                      </Box>
                      <Box className={classes.houseDescSpecOne}>
                        <Typography
                          variant="body1"
                          className={classes.houseDescSpecName}
                        >
                          Cтадии роста:
                        </Typography>
                        <Typography
                          variant="h6"
                          className={classes.houseSpecValue}
                        >
                          {houses[house].effectiveArea}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={classes.houseDescMore}>
                    <Box className={classes.houseDescPrice}>
                      <Typography
                        variant="body1"
                        className={classes.houseSpecValue}
                      >
                        Стоимость всех модулей:
                      </Typography>
                      <Typography
                        variant="h5"
                        className={classes.houseSpecPrice}
                      >
                        {houses[house].price}
                      </Typography>
                    </Box>
                    <Link className={classes.Link} to={houses[house].link}>
                      <RegularButton variant="outlined">
                        Подробнее
                      </RegularButton>
                    </Link>
                  </Box>
                </Box>
              </Box>

              <Box className={classes.houseImg}>
              <HouseModelSlider myRef={myRef} listItem={listMainImages} />
              </Box>
            </Box>
            <Footer />
          </div>
        </div>
        <Menu />
      </div>
    </ThemeProvider>
  );
};
export default WhatWeDo;
