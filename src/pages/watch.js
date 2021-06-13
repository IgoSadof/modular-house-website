import "../styles/global.css";
import React, { useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import modularHouseTheme from "../config/modularHouseTheme";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SendForm from "../components/SendForm";
import fasad from "../assets/images/fasad.png";
import Panel from "../components/Panel";
import Form from "../components/Form";

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
  },
  BlockFullscreen: {
    position: "relative",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#e5e5e5",
    overflow: "hidden",
  },
  button: {
    position: "absolute",
    top: "5%",
    right: "10%",
    width: "125px",
    height: "36px",
    zIndex: "2",
  },
  imageSlider: {
    height: "50vh",
    position: "relative",
  },
  excursion: {
    display: "flex",
    justifyContent: "space-between",
    height: "50vh",
    padding: "60px 160px 60px 260px ",
  },
  excursionSend: {
    position:'relative',
    width:'60%',
    display: "flex",
    gap:"30%"
  },
  formBox:{
    marginLeft:"auto"

  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  calendar: {
    width: "280px",
    height: "240px",
    border: "1px solid",
  },
}));

const WhatWeDo = () => {
  const param = {};
  const classes = useStyles(param);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClickConnect = () => {
    setIsFormOpen((state) => !state);
  };

  return (
    <ThemeProvider theme={modularHouseTheme}>
      <div className="conteiner">
        <div className="content">
          <div className={classes.page}>
            <Box className={classes.BlockFullscreen}>
              <SendForm isFormOpen={isFormOpen} click={handleClickConnect} />
              <Button
                className={classes.button}
                variant="outlined"
                onClick={handleClickConnect}
              >
                СВЯЗАТЬСЯ
              </Button>
              <Box className={classes.imageSlider}>
                <img className={classes.image} src={fasad} alt="img"></img>
                <Panel />
              </Box>
              <Box className={classes.excursion}>
                <Box className={classes.excursionSend}>
                  <Typography>На экскурсию</Typography>
                  <Box className={classes.formBox}>
                    <Form title="Оставьте заявку и наш менеджер свяжеться с вами" buttonAbs={true}/>
                  </Box>
                </Box>

                <Box className={classes.calendar}></Box>
              </Box>
            </Box>
            <Footer />
          </div>
        </div>
        <Menu />
      </div>
    </ThemeProvider>
  );
};
export default WhatWeDo;
