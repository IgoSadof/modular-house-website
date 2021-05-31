import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import expodom_img from "../assets/images/expodom_img.png";
import TextField from "@material-ui/core/TextField";
import Form from "./Form";
import SquareButton from "./SquareButton";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "0",
    right: "0",
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    // width: "600px",
    height: "100vh",
    background:
      "radial-gradient(100% 100% at 0% 0%, #E2E2E2 0%, rgba(232, 232, 232, 0.12) 100%)",
    zIndex: "2",
    padding: "60px 240px 100px 100px",
    boxShadow: "box-shadow: -5px -5px 250px 0px rgba(255, 255, 255, 0,02) inset",
    backdropFilter: "blur(42px)",
    transition: " 0.5s",
    transform: prop => prop.isFormOpen? "translateX(0)": "translateX(600px)",
  },
  button: {
    marginLeft: "auto",
  },
}));

const SendForm = ({isFormOpen, click}) => {
  const [review, setReview] = useState(0);
  // const [isOpen, setIsOpen] = useState(isFormOpen);
  const prop = {isFormOpen}
  const classes = useStyles(prop);
  // const handleClick = () => {
  //   setIsOpen(state=>!state)
  //   console.log('click')
  // }

  return (
    <div className={classes.root} name="form" id="form">
      <Box className={classes.button} onClick={click} >
        <SquareButton icon={<ClearIcon/>} />
      </Box>

      <Form title={"Напешите нам"} email text />
    </div>
  );
};
export default SendForm;
