import "../styles/global.css";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import modularHouseTheme from "../config/modularHouseTheme";
import Contacrs from "../components/Contacts";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
  },
  Block: {
    width:"100%",
    padding:"100px 10% 100px 250px",
    backgroundColor:'#D1D1D1',
    height: '100%',
  },
}));

const ContactsPage = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={modularHouseTheme}>
      <div className="conteiner">
        <div className="content">
          <div className={classes.page}>
            <Box className={classes.Block}>
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
