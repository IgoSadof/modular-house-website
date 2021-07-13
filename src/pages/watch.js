import "../components/global.css";
import React, { useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import modularHouseTheme from "../config/modularHouseTheme";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SendForm from "../components/SendForm";
import Panel from "../components/Panel";
import Form from "../components/Form";
import MyCalendar from "../components/MyCalendar";
import RegularButton from "../components/buttons/RegularButton";
import { houses } from "../constant/houses";
import HouseFotosSlider from "../components/HouseFotosSlider";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Burger from "../components/Burger";
import BurgerMenu from "../components/BurgerMenu";

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
  },
  BlockFullscreen: {
    position: "relative",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#D1D1D1",
    overflow: "hidden",
  },
  button: {
    position: "absolute",
    top: "5%",
    right: "10%",
    width: "125px",
    height: "36px",
    zIndex: "2",
  },
  imageSlider: {
    // height: "50vh",
    position: "relative",
  },
  excursion: {
    display: "flex",
    justifyContent: "space-between",
    height: "50vh",
    padding: "8vh 10% 8vh 18%",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 10%",
      height: "auto",
      gap: "30px",
    },
  },
  excursionText: {
    width: "90%",
    marginRight: "auto",
  },

  excursionSend: {
    position: "relative",
    width: "60%",
    display: "flex",
    gap: "30%",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      gap: "30px",
      order: "2",
    },
  },
  formBox: {
    marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  calendar: {
    width: "260px",
    height: "240px",
    marginTop: "auto",
    marginBottom: "auto",
    [theme.breakpoints.up("xl")]: {
      width: "18vw",
      height: "fit-content",
    },
    [theme.breakpoints.down("md")]: {
      order: "1",
    },
  },
  mainImg: {
    position: "relative",
    width: "100%",
    height: "50vh",
    objectFit: "cover",
    objectPosition: "bottom",
  },
}));

const WhatWeDo = () => {
  const matches = {
    1920: useMediaQuery("(min-width:1920px)"),
    1200: useMediaQuery("(max-width:1200px)"),
  };
  // console.log(matches);
  const [category, setCategory] = React.useState("все");
  const param = {};
  const classes = useStyles(param);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const handleOpenBurgerMenu = () => {
    setIsBurgerMenuOpen((state) => !state);
    console.log("openBurger");
  };

  const handleChangePanel = (value) => {
    setCategory(value);
  };

  const handleClickConnect = () => {
    setIsFormOpen((state) => !state);
  };
  const categoryRef = React.createRef();
  const listItem = houses[0].img.fotosCategory[category].map((item, index) => {
    return (
      <li key={index}>
        <img className={classes.mainImg} src={item} alt="img"></img>
      </li>
    );
  });

  return (
    <ThemeProvider theme={modularHouseTheme}>
      <div className="conteiner">
        <div className="content">
          <div className={classes.page}>
            <Box className={classes.BlockFullscreen}>
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
              <Box className={classes.imageSlider}>
                <HouseFotosSlider listItem={listItem} />
                {matches[1200] ? null : (
                  <Panel ref={categoryRef} change={handleChangePanel} />
                )}
              </Box>
              <Box className={classes.excursion}>
                {matches[1200] ? (
                  <Typography
                    className={classes.excursionText}
                    variant="subtitle1"
                  >
                    Оставьте заявку и наш менеджер свяжеться с вами
                  </Typography>
                ) : null}
                <Box className={classes.excursionSend}>
                  {matches[1200] ? null : (
                    <Typography variant="subtitle1">На экскурсию</Typography>
                  )}
                  <Box className={classes.formBox}>
                    {!matches[1200] ? (
                      <Form
                        title="Оставьте заявку и наш менеджер свяжеться с вами"
                        buttonAbs={true}
                      />
                    ) : (
                      <Form />
                    )}
                  </Box>
                </Box>

                <Box className={classes.calendar}>
                  <MyCalendar />
                </Box>
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
