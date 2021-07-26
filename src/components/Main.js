import React, { useState } from "react";
import { makeStyles} from "@material-ui/core/styles";
import MainSlider from "../components/MainSlider";
import MainPageContent from "../components/MainPageContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "0",
    height: "36px",
    marginLeft: "auto",
    border: "1px solid",
    
  },
  componets: {
    height: '100%',
    width: '100%',
  },
}));

const Main = () => {
  const matches = {
    1920: useMediaQuery("(min-width:1920px)"),
    1200: useMediaQuery("(max-width:1200px)"),
  };
  const [scroll, setScrol] = useState(0);
  const [isFirstEntry, setIsFirstEntry] = useState(false);
  // const [visability, setVisability] = useState(false);
  // if (!visability && typeof window !== "undefined" && !matches[1200]) {
  //   console.log(!!window.localStorage.getItem("isFirstEntry"))
  //   if(isFirstEntry && window.localStorage.getItem("isFirstEntry")) setIsFirstEntry(false);
  //   isFirstEntry? document.body.style.overflow = "hidden":document.body.style.overflow = "overlay";
  // }
  
  
  
  const param = { scroll, isFirstEntry, matches };
  const classes = useStyles(param);
  const handleScroll = (e) => {
    if (scroll >= 4) {
      localStorage.setItem("isFirstEntry", false);
      // if(isFirstEntry) setIsFirstEntry(false);
      // if(!visability) setVisability(true);
      // console.log('firstEntry = ', isFirstEntry)
      // if(isFirstEntry) document.body.style.overflow = "overlay"
    }
    if (e.nativeEvent.wheelDelta > 0) {
      scroll <= 0 ? setScrol(0) : setScrol((state) => state - 1);
    } else if (e.nativeEvent.wheelDelta < 0) {
      scroll > 4 ? setScrol(4) : setScrol((state) => state + 1);
    } else {
      setScrol((state) => state + 1);
    }
  };

  return (
    <Box
      component='main'
      className={classes.componets}
      onWheel={(e) => handleScroll(e)}
    >
      <MainSlider scroll={scroll} isFirstEntry={isFirstEntry} />
      <MainPageContent />
    </Box>
  );
};
export default Main;
