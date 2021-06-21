import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "56px",
    height: "56px",
    minWidth: "10px",
    borderRadius: "0",
    color: "#4F4F4F",
    borderColor: "#4F4F4F",
    // marginLeft:'auto',
    boxShadow: "none",
    "&:hover": {
      background: "#4F4F4F",
      color: "#F2F2F2",
      "& div": {
        borderColor: "#D1D1D1",
      },
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
  },
  buttonGreat: {
    position: "relative",
    right: '20%',
    width: "20px",
    height: "20px",
    transform: "rotate(-45deg)",
    border: 'solid #4F4F4F',
    borderWidth: '0 1px 1px 0',
  },
}));

export default function SquareButton({ icon, great, less, click, variant }) {
  const classes = useStyles();
  //   const [selected, setSelected] = React.useState(false);

  return (
    <Button
      onClick={click}
      className={classes.button}
      variant={variant}
      color="inherit"
      value="check"
      //   selected={selected}
      //   onChange={() => {
      //     setSelected(!selected);
      //   }}
    >
      {icon ? icon : great ? (<div className={classes.buttonGreat}></div>) : less ? (<div className={classes.buttonLess}></div>) : null}
    </Button>
  );
}
