import "../components/global.css";
import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import modularHouseTheme from "../config/modularHouseTheme";
import Contacrs from "../components/Contacts";
import Box from "@material-ui/core/Box";
import Burger from "../components/Burger";
import BurgerMenu from "../components/BurgerMenu";
import SendForm from "../components/SendForm";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },

  Block: {
    position: "relative",
    width: "100%",
    padding: "100px 10% 100px 250px",
    backgroundColor: "#D1D1D1",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      padding: "10%",
      paddingTop: "0",
    },
  },
}));

const ContactsPage = () => {
  const classes = useStyles();
  const matches = { 1200: useMediaQuery("(max-width:1200px)") };
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const handleOpenBurgerMenu = () => {
    setIsBurgerMenuOpen((state) => !state);
    console.log("openBurger");
  };
  const handleClickConnect = () => {
    setIsFormOpen((state) => !state);
  };

  return (
    <ThemeProvider theme={modularHouseTheme}>
      <div className="conteiner">
        <div className="content">
          <div className={classes.page}>
            <Box className={classes.Block}>
              {matches[1200] ? <Burger click={handleOpenBurgerMenu} /> : null}
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
                        handleOpenBurgerMenu(),
                        handleClickConnect()
                      )}
                    />
                  ) : null
                }
              />
              <Contacrs />
            </Box>
            <Footer />
          </div>
        </div>
        <Menu />
      </div>
    </ThemeProvider>
  );
};
export default ContactsPage;
