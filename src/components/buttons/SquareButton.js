import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "56px",
    height: "56px",
    minWidth: "10px",
    borderRadius: "0",
    background: (param)=>param.bgColor?param.bgColor:"#4F4F4F",
    border:"none",
    color: (param)=>param.color?param.color:"#F2F2F2",
    "& div": {
      borderColor: (param)=>param.color?param.color:"#F2F2F2",
    },
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
      filter: 'brightness(1.1)',
      background: (param)=>param.bgColor?param.bgColor:"#4F4F4F",
      "& div": {
        borderColor: (param)=>param.color?param.color:"#F2F2F2",
      },
    
    },
    "@media (min-width:1921px)": {
      width: "2.91vw",
      height: "2.91vw",
    },
    [theme.breakpoints.down('md')]: {
      width: "44px",
      height: "44px",
    },
  },
  buttonLess: {
    position: "relative",
    left: '25%',
    width: "20px",
    height: "20px",
    transform: "rotate(-45deg)",
    border: '1px solid',
    borderWidth: '1px 0px 0px 1px',
    "@media (min-width:1921px)": {
      width: "1.4vw",
      height: "1.4vw",
      left: '15%',
    },
    [theme.breakpoints.down('md')]: {
      width: "12px",
      height: "12px",
    },
  },
  buttonGreat: {
    position: "relative",
    right: '20%',
    width: "20px",
    height: "20px",
    transform: "rotate(-45deg)",
    border: '1px solid ',
    borderWidth: '0 1px 1px 0',
    "@media (min-width:1921px)": {
      width: "1.4vw",
      height: "1.4vw",
      right: '15%',
    },
    [theme.breakpoints.down('md')]: {
      width: "12px",
      height: "12px",
    },
  },
}));

export default function SquareButton({ icon, great, less, click, variant, bgColor='#4F4F4F', color='#F2F2F2' }) {
  const param = { bgColor, color };
  const classes = useStyles(param);
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
