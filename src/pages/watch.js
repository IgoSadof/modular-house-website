import React, { useEffect, useRef, useState } from "react";
import { makeStyles,ThemeProvider } from "@material-ui/core/styles";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import modularHouseTheme from "../config/modularHouseTheme";

const useStyles = makeStyles((theme) => ({
  root2: {
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    backgroundColor: "#E5E5E5",
    padding: "0px 10% 100px 160px",
    overflow: "hidden",
  },
  root: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
    height: "100%",
    // overflow: "hidden",
  },
  main: {
    width: "100%",
  },
  button: {
    borderRadius: "0",
    height: "36px",
    marginLeft: "auto",
    border: "1px solid",
  },
}));

const MainPage = () => {
  const classes = useStyles();
  const [scrol, setScrol] = useState(0);
  const handleScroll = (e) => {
    if (e.nativeEvent.wheelDelta > 0) {
      scrol <= 0 ? setScrol(0) : setScrol((state) => state - 1);
    } else {
      setScrol((state) => state + 1);
    }
  };

  return (
    <ThemeProvider theme={modularHouseTheme}>
      <div className={classes.root}>
        <div className={classes.main}>
          <div className={classes.root2} onWheel={(e) => handleScroll(e)}>
           
          </div>
          <Footer />
        </div>
        <Menu />
      </div>
    </ThemeProvider>
  );
};
export default MainPage;
