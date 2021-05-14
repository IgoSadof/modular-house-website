// import React from "react";
import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Slider from "./MainSlider";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import HouseSlider from "./HouseSlider";
import Accordions from "./Accordion";
import ArrowButton from "./ArrowButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import detail from "../constant/detail";
import answers from "../constant/answers";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import expodom_img from "../asssets/images/expodom_img.png";
import TextField from "@material-ui/core/TextField";
import logo from "../asssets/images/logo.svg";
import andrey from "../asssets/images/andrey.png";
import alexey from "../asssets/images/alexey.png";
import reviews from "../constant/reviews";

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
    // flexDirection: "column",
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
    width: "100%",
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

const MainPageContent = () => {
  const classes = useStyles();
  const [review, setReview] = useState(0);

  const handleClickLeft = () => {
    setReview((state) => (state - 1 < 0 ? reviews.length - 1 : state - 1));
    console.log("clickLeft");
  };
  const handleClickRight = () => {
    setReview((state) => (state + 1 > reviews.length - 1 ? 0 : state + 1));
    console.log("clickLeft");
  };

  return (
    <div className={classes.root}>
      <Box className={classes.sliderBlock}>
        <span className={`${classes.line} ${classes.firstLine}`}></span>
        <Box className={classes.sliderBox}>
          <HouseSlider />
        </Box>
      </Box>

      <Box className={classes.Block}>
        <span className={classes.line}></span>
        <Typography className={classes.text}>ПОДРОБНЕЕ</Typography>
        <Box className={classes.accordion}>
          <Accordions arr={detail} />
        </Box>
      </Box>

      <Box className={classes.Block}>
        <span className={classes.line}></span>
        <Box className={classes.BlockColumn} >
          <Typography variant="h1">ОТЗЫВЫ</Typography>
          <Box className={classes.commentBox}>
            <Typography
              className={classes.name}
            >{`${reviews[review].name} ${reviews[review].place}`}</Typography>
            <Typography
              className={classes.place}
            >{`${reviews[review].place}, ${reviews[review].year}`}</Typography>
            <Typography className={classes.message}>
              {reviews[review].text}
            </Typography>
          </Box>
          <Box className={classes.buttons}>
            {/* <Button color="secondary">hello</Button> */}
            <ArrowButton click={handleClickLeft} icon={<ArrowBackIosIcon />} />
            <ArrowButton
              click={handleClickRight}
              icon={<ArrowForwardIosIcon />}
            />
          </Box>
        </Box>
        <Box className={classes.mediaBlock}>
          <Box className={classes.reviewVideoBox}>
            <img src={reviews[review].video}alt="img"></img>
          </Box>
          <Box className={classes.secondBlock}>
            <Box className={classes.reviewData}>
              {`${reviews[review].monts}/${reviews[review].day} `}
            </Box>
            <Box className={classes.imagesBoxes}>
              <Box className={classes.image1}>
                <img src={reviews[review].img1}alt="img"></img>
              </Box>
              <Box className={classes.image2}>
                <img src={reviews[review].img2}alt="img"></img>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.Block}>
        <span className={classes.line}></span>
        <Box className={classes.BlockColumn}>
          <Typography className={classes.text}>ОТВЕТЫ</Typography>
          <ButtonGroup aria-label="outlined primary button group">
            <Button className={classes.buttonGroup}>1-4</Button>
            <Button className={classes.buttonGroup}>5-8</Button>
          </ButtonGroup>
        </Box>
        <Box className={classes.accordion}>
          <Accordions arr={answers} />
        </Box>
      </Box>

      <Box className={`${classes.Block} ${classes.Expodom}`}>
        <span className={classes.line}></span>
        {/* <p className={classes.text}>Color</p> */}
        <Box>
          <Typography className={classes.text}>ЭКСПОДОМ</Typography>

          <Typography className={classes.title}>
            Пожить в модульном доме на Браславских озерах
          </Typography>
          <Typography className={classes.message}>
            Оставьте заявку и наш менеджер свяжеться с вами
          </Typography>
          <Box className={classes.formBox}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Имя" />
              <TextField id="standard-basic" label="Телефон" />
              <Button className={classes.button} variant="outlined">
                Отправить
              </Button>
            </form>
          </Box>
        </Box>
        <Box className={`${classes.mediaBlock} ${classes.mediaBlock_unborder}`}>
          <img className={classes.expodom_img} src={expodom_img} alt="img"></img>
        </Box>
      </Box>

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
          <Box className={classes.contactsFormBox}>
            <Typography variant="subtitle1">НАПИШИТЕ НАМ</Typography>
            <form
              className={classes.contactsForm}
              noValidate
              autoComplete="off"
            >
              <TextField
                className={classes.formField}
                id="standard-basic"
                label="Имя"
              />
              <TextField
                className={classes.formField}
                id="standard-basic"
                label="Email"
              />
              <TextField
                className={classes.formField}
                id="standard-basic"
                label="Телефон"
              />
              <Button
                className={`${classes.button} ${classes.contactsButton}`}
                variant="outlined"
              >
                Отправить
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default MainPageContent;
