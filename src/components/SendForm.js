import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Form from "./Form";
import SquareButton from "./buttons/SquareButton";
import ClearIcon from "@material-ui/icons/Clear";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import call from "../assets/images/call.png";
import Typography from "@material-ui/core/Typography";
import Burger from "./Burger";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "0",
    left: (param) => (param.isFormOpen ? "65%" : "100%"),
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    height: "100vh",
    background:
      "radial-gradient(100% 100% at 0% 0%, #E2E2E2 0%, rgba(232, 232, 232, 0.12) 100%)",
    zIndex: "3",
    padding: "60px 240px 100px 100px",
    boxShadow: (param) =>
      param.isFormOpen ? "-5px 0px 100px rgba(0, 0, 0, 0.2) " : null,
    backdropFilter: "blur(10px)",
    transition: "0.7s",
    justifyContent: 'center',
    [theme.breakpoints.down("md")]: {
      position: "fixed",
      left: (param) => (param.isFormOpen ? "0%" : "100%"),
      padding: "10%",
      paddingTop: "0",
      width: "100%",
      justifyContent: "space-between",
      gap: "initial",
    },
  },
  buttonBox: {
    marginLeft: "auto",
  },
  callBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "30px",
  },
}));

const SendForm = ({ isFormOpen, click, burgerClick, page }) => {
  const matches = {
    1920: useMediaQuery("(min-width:1920px)"),
    1200: useMediaQuery("(max-width:1200px)"),
  };
  const param = { isFormOpen };
  const classes = useStyles(param);

  return (
    <div className={classes.root} name="form" id="form">
      {!burgerClick ? (
        <Box className={classes.buttonBox}>
          <SquareButton variant="outlined" click={click} icon={<ClearIcon />} />
        </Box>
      ) : (
        <Burger page={page} isOpen={true} click={burgerClick} />
      )}
      {matches[1200] ? (
        <Box className={classes.callBox}>
          <Typography variant="h6">Позвонить</Typography>
          <a href="tel:+375293650669"><img className={classes.call} src={call} alt="call"></img></a>
        </Box>
      ) : null}

      <Form
        title={"Напешите нам"}
        email
        text
        closeForm={click}
        inBurger={matches[1200] ? true : false}
        main
      />
    </div>
  );
};
export default SendForm;
