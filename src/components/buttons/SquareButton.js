import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    width: "56px",
    height: "56px",
    minWidth:'10px',
    borderRadius: "0",
    color: "#4F4F4F",
    borderColor: "#4F4F4F",
    // marginLeft:'auto',
    boxShadow:'none',
    '&:hover':{
      background:'#4F4F4F',
      color:'#F2F2F2',
    }
    
  },
}));

export default function SquareButton({ icon, click, variant }) {
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
      {icon}
    </Button>
  );
}
