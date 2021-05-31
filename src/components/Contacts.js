import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import logo from "../assets/images/logo.svg";
import andrey from "../assets/images/andrey.png";
import alexey from "../assets/images/alexey.png";
import reviews from "../constant/reviews";
import Form from "./Form"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "125px",
  },
  Block: {
    display: "flex",
    gap: "20px",
    marginTop: "145px",
  },
  BlockContent: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  BlockColumn: {
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  sliderBlock: {
    display: "flex",
    gap: "20px",
    overflow: "hidden",
  },
  line: {
    display: "inline-block",
    width: "75px",
    height: "1px",
    backgroundColor: "black",
    marginTop: "10px",
  },
  firstLine: {
    marginTop: "0px",
    height: "1px",
  },
  slider: {
    height: "auto",
    flexGrow: "1",
    border: "1px solid",
  },
  accordion: {
    marginLeft: "auto",
  },

  commentBox: {
    // marginTop: "115px",
    width: "260px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  buttons: {
    // marginTop: "125px",
    display: "flex",
    gap: "40px",
  },
  title: {
    // fontSize: "12px",
    marginTop: "140px",
    width: "165px",
  },
  message: {
    fontSize: "12px",
    // marginTop: "120px",
    width: "260px",
  },
  mediaBlock: {
    // width: "100%",
    display: "flex",
    marginLeft: "auto",
    // border: "1px solid",
    width: "560px",
    gap:"20px",
  },
  mediaBlock_unborder: {
    border: "none",
    // border:"1px solid"
  },
  formBox: {
    width: "260px",
  },
  sliderBox: {
    width: "100%",
    overflowX: "hidden",
  },
  buttonGroup: {
    borderRadius: "0px",
    border: "1px solid",
  },
  button: {
    width: "120px",
    borderRadius: "0",
    height: "36px",
    marginTop: "96px",
    border: "1px solid",
  },
  expodom_img: {
    width: "100%",
  },
  logoBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "135px",
    gap: "7px",
  },
  logo: {
    width: "83px",
  },
  contactsBox: {
    display: "flex",
    flexDirection: "column",
  },
  contactsBoxes: {
    display: "flex",
    gap: "40px",
    // flexDirection: "column",
  },
  infoBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: "92px",
    gap: "30px",
  },
  formField: {
    width: "285px",
  },
  contactsFormBox: {
    display: "flex",
    flexDirection: "column",
  },
  contactsForm: {
    marginTop: "120px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  contactsButton: {
    marginTop: "auto",
  },
  reviewVideoBox: {
    // border: "1px solid",
    width: "270px",
    height: "100%",
  },
  secondBlock: {
    width:"100%",
    display: "flex",
    flexDirection: "column",
    justifyContent:"space-between",
    // border: "1px solid",
  },
  imagesBoxes: {
    display: "flex",
    gap: "20px",
    height:"170px",
    justifyContent:"space-between"
  },
  reviewData:{
    display:"flex",
    height: "100%",
    justifyContent:"center",
    alignItems:"center",
  },
  Expodom:{
    marginTop:"100px",
    "& .makeStyles-message-392":{
      color:"red",
    }
    
  }
}));

const Contacts = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.Block}>
        <span className={classes.line}></span>
        <Box className={classes.BlockContent}>
          <Box className={classes.BlockColumn}>
            <Typography className={classes.text}>КОНТАКТЫ</Typography>
            <Box className={classes.logoBox}>
              <img className={classes.logo} src={logo} alt="logo"alt="img"></img>
              <Typography variant="subtitle1">MODULAR HOUSE</Typography>
            </Box>
          </Box>
          <Box className={classes.contactsBox}>
            <Box className={classes.contactsBoxes}>
              <Box className={classes.personalBox}>
                <img
                  className={classes.contactsFoto}
                  src={andrey}
                  alt="Foto"
                alt="img"></img>
                <Typography variant="subtitle1">Андрей</Typography>
                <Typography variant="subtitle1">Главный</Typography>
                <Typography variant="subtitle1">+375 29 3650669 </Typography>
              </Box>
              <Box className={classes.personalBox}>
                <img
                  className={classes.contactsFoto}
                  src={alexey}
                  alt="Foto"
                alt="img"></img>
                <Typography variant="subtitle1">Алексей</Typography>
                <Typography variant="subtitle1">Главный</Typography>
                <Typography variant="subtitle1">+375 44 5180676</Typography>
              </Box>
            </Box>
            <Box className={classes.infoBox}>
              <Typography variant="subtitle1">info@zrobym.by</Typography>
              <Typography variant="subtitle1">
                ул. Богдановича 11, 3 этаж
              </Typography>
            </Box>
          </Box>
          <Form title={"НАПИШИТЕ НАМ"} email text/>
        
        </Box>
      </Box>
    </div>
  );
};
export default Contacts;
