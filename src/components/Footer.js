import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainPageContent from "./MainPageContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    height: "20px",
    backgroundColor: "#4F4F4F",
    alignItems:"center",
  },
  text:{
    color:"#D1D1D1",
  }
}));

const Footer = () => {
  const classes = useStyles();
 

  return (
    <div className={classes.root}>
      <Typography className={classes.text}>© ZROBYM architects. All rights reserved.</Typography>
      <Typography ml="100px" className={classes.text}>2015, Minsk, Belarus</Typography>
    </div>
  );
};
export default Footer;
