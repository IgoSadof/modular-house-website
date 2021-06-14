import "../components/global.css";
import styled from "styled-components"
import React, { useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import MainSlider from "../components/MainSlider";
import MainPageContent from "../components/MainPageContent";
// import Button from "@material-ui/core/Button";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import modularHouseTheme from "../config/modularHouseTheme";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "0",
    height: "36px",
    marginLeft: "auto",
    border: "1px solid",
  },
  componets: {
    position: (param) => (param.isFirstEntry ? "fixed !important" : "relative"),
    overflow: "hiden",
  },
}));

const MainPage = () => {
  const [scrol, setScrol] = useState(0);
  let firsEntry = true;
  if (typeof window !== "undefined") {
    firsEntry = window.localStorage.getItem("isFirstEntry")
      ? false
      : true;
  }
  const [isFirstEntry, setIsFirstEntry] = useState(firsEntry);
  const param = { scrol, isFirstEntry };
  const classes = useStyles(param);
  const handleScroll = (e) => {
    if (scrol >= 30) {
      localStorage.setItem("isFirstEntry", false);
      setIsFirstEntry(false);
    }
    // console.log(scrol)
    if (e.nativeEvent.wheelDelta > 0) {
      scrol <= 0 ? setScrol(0) : setScrol((state) => state - 1);
    } else if (e.nativeEvent.wheelDelta < 0) {
      scrol > 40 ? setScrol(40) : setScrol((state) => state + 1);
    } else {
      setScrol((state) => state + 1);
    }
  };

  return (
    <ThemeProvider theme={modularHouseTheme}>
      <div className="conteiner">
        <div className="content">
          <div
            className={`components ${classes.componets}`}
            onWheel={(e) => handleScroll(e)}
          >
            <MainSlider scrol={scrol} isFirstEntry={isFirstEntry} />
            <MainPageContent />
          </div>
          <Footer />
        </div>
        <Menu />
      </div>
    </ThemeProvider>
  );
};
export default MainPage;
