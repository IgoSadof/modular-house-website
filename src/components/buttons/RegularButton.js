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
    borderLeft: (param) => (param.leftNone ? "none" : "1px solid"),
    color: (param) => (param.color ? param.color : "#4F4F4F"),
    borderColor: (param) => (param.color ? param.color : "#4F4F4F"),
    boxShadow: "none",
    "&:hover": {
      background: (param) => (param.color ? param.color : "#4F4F4F"),
      color: (param) => (param.color ? "#4F4F4F" : "#F2F2F2"),
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
}) {
  const param = { color, leftNone };
  const classes = useStyles(param);

  return (
    <Button
      onClick={click}
      className={classes.button}
      variant={variant}
      color="inherit"
      value="check"
      type={submit?"submit":"button}"}
    >
      {children}
    </Button>
  );
}
