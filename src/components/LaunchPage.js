import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImg from "../assets/images/launchPage/background.png";
import Logo from "./svg/Logo.js";
import Burger from "./svg/Burger.js";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
    width: "100%",
    padding: "50px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoConteiner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    height: "42px",
  },
  logoTitle: {
    display: "inline",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "14px",
    textAlign: "left",
    margin: "0",
    marginLeft: "10px",
    color: "#FFFFFF",
    height: "auto",
  },
  main: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
  counter: {
    display: "flex",
    flexDirection: "column",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "180px",
    width: "800px",
  },
  infoText: {
    position: "relative",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "14px",
    letterSpacing: "0.07em",
    color: "#FFFFFF",
    "&::before": {
      content: `' '`,
      position: "relative",
      top: "50%",
      width: "40px",
      height: "1px",
      color: "#CDA173",
      background:"#CDA173",
    },
  },
  infoTitle: {
    fontSize: "64px",
    fontWeight: "500",
    lineHeight: "70px",
    color: "#FFFFFF",
    marginTop: "32px",
  },
  infoSubtitle: {
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "36px",
    color: "#FFFFFF",
    marginTop: "85px",
  },
  buttonsConteiner: {
    display: "flex",
    marginTop:"40px",
  },
  emailField: {
    width: "275px ",
    height: "54px",
    background: "#1a2637",
    color: "#FFFFFF",
    fontSize: "14px",
    border: "none",
    textAlign: "center",
  },
  submithButton: {
    width: "275px",
    height: "54px",
    background: "#CDA173",
    color: "#FFFFFF",
    fontSize: "14px",
    border: "none",
  },

  footer: {},
  footerText:{
      fontSize:"16px",
      color:"white",

  },
}));

const LaunchPage = () => {
  const matches = {
    1920: useMediaQuery("(min-width:1920px)"),
    1200: useMediaQuery("(max-width:1200px)"),
  };
  const [emailText, setEmailText] = React.useState("Ваш Email");

  const param = { matches };
  const classes = useStyles(param);
  const handleChangeEmail = (e) => {
    const myemail = e.target.value;
    setEmailText(myemail);
  };

  return (
    <Box
      className={classes.wrapper}
      style={{ background: ` center  no-repeat url(${backgroundImg}) ` }}
    >
      <Box className={classes.header} component="header">
        <Box className={classes.logoConteiner}>
          <Burger />
          <h3 className={classes.logoTitle}>
            ZROBIM<br></br>ARCHITECTS
          </h3>
        </Box>
        <Logo />
      </Box>
      <Box className={classes.main} component="main">
        <Box className={classes.counter}>
          <h4 className={classes.infoText}>Открытие через</h4>
        </Box>
        <Box className={classes.info}>
          <h4 className={classes.infoText}>техническое обслуживание сайта</h4>
          <h1 className={classes.infoTitle}>
            На сайте ведутся плановые работы по обновлению контента
          </h1>
          <p className={classes.infoSubtitle}>
            На данный момент ознакомиться с серией быстровозводимых современных
            модульных домов под брендом BY HOME от студии ZROBIM architects и
            сделать заказ вы можете на сайте-партнере - byhome.pro.
          </p>
          <Box className={classes.buttonsConteiner}>
            <form>
              <input
                className={classes.emailField}
                id="email"
                type="email"
                name="email"
                onChange={handleChangeEmail}
                value={emailText}
              />
              <button className={classes.submithButton} type="submit">
                УВЕДОМИТЬ О ОТКРЫТИИ
              </button>
            </form>
          </Box>
        </Box>
      </Box>
      <Box className={classes.footer} component="footer">
          <p className={classes.footerText}>© 2021 | ООО "Арт-студия "Зробим" - Zrobim.by</p>
      </Box>
    </Box>
  );
};
export default LaunchPage;
