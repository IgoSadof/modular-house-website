import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "./Menu";
import Burger from "./Burger";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  burgerConteiner: {
    position: "absolute",
    top: "0",
    left: (param) => (param.isBurgerMenuOpen ? "61%" : "100%"),
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
      position: "fixed",
      left: (param) => (param.isBurgerMenuOpen ? "0%" : "100%"),
      padding: "10%",
      paddingTop:'0',
      paddingBottom:'10vh',
      width: "100%",
      gap: "0",
    },
  },
  buttonBox: {
    marginLeft: "auto",
  },
  menuBox:{
    display:'none',
    [theme.breakpoints.down("md")]: {
      display:'flex',
    
    },


  },
}));

const BurgerMenu = ({ isBurgerMenuOpen, click, clickToOpenForm }) => {
  // const matches = {
  //   1920: useMediaQuery("(min-width:1920px)"),
  //   1200: useMediaQuery("(max-width:1200px)"),
  // };
  // const [review, setReview] = useState(0);
  // const [isOpen, setIsOpen] = useState(isBurgerMenuOpen);
  const param = {isBurgerMenuOpen};
  const classes = useStyles(param);
  // const handleClick = () => {
  //   setIsOpen(state=>!state)
  //   console.log('click')
  // }

  return (
    <div className={classes.burgerConteiner}>
      <Burger isOpen={true} click={click} />
      <Box className={classes.menuBox} >
        <Menu inBurger={true} clickToOpenForm={clickToOpenForm} />
      </Box>
    </div>
  );
};
export default BurgerMenu;
