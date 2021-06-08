import "../styles/global.css";
import React, { useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import modularHouseTheme from "../config/modularHouseTheme";
import FormBlock from "../components/FormBlock";
import what_we_do_img1 from "../assets/images/w-we-do-img1.png";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Translate } from "@material-ui/icons";
import SendForm from "../components/SendForm";
import MySlider from "../components/Slider"

const useStyles = makeStyles((theme) => ({
  Block: {
    position:"relative",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#e5e5e5",
    overflow: "hidden",
    height:"100vh"
  },

  button: {
    position: "absolute",
    top: "5%",
    right: "10%",
    background:
      "radial-gradient(100% 100% at 0% 0%, #D1D1D1 0%, rgba(209, 209, 209, 0.12) 100%)",
    width: "125px",
    height: "36px",
  },
  mainImg: {
    width: "100%",
    height: "720px",
    objectFit: "cover",
  },
  secondImg:{
    width: "100%",
    height: "820px",
    objectFit: "cover",

  },
  mainDescBox: {
    width: "100%",
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    padding: "50px 300px",
  },
  mainBlockSubtitleBox: {
    display: "flex",
    gap: "100px",
  },
  mainBlockTitle: {
    fontSize: "48px",
    fontWeight: "600",
    lineHeight: "50px",
    textAlign: "left",
    width: "300px",
  },
  mainBlockList: {
    listStyle: "none",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    aligneItems: "center",
    justifyContent: "space-between",
  },
  mainBlockItem: {
    fontSize: "12px",
    fontWeight: "400",
  },
  modelBlock: {
    display: "flex",
    gap: "100px",
    padding: "100px 200px",
    backgroundColor: "#e5e5e5",
  },
  modelDesc: {
    position: "relative",
    width: "450px",
    display: "flex",
    gap: "40px",
  },
  modelDescFirstColumn: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "70px",
    justifyContent: "space-between",
  },
  modelDescSecondColumn: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "70px",
    justifyContent: "space-between",
  },
  modelDescItemTitle: {
    // width: "100px",
    // paddingRight:"40px",
  },
  modelNumber: {
    fontSize: "48px",
    fontWeight: "600",
  },
  modelSubtitle: {
    // borderLeft:"1px solid",
    fontSize: "12px",
  },
  model: {
    border: "1px solid",
    width: "100%",
  },
  modelDescLine: {
    left: "28%",
    width: "1px",
    height: "100%",
    backgroundColor: "black",
    "&::before": {
      // transformOrigin: "100% 50%",
      transform: "translate(-50%, 165px)",
      // position: "absolute",
      content: `'+'`,
      width: "40px",
      height: "40px",
      border: "1px solid",
      borderRadius: "50%",
      fontSize: "30px",
      backgroundColor: "#e5e5e5",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  // modelDescCircle:{
  //   position:"absolute",
  //   width:"50px",
  //   left:"21%",
  //   height:"50px",
  //   border:"1px solid",
  //   borderRadius:"50%",
  //   backgroundColor:""
  // }
}));

