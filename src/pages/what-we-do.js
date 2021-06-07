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

const useStyles = makeStyles((theme) => ({
  mainBlock: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },
  mainImg: {
    width: "100%",
  },
  mainDescBox: {
    width: "100%",
    display: "flex",
    gap: "40px",
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
    padding:"100px 200px"
  },
  modelDesc:{
    width:"300px",
    display:"flex",
    flexDirection:"column",
    // gap:"70px",
  },
  modelDescItem:{
    display:"flex",
  },
  model:{
    border: '1px solid',
    width: '100%',
  }
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
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleClickConnect = () => {
    setIsFormOpen((state) => !state);
  };

  return (
    <ThemeProvider theme={modularHouseTheme}>
      <div className="conteiner">
        <div className="content">
          <Button
            className={classes.button}
            variant="outlined"
            onClick={handleClickConnect}
          >
            СВЯЗАТЬСЯ
          </Button>
          {/* <div className="components" onWheel={(e) => handleScroll(e)}> */}
          {/* <FormBlock/> */}
          <Box className={classes.mainBlock}>
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
              <Box className={classes.modelDescItem}>
                <Box className={classes.modelDescItemTitle}>
                  <Typography className={classes.modelNumber}>01</Typography>
                  <Typography className={classes.modelHeader}>
                    Базовый
                  </Typography>
                  <Typography className={classes.modelSquare}>
                    170 м2
                  </Typography>
                </Box>
                <Box>
                  <Typography className={classes.modelSubtitle}>
                    Развитие дома происходит по горизонтали в двух направлениях.
                    К базовому модулю могут быть пристроены навес для автомобиля
                    в одном направлении.
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.modelDescItem}>
                <Box className={classes.modelDescItemTitle}>
                  <Typography className={classes.modelNumber}>02</Typography>
                  <Typography className={classes.modelHeader}>Жилой</Typography>
                  <Typography className={classes.modelSquare}>
                    170 м2
                  </Typography>
                </Box>
                <Box>
                  <Typography className={classes.modelSubtitle}>
                    Развитие дома происходит по горизонтали в двух направлениях.
                    К базовому модулю могут быть пристроены навес для автомобиля
                    в одном направлении.
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.modelDescItem}>
                <Box className={classes.modelDescItemTitle}>
                  <Typography className={classes.modelNumber}>03</Typography>
                  <Typography className={classes.modelHeader}>Гараж</Typography>
                  <Typography className={classes.modelSquare}>
                    170 м2
                  </Typography>
                </Box>
                <Box>
                  <Typography className={classes.modelSubtitle}>
                    Развитие дома происходит по горизонтали в двух направлениях.
                    К базовому модулю могут быть пристроены навес для автомобиля
                    в одном направлении.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className={classes.model}></Box>
          </Box>
          {/* </div> */}
          <Footer />
        </div>
        <Menu />
      </div>
    </ThemeProvider>
  );
};
export default MainPage;
