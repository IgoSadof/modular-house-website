import React, { useState, useMemo } from "react";
import { makeStyles} from "@material-ui/core/styles";
import MainSlider from "../components/MainSlider";
import MainPageContent from "../components/MainPageContent";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Box from "@material-ui/core/Box";
import getData from '../utils/getData';

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

const Main = ({data, lang}) => {
 const breakpoints = useBreakpoint();
  const [scroll, setScrol] = useState(0);
  // let firsEntry
  // if (typeof window !== "undefined" && !breakpoints.md) {
  //   firsEntry = window.localStorage.getItem("isFirstEntry") ? false : true;
  // }

  let mainPageDataObj = useMemo(
    () => ({'EN': getData(data.allMysqlMainPageEn?.nodes),'RU': getData(data.allMysqlMainPage.nodes)}),
    [data]
  );
  const mainPageData = lang === 'EN' && mainPageDataObj['EN'] ? mainPageDataObj['EN'] : mainPageDataObj['RU'];
  const [isFirstEntry, setIsFirstEntry] = useState(false);
  if(isFirstEntry && !breakpoints.md){
    document.body.style.overflow = "hidden"
  }else if (breakpoints.md){
    document.body.style.overflow = "overlay"
  } ;
  const param = { scroll, isFirstEntry };
  const classes = useStyles(param);
  const handleScroll = (e) => {
    if (scroll >= 4) {
      if(isFirstEntry){
        localStorage.setItem("isFirstEntry", false);
        setIsFirstEntry(false);
        document.body.style.overflowY = "overlay"
      } 
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
      onWheel={isFirstEntry? ((e) => handleScroll(e)):null}
    >
      <MainSlider scroll={scroll} isFirstEntry={isFirstEntry} data={data} mainPageData={mainPageData}/>
      <MainPageContent data={data} mainPageData={mainPageData} lang={lang}/>
    </Box>
  );
};
export default Main;