const MainPage = () => {
  const [lineLength, setLineLength] = useState(265);
  const param = { lineLength };
  const classes = useStyles(param);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleClickConnect = () => {
    setIsFormOpen((state) => !state);
  };

  const handleCircleClick = (e) => {
    // setLineLength((state) => (state ===);
  };

  return (
    <ThemeProvider theme={modularHouseTheme}>
      <div className="conteiner">
        <div className="content">
          {/* <div className="components" onWheel={(e) => handleScroll(e)}> */}
          {/* <FormBlock/> */}
          <Box className={` ${classes.Block} ${classes.mainBlock}`}>
            <SendForm isFormOpen={isFormOpen} click={handleClickConnect} />
            <Button
              className={classes.button}
              variant="outlined"
              onClick={handleClickConnect}
            >
              СВЯЗАТЬСЯ
            </Button>
            <Box className={classes.mainImg}>
              <img className={classes.mainImg} src={what_we_do_img1}></img>
            </Box>
            <Box className={classes.mainDescBox}>
              <Box className={classes.mainBlockTitleBox}>
                <Typography className={classes.mainBlockTitle}>
                  SQUARE HOUSE
                </Typography>
              </Box>
              <Box className={classes.mainBlockSubtitleBox}>
                {/* <Box className={classes.mainBlockList}> */}
                <ul className={classes.mainBlockList}>
                  <li className={classes.mainBlockItem}>01 Модуль</li>
                  <li className={classes.mainBlockItem}>02 Модуль</li>
                  <li className={classes.mainBlockItem}>03 Модуль</li>
                </ul>
                {/* </Box> */}
                {/* <Box className={classes.mainBlockList}> */}
                <ul className={classes.mainBlockList}>
                  <li className={classes.mainBlockItem}>Базовый модуль</li>
                  <li className={classes.mainBlockItem}>Жилой модуль</li>
                  <li className={classes.mainBlockItem}>Гараж</li>
                </ul>
                {/* </Box> */}
                {/* <Box className={classes.mainBlockList}> */}
                <ul className={classes.mainBlockList}>
                  <li className={classes.mainBlockItem}>
                    <strong>$25 000 / 45 дней</strong>
                  </li>
                  <li className={classes.mainBlockItem}>
                    <strong>$68 000 / 20 дней</strong>
                  </li>
                  <li className={classes.mainBlockItem}>
                    <strong>$45 000 / 20 дней</strong>
                  </li>
                </ul>
                {/* </Box> */}
              </Box>
            </Box>
          </Box>

          <Box className={classes.modelBlock}>
            <Box className={classes.modelDesc}>
              <Box className={classes.modelDescFirstColumn}>
                <Box className={classes.modelDescItemTitle}>
                  <Typography className={classes.modelNumber}>01</Typography>
                  <Typography className={classes.modelHeader}>
                    Базавый
                  </Typography>
                  <Typography className={classes.modelSquare}>
                    170 м2
                  </Typography>
                </Box>
                <Box className={classes.modelDescItemTitle}>
                  <Typography className={classes.modelNumber}>02</Typography>
                  <Typography className={classes.modelHeader}>Жилой</Typography>
                  <Typography className={classes.modelSquare}>
                    170 м2
                  </Typography>
                </Box>
                <Box className={classes.modelDescItemTitle}>
                  <Typography className={classes.modelNumber}>03</Typography>
                  <Typography className={classes.modelHeader}>Гараж</Typography>
                  <Typography className={classes.modelSquare}>
                    170 м2
                  </Typography>
                </Box>
              </Box>

              {/* <span className={classes.modelDescLine}></span> */}
              <MySlider/>

              <Box className={classes.modelDescSecondColumn}>
                <Typography className={classes.modelSubtitle}>
                  Развитие дома происходит по горизонтали в двух направлениях. К
                  базовому модулю могут быть пристроены навес для автомобиля в
                  одном направлении.
                </Typography>
                <Typography
                  className={`${classes.modelSubtitle} ${classes.modelSubtitleMiddle}`}
                >
                  Развитие дома происходит по горизонтали в двух направлениях. К
                  базовому модулю могут быть пристроены навес для автомобиля в
                  одном направлении.
                </Typography>
                <Typography className={classes.modelSubtitle}>
                  Развитие дома происходит по горизонтали в двух направлениях. К
                  базовому модулю могут быть пристроены навес для автомобиля в
                  одном направлении.
                </Typography>
              </Box>
            </Box>
            <Box className={classes.model}></Box>
          </Box>

          <Box className={`${classes.Block} ${classes.blockGalary}`}>
            <Box className={classes.secondImg}>
              <img className={classes.mainImg} src={what_we_do_img1}></img>
            </Box>
          </Box>

          <Footer />
        </div>
        <Menu />
      </div>
    </ThemeProvider>
  );
};
export default MainPage;
