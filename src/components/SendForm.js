import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Form from "./Form";
import SquareButton from "./buttons/SquareButton";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "0",
    right: prop => prop.isFormOpen? "0": "-100%",
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    // width: "600px",
    height: "100vh",
    // background:
    //   "radial-gradient(100% 100% at 0% 0%, #E2E2E2 0%, rgba(232, 232, 232, 0.12) 100%)",
    zIndex: "3",
    padding: "60px 240px 100px 100px",
    boxShadow: "-5px 0px 100px rgba(0, 0, 0, 0.2) ",
    // backdropFilter: "blur(42px)",
    background: "radial-gradient(100% 100% at 0% 0%, #E2E2E2, rgba(232, 232, 232, 0.12) 100%)",
    backdropFilter: "blur(10px)",
    transition: "0.7s",
  },
  buttonBox: {
    marginLeft: "auto",
  },
}));

const SendForm = ({isFormOpen, click}) => {
  // const [review, setReview] = useState(0);
  // const [isOpen, setIsOpen] = useState(isFormOpen);
  const prop = {isFormOpen}
  const classes = useStyles(prop);
  // const handleClick = () => {
  //   setIsOpen(state=>!state)
  //   console.log('click')
  // }

  return (
    <div className={classes.root} name="form" id="form">
      <Box className={classes.buttonBox}  >
        <SquareButton variant="outlined" click={click} icon={<ClearIcon/>} />
      </Box>
      <Form title={"Напешите нам"} email text />
    </div>
  );
};
export default SendForm;
