import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { customFontsSize } from '../config/modularHouseTheme'

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "#4F4F4F",
    alignItems: "center",
    height:"50px",
    "@media (min-width:1921px)": {
      height: '3.5vw',
    },
    [theme.breakpoints.down("md")]: {
      padding:"10px",
    },
    
  },
  text: {
    color: "#D1D1D1",
    fontSize: customFontsSize.h6,
    lineHeight:"14px",
    "@media (min-width:1921px)": {
      fontSize: customFontsSize.h6 * customFontsSize.xl,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.root}>
      <Typography className={classes.text}>
        © ZROBYM architects. All rights reserved.
      </Typography>
      <Typography ml="100px" className={classes.text}>
        2021, Minsk, Belarus
      </Typography>
    </Box>
  );
};
export default Footer;
