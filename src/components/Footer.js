import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "#4F4F4F",
    alignItems: "center",
  },
  text: {
    color: "#D1D1D1",
    fontSize:"12px",
    lineHeight:"18px",
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
