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
import HouseModelSlider from "../../components/HouseModelSlider";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import Burger from "../../components/Burger";
import BurgerMenu from "../../components/BurgerMenu";
import { ScatterPlot } from "@material-ui/icons";

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
  page: {
    ...style.flexColumn,
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      height: "100vh",
    },
  },
  Block: {
    position: "relative",
    display: "flex",
    paddingLeft: "11%",
    backgroundColor: "#D1D1D1",
    overflow: "hidden",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      padding: "0%",
    },
  },
  button: {
    position: "absolute",
    top: "5%",
    right: "10%",
    zIndex: "2",
    transition: "0.5s",
    [theme.breakpoints.down("md")]: {
      transform: "scale(0.7)",
      top: "55%",
      right: "0",
      opacity: "1",
    },
  },
  houseListBlock: {
    width: "11vw",
    borderRight: "1px solid",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      borderRight: "none",
      padding: "0",
    },
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
    [theme.breakpoints.down("md")]: {
      transform: "scale(0.7)",
      top: "20px",
    },
  },
  houseListItemActive: {
    [theme.breakpoints.down("md")]: {
      transform: "scale(1.2)",
    },
  },
  houseListNumber: {
    position: "absolute",
    zIndex: "0",
    top: "-7%",
    fontSize: (param) => (param.matches[1920] ? "92px" : "64px"),
    margin: "auto",
    color: "white",
    transition: "1s",
  },
  houseListActiveNumber: {
    top: "20%",
    transition: "1s",
    [theme.breakpoints.down("md")]: {
      opacity: "0",
    },
  },
  houseListImg: {
    position: "absolute",
    left: "10%",
    top: "20%",
    zIndex: "2",
    width: "80%",
    transition: "0.5s",
  },
  houseListImgActive: {
    top: "0%",
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
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "4% 10%",
    },
  },
  houseDescContent: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "100%",
    height: "80%",
    padding: "0 60px",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      padding: "0",
      order: "2",
    },

    // gap: "40px",
  },
  houseDescImgBox: {
    position: "relative",
    width: "100%",
    height: "28vh",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    // height: "350px",
  },
  houseDescImg: {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  houseDescTitleBox: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      top: "-190%",
      zIndex: "1",
    },
  },
  houseDescTitle: {
    fontSize: "48px",
    lineHeight: "52px",
    width: "200px",
    [theme.breakpoints.down("md")]: {
      color: "#F2F2F2",
      fontSize: "44px",
    },
  },
  houseDescIconBox: {
    width: "40px",
    height: "40px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "100px",
      objectFit: "contain",
      height: "85px",
    },
  },
  mainPlan: {
    width: "40px",
    height: "40px",
    [theme.breakpoints.down("md")]: {
      objectFit: "contain",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  houseDescText: {
    fontSize: "14px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  houseDescSpecBox: {
    ...style.flex,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "normal",
    },
  },
  houseDescSpec: style.flexColumn,
  houseDescSpecOne: style.flex,
  houseDescMore: style.flex,
  houseDescPrice: style.flexColumn,
  houseSpecPrice: {
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      color: "white",
    },
  },
  Link: {
    textDecoration: "none",
  },

  houseImg: {
    width: "47%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  mainImg: {
    width: "100%",
    objectFit: "cover",
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      padding: "0",
      height: "50vh",
    },
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
  const param = { matches };
  const classes = useStyles(param);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const handleOpenBurgerMenu = () => {
    setIsBurgerMenuOpen((state) => !state);
    console.log("openBurger");
  };

  const handleClickConnect = () => {
    setIsFormOpen((state) => !state);
  };
  const handleItemclick = (index) => {
    setHouse((state) => index);
    // console.log(animation);
    setAnimation((state) => !state);
    // console.log(element.current.getBoundingClientRect());
    myRef.current.slickGoTo(index);
    // modelsRef.current.slickGoTo(index)
    setActiveSlide(index);
  };
  const element = useRef(null);
  const myRef = useRef(null);
  // const modelsRef = useRef(null);

  const listItem = houses.map((item, index) => {
    return (
      <li
        className={
          activeSlide === index
            ? `${classes.houseListItem} ${classes.houseListItemActive}`
            : classes.houseListItem
        }
        key={item.id}
        onClick={() => handleItemclick(index)}
      >
        <Typography
          className={
            activeSlide === index
              ? `${classes.houseListNumber} ${classes.houseListActiveNumber}`
              : classes.houseListNumber
          }
        >{`0${index + 1}`}</Typography>
        {!matches[1200] ? (
          !(activeSlide === index) ? (
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
          ) : null
        ) : (
          <>
            <CSSTransition
              key={item.id}
              in={true}
              appear={true}
              timeout={500}
              classNames="houseMove"
            >
              <img
                className={
                  activeSlide === index
                    ? `${classes.houseListImg} ${classes.houseListImgActive}`
                    : classes.houseListImg
                }
                src={item.img.list}
                alt="img"
              ></img>
            </CSSTransition>
            {activeSlide === index ? (
              <Box className={classes.button}>
                <Link className={classes.Link} to={houses[house].link}>
                  <RegularButton variant="outlined">Подробнее</RegularButton>
                </Link>
              </Box>
            ) : null}

            {!(activeSlide === index) ? (
              <Typography variant="subtitle1" className={classes.houseListName}>
                {item.name}
              </Typography>
            ) : null}
          </>
        )}
      </li>
    );
  });

  const listMainImages = houses.map((item, index) => {
    return (
      <li className={classes.mainImg} key={index}>
        <img className={classes.mainImg} src={item.img.main} alt="img"></img>
      </li>
    );
  });
  const houseSliderRef = useRef(null);

  const handleScrol = (e) => {
    if (e.nativeEvent.wheelDelta > 0) {
      houseSliderRef.current.slickNext();
    } else {
      houseSliderRef.current.slickPrev();
    }
  };
  const scrollOff = (e) => {
    document.body.style.overflow = "hidden";
  };
  const scrollOn = (e) => {
    document.body.style.overflow = "inherit";
  };

  return (
    <ThemeProvider theme={modularHouseTheme}>
      <div className="conteiner">
        <div className="content">
          <div className={classes.page}>
            <Box className={classes.Block}>
              {matches[1200] ? (
                <Burger
                  color="white"
                  position="absolute"
                  click={handleOpenBurgerMenu}
                />
              ) : null}
              <BurgerMenu
                isBurgerMenuOpen={isBurgerMenuOpen}
                click={handleOpenBurgerMenu}
                clickToOpenForm={handleClickConnect}
              />
              <SendForm
                isFormOpen={isFormOpen}
                click={handleClickConnect}
                burger={
                  matches[1200] ? (
                    <Burger
                      isOpen={true}
                      click={() => (
                        handleOpenBurgerMenu(), handleClickConnect()
                      )}
                    />
                  ) : null
                }
              />
              <Box className={classes.button}>
                {matches["1200"] ? null : (
                  <RegularButton variant="outlined" click={handleClickConnect}>
                    СВЯЗАТЬСЯ
                  </RegularButton>
                )}
              </Box>
              <Box
                className={classes.houseListBlock}
                onWheel={handleScrol}
                onMouseOver={scrollOff}
                onMouseOut={scrollOn}
                onClick={scrollOn}
              >
                {/* <ul className={classes.houseList}>{housesList}</ul> */}

                <ModalsSlider
                  houseRef={houseSliderRef}
                  listItem={listItem}
                  mobile={matches[1200] ? true : null}
                />
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
                      {matches[1200] ? (
                        <Typography
                          variant="h5"
                          className={classes.houseSpecPrice}
                        >
                          {houses[house].price}
                        </Typography>
                      ) : null}
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
                    {matches[1200] ? null : (
                      <>
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
                      </>
                    )}
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
