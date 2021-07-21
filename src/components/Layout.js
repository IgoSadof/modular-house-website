import React, { useState, useEffect } from "react";
// import { container, heading } from "./layout.module.css";

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
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      height: (param) => (param.page === "houseList" ? "100vh" : "100%"),
    },
  },

  Block: {
    position: "relative",
    width: "100%",
    padding: "100px 10% 100px 250px",
    backgroundColor: "#D1D1D1",
    overflow: "hidden",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      padding: "10%",
      paddingTop: "0",
    },
  },
  BlockFullscreen: {
    position: "relative",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#D1D1D1",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: (param) => (param.page === "houseList" ? "100%": null),
    },
  },
  button: {
    position: "absolute",
    top: "5%",
    right: "10%",
    width: "125px",
    height: "36px",
    zIndex: "2",
  },
}));

const Layout = ({ pageTitle, children, page }) => {
  const matches = {
    1920: useMediaQuery("(min-width:1920px)"),
    1200: useMediaQuery("(max-width:1200px)"),
  };
  const param = {page};
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
      <div className="conteiner">
        <div className="content">
          <main>
            <div className={classes.page}>
              <Box
                className={
                  page === "watch"|| page === "houseList" ? classes.BlockFullscreen : classes.Block
                }
              >
                {matches[1200] ? (
                  <Burger
                    click={handleOpenBurgerMenu}
                    position={page === "watch"|| page === "houseList" ? "absolute" : null}
                    color={page === "watch"|| page === "houseList" ? "white" : null}
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
                    <RegularButton
                      variant="outlined"
                      click={handleClickConnect}
                    >
                      СВЯЗАТЬСЯ
                    </RegularButton>
                  )}
                </Box>
                {children}
              </Box>
              <Footer />
            </div>
          </main>
        </div>
        <Menu />
      </div>
    </ThemeProvider>
  );
};
export default Layout;
