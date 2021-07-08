import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Form from "./Form";
import SquareButton from "./buttons/SquareButton";
import ClearIcon from "@material-ui/icons/Clear";
import Menu from "../components/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Burger from "../components/Burger";
import call from "../assets/images/call.png";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "0",
    left: (param) => (param.isFormOpen ? "61%" : "100%"),
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    height: "100vh",
    background:
      "radial-gradient(100% 100% at 0% 0%, #E2E2E2 0%, rgba(232, 232, 232, 0.12) 100%)",
    zIndex: "3",
    padding: "60px 240px 100px 100px",
    boxShadow: "-5px 0px 100px rgba(0, 0, 0, 0.2) ",
    backdropFilter: "blur(10px)",
    transition: "0.7s",
    [theme.breakpoints.down("md")]: {
      left: (param) => (param.isFormOpen ? "0%" : "100%"),
      padding: "10%",
      paddingTop: "0",
      width: "100%",
      justifyContent: "space-between",
    },
  },
  buttonBox: {
    marginLeft: "auto",
  },
  callBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const SendForm = ({ isFormOpen, click, burger }) => {
  const matches = {
    1920: useMediaQuery("(min-width:1920px)"),
    1200: useMediaQuery("(max-width:1200px)"),
  };
  // const [review, setReview] = useState(0);
  // const [isOpen, setIsOpen] = useState(isFormOpen);
  const param = { isFormOpen };
  const classes = useStyles(param);
  // const handleClick = () => {
  //   setIsOpen(state=>!state)
  //   console.log('click')
  // }

  return (
    <div className={classes.root} name="form" id="form">
      {!burger ? (
        <Box className={classes.buttonBox}>
          <SquareButton variant="outlined" click={click} icon={<ClearIcon />} />
        </Box>
      ) : (
        burger
      )}
      {matches[1200] ? (
        <Box className={classes.callBox}>
          <Typography variant="h6">Позвонить</Typography>
          <img className={classes.call} src={call} alt="call"></img>
        </Box>
      ) : null}

      <Form
        title={"Напешите нам"}
        email
        text
        closeForm={click}
        inBurger={matches[1200] ? true : false}
      />
    </div>
  );
};
export default SendForm;
