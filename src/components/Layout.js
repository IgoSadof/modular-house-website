import React, { useState } from "react";
import "./global.css";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Footer from "./Footer";
import Menu from "./Menu";
import modularHouseTheme from "../config/modularHouseTheme";
import Box from "@material-ui/core/Box";
import SendForm from "./SendForm";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Burger from "./Burger";
import BurgerMenu from "./BurgerMenu";
import RegularButton from "./buttons/RegularButton";

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: (param) =>
      param.page === "aboutUs" ||
      param.page === "main" ||
      param.page === "house"
        ? "100%"
        : "100vh",
    [theme.breakpoints.down("md")]: {
      height: (param) => (param.page === "houseList" ? "100vh" : "100%"),
    },
  },

  Block: {
    position: "relative",
    width: "100%",
    padding: (param) =>
      param.page === "main" ? "0 10% 100px 11%" : "14vh 10% 14vh 11%",
    // padding: "100px 10% 100px 11%",
    backgroundColor: "#D1D1D1",
    overflow: "hidden",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      padding: "0 10% !important",
      marginBottom: "40px",
    },
  },
  BlockFullscreen: {
    position: "relative",
    height:'100%',
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#D1D1D1",
    overflow: "hidden",
    padding: (param) => (param.page === "main" ? "0 10% 100px 11%" : null),
    [theme.breakpoints.down("md")]: {
      height: (param) => (param.page === "houseList" ? "100%" : null),
      padding: "0 !important",
      marginBottom: (param) =>
        param.page === "house" || param.page === "main" ? "40px" : null,
    },
  },
  button: {
    position: "absolute",
    top: (param) =>
      param.page === "aboutUs" ? null : param.page === "main" ? "1%" : "5%",
    right: "10%",
    zIndex: "2",
  },
}));

const Layout = ({ pageTitle, children, page }) => {
  const matches = {
    1920: useMediaQuery("(min-width:1920px)"),
    1200: useMediaQuery("(max-width:1200px)"),
  };
  const param = { page };
  const classes = useStyles(param);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const handleOpenBurgerMenu = () => {
    setIsBurgerMenuOpen((state) => !state);
  };
  const handleClickConnect = () => {
    setIsFormOpen((state) => !state);
  };
  return (
    <ThemeProvider theme={modularHouseTheme}>
      <title>{pageTitle}</title>
      <Box className="conteiner">
        <Menu />
        <Box className="content">
          <Box className={classes.page}>
            <Box
              className={
                page === "watch" ||
                page === "houseList" ||
                page === "main" ||
                page === "house"
                  ? classes.BlockFullscreen
                  : classes.Block
              }
            >
              {matches[1200] ? (
                <Burger
                  click={handleOpenBurgerMenu}
                  page={page}
                  position={
                    page === "watch" || page === "houseList" || page === "house"
                      ? "absolute"
                      : null
                  }
                  color={
                    page === "watch" || page === "houseList" || page === "house"
                      ? "white"
                      : null
                  }
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
                burgerClick={
                  matches[1200]
                    ? () => (handleOpenBurgerMenu(), handleClickConnect())
                    : null
                }
              />
              <Box className={classes.button}>
                {matches["1200"] ? null : (
                  <RegularButton variant="outlined" click={handleClickConnect}>
                    СВЯЗАТЬСЯ
                  </RegularButton>
                )}
              </Box>
              {children}
            </Box>
            <Footer />
          </Box>
        </Box>
      <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
      </Box>
    </ThemeProvider>
  );
};
export default Layout;
