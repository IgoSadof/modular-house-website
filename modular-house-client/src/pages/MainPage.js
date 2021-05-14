import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainSlider from "../components/MainSlider";
import MainPageContent from "../components/MainPageContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
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
    <div className={classes.root} onWheel={(e) => handleScroll(e)}>
      <MainSlider scrol={scrol} />
      <MainPageContent />
    </div>
  );
};
export default MainPage;
