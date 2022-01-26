import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    padding:"12px 30px",
    fontSize:"14px",
    borderRadius: "0",
    lineHeight: "1em",
    letterSpacing:"0.015em",
    width:"152px",
    height:"38px",
    textTransform:(param) => (param.lowerCase ? "capitalize" : "uppercase"),
    borderLeft: (param) => (param.leftNone ? "none" : "1px solid"),
    color: (param) => (param.color ? param.color : "#4F4F4F"),
    borderColor: (param) => (param.color ? param.color : "#4F4F4F"),
    boxShadow: "none",
    "&:hover": {
      background: (param) => (param.color ? param.color : "#4F4F4F"),
      color: (param) => (param.color ? "#4F4F4F" : "#F2F2F2"),
    },
    "@media (min-width:1921px)": {
      width:"10.5vw",
      height:"2.6vw",
      fontSize:"0.9vw",
      padding:"0.8vw 2.1vw",
    },
    [theme.breakpoints.down("md")]: {
      transform:"scale(0.9)",
    },
  },
}));

export default function RegularButton({
  children,
  click,
  variant,
  color,
  leftNone,
  submit,
  lowerCase,
}) {
  const param = { color, leftNone,lowerCase };
  const classes = useStyles(param);

  return (
    <Button
      onClick={click}
      className={classes.button}
      variant={variant}
      color="inherit"
      value="check"
      type={submit?"submit":"button"}
    >
      {children}
    </Button>
  );
}
