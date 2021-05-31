import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import expodom_img from "../assets/images/expodom_img.png";
import TextField from "@material-ui/core/TextField";
import Form from "./Form"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "125px",
  },

  Block: {
    display: "flex",
    gap: "20px",
    marginTop: "145px",
  },
  line: {
    display: "inline-block",
    width: "75px",
    height: "1px",
    backgroundColor: "black",
    marginTop: "10px",
  },
  title: {
    marginTop: "140px",
    width: "165px",
  },
  mediaBlock: {
    display: "flex",
    marginLeft: "auto",
    // border: "1px solid",
    width: "560px",
    gap: "20px",
  },
  mediaBlock_unborder: {
    border: "none",
    // border:"1px solid"
  },
  formBox: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "750px",
    justifyContent:"space-between",
    gap:"140px"
  },

  button: {
    width: "120px",
    borderRadius: "0",
    height: "36px",
    marginTop: "96px",
    border: "1px solid",
  },
  expodom_img: {
    width: "100%",
  },
  Expodom: {
    marginTop: "100px",
    "& .makeStyles-message-392": {
      color: "red",
    },
  },
}));

const FormBlock = ({subtitle,text,email}) => {
  const classes = useStyles();
  const [review, setReview] = useState(0);

  return (
    <div className={classes.root}>
      <Box className={`${classes.Block} ${classes.Expodom}`}>
        <span className={classes.line}></span>
        <Box className={classes.formBox} >
          <Typography className={classes.text}>ЭКСПОДОМ</Typography>
          <Form title={"Пожить в модульном доме на Браславских озерах"} subtitle={subtitle?subtitle:null} email={email?email:null} text={text?text:null}/>
        </Box>
        <Box className={`${classes.mediaBlock} ${classes.mediaBlock_unborder}`}>
          <img
            className={classes.expodom_img}
            src={expodom_img}
            alt="img"
          ></img>
        </Box>
      </Box>
    </div>
  );
};
export default FormBlock;
