import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "56px",
    height:"56px",
    borderRadius:"0",
    color:"#4F4F4F",
    borderColor:"#4F4F4F",


  },
}));

export default function ArrowButton({ icon,click }) {
    const classes = useStyles();
  //   const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      onClick = {click}
      className={classes.button}
      value="check"
      //   selected={selected}
      //   onChange={() => {
      //     setSelected(!selected);
      //   }}
    >
      {icon}
    </ToggleButton>
  );
}
