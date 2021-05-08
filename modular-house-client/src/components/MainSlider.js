import React from "react";
// import { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import { NavLink } from "react-router-dom";
import main_img from "../asssets/images/main_img.png";
import leftpart from "../asssets/images/leftpart.png";
import rightpart from "../asssets/images/rightpart.png";
// import gif from "../asssets/images/gif.gif";
// import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    width: "100%",
    height: "100vh",
    backgroundColor: "#E5E5E5",
  },
  mainImageBox: {
    position: "relative",
    // position:"fixed",
    // top:"50%",
    // right:"280px",
    width: "480px",
    height: "350px",

    // transform: "translate(0%, -50%)",
  },
  fullImg: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    opacity: (scrol) => 1 - 0.1 * scrol,
  },
  leftpartImg: {
    position: "absolute",
    top: "47%",
    left: "3%",
    // transform: "translate(-50%) scale(1.15)",
    transform: (scrol) => `translate(0%,${-50 - scrol * 10}% ) scale(1.15)`,
    opacity: (scrol) => 0.1 * scrol,
    // opacity:1,
  },
  rightpartImg: {
    position: "absolute",
    top: "47%",
    left: "62%",
    transform: (scrol) =>
      `translate(${-50 + scrol * 10}%, ${-50 - scrol * 10}% ) scale(1.15)`,
    opacity: (scrol) => 0.1 * scrol,
    // opacity:1,
  },
  langBox: {
    // position:"absolute",
    top: "90px",
    right: "280px",
    display: "flex",
    gap: "6px",
    cursor: "pointer",
    marginLeft: "auto",
  },
  midleBlock: {
    marginTop: "auto",
    marginBottom: "auto",
    display: "flex",
    gap: "50px",
    width: "100%",
    // border:"1px solid",
    alignItems: "center",
    justifyContent: "space-between",
  },
  midleLine: {
    width: "75px",
    height: "1px",
    backgroundColor: "black",
  },
  article: {
    display: "flex",
    gap: "40px",
    width: "350px",
    flexDirection: "column",
  },
  header: {
    fontSize: "48px",
    color: "white",
  },
  text: {
    fontSize: "12px",
    width: "250px",
  },

  bottomLine: {
    width: "265px",
    height: "1px",
    backgroundColor: "black",
  },
}));

const Slider = ({ scrol }) => {
  const classes = useStyles(scrol);

  return (
    <div className={classes.root}>
      <Box className={classes.midleBlock}>
        <span className={classes.midleLine}></span>
        <Box className={classes.article}>
          <Typography className={classes.header} variant="h1" component="h1">
            Встречайте новую философию жилья
          </Typography>
          <Typography className={classes.text} variant="h6" component="h6">
            Дома House-b сделан хорошо, из качественных материалов, стоимость
            базовой отделки включена в стоимость, однако вы можете выбрать
            альтернатив- ные материалы, их стомость отразиться ниже.
          </Typography>
        </Box>
        <Box className={classes.mainImageBox}>
          <img className={classes.fullImg} src={main_img} alt="mainImage"></img>
          <img
            className={classes.leftpartImg}
            src={leftpart}
            alt="leftpart"
          ></img>
          <img
            className={classes.rightpartImg}
            src={rightpart}
            alt="rightpart"
          ></img>
          {/* <img className={classes.fullImg} src={gif} alt="rightpart"></img> */}
        </Box>
      </Box>

      <Box className={classes.langBox}>
        <Typography className={classes.lang} variant="h6" component="h6">
          RU
        </Typography>
        <Typography className={classes.lang} variant="h6" component="h6">
          EN
        </Typography>
      </Box>
      <span className={classes.bottomLine}></span>
    </div>
  );
};
export default Slider;
