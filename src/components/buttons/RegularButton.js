import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { Children } from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    // width: 'min-content',
    // height: "56px",
    // minWidth:'10px',
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

export default function RegularButton({ children,click, variant }) {
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
      {children}
    </Button>
  );
}
