import "../styles/global.css";
import React, { useEffect, useRef, useState } from "react";
import { makeStyles,ThemeProvider } from "@material-ui/core/styles";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import modularHouseTheme from "../config/modularHouseTheme";
import FormBlock from "../components/FormBlock";

const useStyles = makeStyles((theme) => ({
  button: {
  
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
      <div className="conteiner">
        <div className="content">
          <div className="components" onWheel={(e) => handleScroll(e)}>
              <FormBlock/>
           
          </div>
          <Footer />
        </div>
        <Menu />
      </div>
    </ThemeProvider>
  );
};
export default MainPage;
