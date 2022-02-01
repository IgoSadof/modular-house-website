import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "56px",
    height: "56px",
    minWidth: "10px",
    borderRadius: "0",
    background: "#4F4F4F",
    border:"none",
    color: "#F2F2F2",
    "& div": {
      borderColor: "#F2F2F2",
    },
    boxShadow: "none",
    "&:hover": {
      filter: 'brightness(1.2)',
      background: "#4F4F4F",
      "& div": {
        borderColor: "#F2F2F2",
      },
    
    },
    "@media (min-width:1921px)": {
      width: "3.8vw",
      height: "3.8vw",
    },
  },
  buttonLess: {
    position: "relative",
    left: '25%',
    width: "20px",
    height: "20px",
    transform: "rotate(-45deg)",
    border: 'solid #4F4F4F',
    borderWidth: '1px 0px 0px 1px',
    "@media (min-width:1921px)": {
      width: "1.4vw",
      height: "1.4vw",
      left: '15%',
    },
  },
  buttonGreat: {
    position: "relative",
    right: '20%',
    width: "20px",
    height: "20px",
    transform: "rotate(-45deg)",
    border: 'solid #4F4F4F',
    borderWidth: '0 1px 1px 0',
    "@media (min-width:1921px)": {
      width: "1.4vw",
      height: "1.4vw",
      right: '15%',
    },
  },
}));

export default function SquareButton({ icon, great, less, click, variant }) {
  const classes = useStyles();
  //   const [selected, setSelected] = React.useState(false);
  // let c = "str"
  return (
    <Button
      onClick={click}
      className={classes.button}
      variant={variant}
      color="inherit"
      value="check"
      aria-label={great ? "Next button" : less ? "Prev button" : "Close button"}
    >
      {icon ? icon : great ? (<div className={classes.buttonGreat}></div>) : less ? (<div className={classes.buttonLess}></div>) : null}
    </Button>
  );
}
