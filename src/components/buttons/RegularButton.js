import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { Children } from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "0",
    color: param=> param.color? param.color: "#4F4F4F",
    borderColor: param=> param.color? param.color: "#4F4F4F",
    boxShadow:'none',
    '&:hover':{
      background: param=> param.color? param.color: "#4F4F4F",
      color: param=> param.color? '#4F4F4F':'#F2F2F2',
    }
    
  },
}));

export default function RegularButton({ children,click, variant,color }) {
  const param = {color};
  const classes = useStyles(param);
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
