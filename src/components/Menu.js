import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icons/facebook.svg";
import youtube from "../assets/images/icons/youtube.svg";
import instagram from "../assets/images/icons/instagram.svg";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "gatsby";
import RegularButton from "./buttons/RegularButton";

const useStyles = makeStyles((theme) => ({
  menu: {
    boxSizing: "border-box",
    position: "fixed",
    top: "0",
    left: "0",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: (param) => (param.inBurger ? "100%" : "11%"),
    height: "100vh",
    borderRight: "1px solid #4F4F4F",
    padding: "40px 0px 90px",
    transition: "0.5s",
    opacity: "1",
    "&:hover": {
      transition: "0.5s",
      // backgroundColor:"#F0F0F0",
      "& $text": {
        transition: "0.5s",
        opacity: "0",
      },
      "& $navList": {
        transition: "0.5s",
        opacity: "1",
      },
    },
    background:
      "radial-gradient(rgba(232, 232, 232, 0.12) 100%, rgba(232, 232, 232, 0.12) 100%)",
    backdropFilter: "blur(10px)",

    [theme.breakpoints.down("md")]: {
      display: (param) => (param.inBurger ? "flex" : "none"),
      borderRight: "none",
      position: "relative",
      padding: "8vh 0px 8vh",
      background: "none",
      backdropFilter: "none",
      alignItems: "self-start",
    },
  },
  logo: {
    alignItems: "center",
    cursor: "pointer",
  },
  iconsBox: {
    display: "flex",
    gap: "30px",
  },
  icon: {
    cursor: "pointer",
  },
  text: {
    transition: "0.5s",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  navList: {
    transition: "0.5s",
    opacity: "0",
    padding: "0px",
    display: "flex",
    listStyle: "none",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "30px",
    [theme.breakpoints.down("md")]: {
      opacity: "1",
    },
  },
  navItem: {
    cursor: "pointer",
  },
  Link: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "black",
    },
  },
  menuFooter: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
    },
  },
}));

const Menu = ({ inBurger,clickToOpenForm }) => {
  const param = { inBurger };
  const classes = useStyles(param);

  return (
    <div className={classes.menu}>
      {inBurger ? null : (
        <>
          <img className={classes.logo} src={logo} alt="logo"></img>
          <Typography variant="button" className={classes.text}>
            Меню
          </Typography>
        </>
      )}
      <ul className={classes.navList}>
        <li className={classes.navItem}>
          <Link className={classes.Link} to={"/"}>
            <Typography variant="button">ГЛАВНАЯ</Typography>
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link className={classes.Link} to={"/aboutus"}>
            <Typography variant="button">КТО МЫ </Typography>
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link className={classes.Link} to={"/what-we-do"}>
            {inBurger ? (
              <Typography variant="button">ЧТО МЫ ДЕЛАЕМ </Typography>
            ) : (
              <>
                <Typography variant="button">ЧТО МЫ </Typography>
                <br />
                <Typography variant="button">ДЕЛАЕМ</Typography>
              </>
            )}
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link className={classes.Link} to={"/watch"}>
            {inBurger ? (
              <Typography variant="button">ГДЕ УВИДЕТЬ </Typography>
            ) : (
              <>
                <Typography variant="button">ГДЕ</Typography>
                <br />
                <Typography variant="button">УВИДЕТЬ</Typography>
              </>
            )}
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link className={classes.Link} to={"/contacts"}>
            {inBurger ? (
              <Typography variant="button">КАК СВЯЗВТЬСЯ </Typography>
            ) : (
              <>
                <Typography variant="button">КАК</Typography>
                <br />
                <Typography variant="button">СВЯЗВТЬСЯ</Typography>
              </>
            )}
          </Link>
        </li>
      </ul>

      <Box className={classes.menuFooter}>
        {inBurger ? (
          <RegularButton variant="outlined" click={clickToOpenForm}>СВЯЗАТЬСЯ</RegularButton>
        ) : null}
        <Box className={classes.iconsBox}>
          <Link className={classes.Link} to={"/"}>
            <img className={classes.icon} src={facebook} alt="icons"></img>
          </Link>
          <Link className={classes.Link} to={"/"}>
            <img className={classes.icon} src={youtube} alt="icons"></img>
          </Link>
          <Link className={classes.Link} to={"/"}>
            <img className={classes.icon} src={instagram} alt="icons"></img>
          </Link>
        </Box>
      </Box>
    </div>
  );
};
export default Menu;
