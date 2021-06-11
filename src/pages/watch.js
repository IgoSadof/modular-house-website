import "../styles/global.css";
import React, { useState } from "react";
import {ThemeProvider } from "@material-ui/core/styles";
// import { makeStyles } from "@material-ui/core/styles";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import modularHouseTheme from "../config/modularHouseTheme";

// const useStyles = makeStyles((theme) => ({
//   button: {
//     borderRadius: "0",
//     height: "36px",
//     marginLeft: "auto",
//     border: "1px solid",
//   },
// }));

const MainPage = () => {
  // const classes = useStyles();
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
           
          </div>
          <Footer />
        </div>
        <Menu />
      </div>
    </ThemeProvider>
  );
};
export default MainPage;
