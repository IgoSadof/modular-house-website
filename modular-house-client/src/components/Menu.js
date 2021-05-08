import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../asssets/images/logo.svg";
import facebook from "../asssets/images/icons/facebook.svg";
import youtube from "../asssets/images/icons/youtube.svg";
import instagram from "../asssets/images/icons/instagram.svg";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        boxSizing:"border-box",
        position:"fixed",
        top:"0",
        left:"0",
        display: "flex",
        flexWrap: "wrap",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems: "center",
        width: "160px",
        height: "100vh",
        backgroundColor:"#E5E5E5",
        borderRight:"1px solid #4F4F4F",
        padding:"40px 0px 90px",
        transition:"0.5s",
        opacity:"1",
        "&:hover":{
            transition:"0.5s",
            backgroundColor:"#F0F0F0",
            "& $text": {
                transition:"0.5s",
                opacity:"0"
                },
            "& $navList": {
                transition:"0.5s",
                opacity:"1"
            },
        },
    },
    logo:{
        alignItems:"center",
        cursor:"pointer",
    },
    iconsBox:{
        display: "flex",
        gap: "30px",
    },
    icon:{
        cursor:"pointer"
    },
    text:{
        transition:"0.5s",
        position:"absolute",
        top:"50%",
        left:"50%",
        transform: "translate(-50%, -50%)",
        color:"black",
    },
    navList:{
        transition:"0.5s",
        opacity:"0",
        padding:"0px",
        display: "flex",
        listStyle: "none",
        flexWrap: "wrap",
        flexDirection:"column",
        alignItems:"flex-start",
        gap:"30px",
    },
    navItem:{
        cursor:"pointer",
    },
    navLink:{
        color:"black",
        textDecoration:"none",
        "&:hover":{
            color:"black",
        }
    }
}))

const Menu = () =>{
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img  className={classes.logo} src={logo} alt="logo"></img>
            <Typography className={classes.text} variant="h6" component="h6">
                Меню
            </Typography>
            <ul className={classes.navList}>
                <li className={classes.navItem}><NavLink className={classes.navLink} to={"/"}>ГЛАВНАЯ</NavLink></li>
                <li className={classes.navItem}><NavLink className={classes.navLink} to={"/"}>КТО МЫ </NavLink></li>
                <li className={classes.navItem}><NavLink className={classes.navLink} to={"/"}>ЧТО МЫ<br/>ДЕЛАЕМ</NavLink></li>
                <li className={classes.navItem}><NavLink className={classes.navLink} to={"/"}>ГДЕ<br/>УВИДЕТЬ</NavLink></li>
                <li className={classes.navItem}><NavLink className={classes.navLink} to={""}>КАК<br/>СВЯЗВТЬСЯ</NavLink></li>
            </ul>
            <Box className={classes.iconsBox}>
                <NavLink className={classes.navLink} to={"/"}><img  className={classes.icon} src={facebook} alt="icons"></img></NavLink>
                <NavLink className={classes.navLink} to={"/"}><img  className={classes.icon} src={youtube} alt="icons"></img></NavLink>
                <NavLink className={classes.navLink} to={"/"}><img  className={classes.icon} src={instagram} alt="icons"></img></NavLink>
            </Box>
          
            

        </div>
    )

}
export default Menu;   