import React from "react";
// import React, { useEffect, useRef, useState } from "react";
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
  BlockColumn: {
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  sliderBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  line: {
    display: "inline-block",
    width: "75px",
    height: "1px",
    backgroundColor: "black",
    marginTop: "10px",
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
    marginTop: "115px",
    width: "260px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  buttons: {
    marginTop: "125px",
    display: "flex",
    gap: "40px",
  },
  message: {
    fontSize: "12px",
  },
  mediaBlock: {
    marginLeft: "auto",
    border: "1px solid",
    width: "580px",
  },
  formBox:{
    width: "260px",
  }
}));

const MainPageContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.sliderBlock}>
        <span className={classes.line}></span>
        <HouseSlider />
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
        <Box>
          <Typography className={classes.text}>ОТЗЫВЫ</Typography>
          <Box className={classes.commentBox}>
            <Typography
              className={classes.name}
            >{`${"Коля"} ${"Жлобин"}`}</Typography>
            <Typography
              className={classes.place}
            >{`${"Минск"}, ${"2020"}`}</Typography>
            <Typography className={classes.message}>
              The Urban Village Project rethinks how we design, build, finance
              and share our future homes, neighbourhoods and cities. The aim is
              to allow for cheaper homes to
            </Typography>
          </Box>
          <Box className={classes.buttons}>
            <ArrowButton icon={<ArrowBackIosIcon />} />
            <ArrowButton icon={<ArrowForwardIosIcon />} />
          </Box>
        </Box>
        <Box className={classes.mediaBlock}>
          <Box></Box>
          <Box>
            <Box></Box>
            <Box>
              <Box></Box>
              <Box></Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.Block}>
        <span className={classes.line}></span>
        <Box className={classes.BlockColumn}>
          <Typography className={classes.text}>ОТВЕТЫ</Typography>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button>1-4</Button>
            <Button>5-8</Button>
          </ButtonGroup>
        </Box>
        <Box className={classes.accordion}>
          <Accordions arr={answers} />
        </Box>
      </Box>

      <Box className={classes.Block}>
        <span className={classes.line}></span>
        <Box>
          <Typography className={classes.text}>ЭКСПОДОМ</Typography>
          <Box className={classes.formBox}>
            <Typography className={classes.title}>
              Пожить в модульном доме на Браславских озерах
            </Typography>
            <Typography className={classes.message}>
              Оставьте заявку и наш менеджер свяжеться с вами
            </Typography>
          </Box>
          <Button></Button>
        </Box>
        <Box className={classes.mediaBlock}></Box>
      </Box>
    </div>
  );
};
export default MainPageContent;
