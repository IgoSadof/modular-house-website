import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    padding:"12px 30px",
    fontSize:"14px",
    borderRadius: "0",
    lineHeight: '1.4',
    letterSpacing:"0.015em",
    width:"152px",
    height:"38px",
    textTransform:"uppercase",
    color: "#F2F2F2",
    borderColor: "#4F4F4F",
    backgroundColor: "#4F4F4F",
    boxShadow: "none",
    "&:hover": {
      filter: 'brightness(1.2)',
      backgroundColor: "#4F4F4F",
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
