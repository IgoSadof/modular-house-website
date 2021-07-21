import React, { useState } from "react";
import { makeStyles} from "@material-ui/core/styles";
import MainSlider from "../components/MainSlider";
import MainPageContent from "../components/MainPageContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "0",
    height: "36px",
    marginLeft: "auto",
    border: "1px solid",
  },
  componets: {
    position: (param) =>
      param.isFirstEntry
        ? !param.matches[1200]
          ? "fixed !important"
          : "relative"
        : "relative",
  },
}));

const Main = () => {
  const matches = {
    1920: useMediaQuery("(min-width:1920px)"),
    1200: useMediaQuery("(max-width:1200px)"),
  };
  const [scrol, setScrol] = useState(0);
  let firstEntry = true;
  if (typeof window !== "undefined") {
    firstEntry = window.localStorage.getItem("isFirstEntry") ? false : true;
  }
  const [isFirstEntry, setIsFirstEntry] = useState(firstEntry);
  const param = { scrol, isFirstEntry, matches };
  const classes = useStyles(param);
  const handleScroll = (e) => {
    if (scrol >= 4) {
      localStorage.setItem("isFirstEntry", false);
      setIsFirstEntry(false);
    }
    if (e.nativeEvent.wheelDelta > 0) {
      scrol <= 0 ? setScrol(0) : setScrol((state) => state - 1);
    } else if (e.nativeEvent.wheelDelta < 0) {
      scrol > 4 ? setScrol(4) : setScrol((state) => state + 1);
    } else {
      setScrol((state) => state + 1);
    }
  };

  return (
    <div
      className={classes.componets}
      onWheel={(e) => handleScroll(e)}
    >
      <MainSlider scrol={scrol} isFirstEntry={isFirstEntry} />
      <MainPageContent />
    </div>
  );
};
export default Main;
