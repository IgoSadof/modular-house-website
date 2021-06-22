import "./global.css";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";
import slides from "../constant/slides";
// import gif from "../asssets/images/gif.gif";
// import Button from "@material-ui/core/Button";
import numbers from "../constant/numbers";
// import axios from "axios";
// import findDataFromCategory from "../utils/findDataFromCategory";
import SendForm from "./SendForm";
import RegularButton from "./buttons/RegularButton";
import video from "../assets/video/video.webm";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  content: {
    padding: "60px 0px 100px",
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    backgroundColor: "#D1D1D1",
  },
  button: {
    position: "relative",
    zIndex: "2",
    marginLeft: "auto",
  },
  mainVideoBox: {
    // border:"1px solid",
    position: "absolute",
    right: "-160px",
    // width: "480px",
    height: "100vh",
    zIndex: "0",
  },
  fon: {
    position: "absolute",
    background: "radial-gradient(transparent 30%, #D1D1D1 70%)",
    height: "100%",
    width: "100%",
  },
  fullImg: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    opacity: (param) => 1 - 0.1 * param.scrol,
  },
  leftpartImg: {
    position: "absolute",
    top: "47%",
    left: "3%",
    transform: (param) =>
      `translate(0%,${-50 - param.scrol * 10}% ) scale(1.15)`,
    opacity: (param) => 0.1 * param.scrol,
  },
  rightpartImg: {
    position: "absolute",
    top: "47%",
    left: "62%",
    transform: (param) =>
      `translate(${-50 + param.scrol * 10}%, ${
        -50 - param.scrol * 10
      }% ) scale(1.15)`,
    opacity: (param) => 0.1 * param.scrol,
  },
  langBox: {
    position: "relative",
    zIndex: "2",
    display: "flex",
    gap: "6px",
    cursor: "pointer",
    marginLeft: "auto",
  },
  midleBlock: {
    marginTop: "auto",
    marginBottom: "auto",
    display: "flex",
    gap: "50px",
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  midleLine: {
    width: "75px",
    height: "1px",
    backgroundColor: "black",
  },
  articleBox: {
    position: "relative",
    zIndex: 1,
    width: "35%",
    height: '40vh',
    marginRight: "auto",
    marginLeft: "100px",
  },
  article: {
    display: "flex",
    position: "absolute",
    top:'0',
    left:'0',
    right:'0',
    zIndex: 1,
    gap: "40px",
    flexDirection: "column",
  },
  header: {},
  text: {
    width: "70%",
  },

  bottomLine: {
    position: "relative",
    width: (param) => param.lineLength + "px",
    height: "1px",
    backgroundColor: "black",
    "&::before": {
      transformOrigin: "100% 50%",
      position: "absolute",
      content: `''`,
      display: "block",
      width: "10px",
      height: "1px",
      top: "0",
      right: "0",
      backgroundColor: "black",
      transform: "rotate(40deg)",
    },
    "&::after": {
      transformOrigin: "100% 50%",
      position: "absolute",
      content: `''`,
      display: "block",
      width: "10px",
      height: "1px",
      top: "0",
      right: "0",
      backgroundColor: "black",
      transform: "rotate(330deg)",
    },
    transition: "0.5s",
  },
  numbers: {
    position: "absolute",
    bottom: "125px",
    left: "215px",
    display: "flex",
    height: "20px",
  },
  number: {
    cursor: "pointer",
    width: "80px",
    height: "20px",
  },
  activeNumber: {
    color: "#828282",
  },
}));

const Slider = ({ scrol, isFirstEntry }) => {
  const [lineLength, setLineLength] = useState(265);
  const [currentSegment, setCurrentSegment] = useState(0);
  const [activeNumb, setActiveNumb] = useState(0);
  const [playVideo, setPlayVideo] = useState(true);
  const param = { scrol, lineLength };
  const classes = useStyles(param);
  const [opacity, setOpasity] = useState(true);

  // const [resources, setResources] = useState(null);
  // const [resourcestv, setResourcestv] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [fields, setFields] = useState({
    headers: null,
    subtitles: null,
  });
  const vidSegments = {
    0: 2,
    1: 9.5,
    2: 20.5,
    3: 24,
  };

  // useEffect(() => {
  //   axios.get("/rest/resources").then((response) => {
  //     setResources(response.data.results);
  //   });
  //   axios.get("/rest/resourcestv").then((response) => {
  //     setResourcestv(response.data.results);
  //   });
  // }, []);

  useEffect(() => {
    // console.log(scrol);
    if (isFirstEntry) {
      scrol < 1
        ? handleNumberClick(null, 1)
        : scrol >= 1 && scrol < 2
        ? handleNumberClick(null, 2)
        : scrol >= 2 && scrol < 3
        ? handleNumberClick(null, 3)
        : scrol >= 3 && scrol < 4
        ? handleNumberClick(null, 4)
        : (scrol = 4);
    }
  }, [scrol]);

  // useEffect(() => {
  //   if (resources && resourcestv) {
  //     setFields({
  //       headers: findDataFromCategory(resources, resourcestv, 2),
  //       subtitles: findDataFromCategory(resources, resourcestv, 3),
  //     });
  //   }
  // }, [resources, resourcestv]);
  const handleNumberClick = (e, numb = 0) => {
    // if(currentSegment<=activeNumb){
    //   setCurrentSegment(activeNumb)
    // }

    if (numb === 0) {
      numb = +e.target.textContent[1];
    }

    if (numb > currentSegment + 1) {
      setPlayVideo(true);
      setLineLength(() => (numb === 1 ? 265 : 265 + 80 * (numb - 1)));

      // setActiveNumb(numb - 1);
      setCurrentSegment(numb - 1);
    }
    setActiveNumb(numb - 1);
  };

  const handleClickConnect = () => {
    setIsFormOpen((state) => !state);
  };
  const handleCloseForm = (e) => {
    // console.log(e.target);
  };

  return (
    <div className={classes.root} onClick={handleCloseForm}>
      <SendForm isFormOpen={isFormOpen} click={handleClickConnect} />
      <Box className={classes.content}>
        <Box className={classes.button}>
          <RegularButton variant="outlined" click={handleClickConnect}>
            СВЯЗАТЬСЯ
          </RegularButton>
        </Box>
        <Box className={classes.midleBlock}>
         
          <TransitionGroup className={classes.articleBox}>
            <CSSTransition
              key={slides[activeNumb].id}
              in={opacity}
              appear={true}
              timeout={500}
              classNames="fade"
            >
              <Box className={classes.article}>
                <Typography
                  className={classes.header}
                  variant="h1"
                  component="h1"
                >
                  {fields.headers
                    ? fields.headers[activeNumb].value
                    : slides[activeNumb].title}
                </Typography>
                <Box>
                  {slides[activeNumb].image ? (
                    <img
                      className={classes.logo}
                      src={slides[activeNumb].image}
                      alt="icon"
                    ></img>
                  ) : null}
                </Box>
                <Typography
                  className={classes.text}
                  variant="body1"
                  component="h6"
                >
                  {fields.subtitles
                    ? fields.subtitles[activeNumb].value
                    : slides[activeNumb].subtitle}
                </Typography>

              </Box>
            </CSSTransition>
          </TransitionGroup>


          <Box className={classes.mainVideoBox}>
            <div className={classes.fon}></div>
            <ReactPlayer
              height="100%"
              width="auto"
              url={video}
              playing={playVideo}
              muted={true}
              onProgress={({ playedSeconds, loadedSeconds }) => {
                if (playedSeconds > vidSegments[currentSegment]) {
                  setPlayVideo(false);
                }
              }}
              onReady={() => {
                setPlayVideo(true);
              }}
            />
          </Box>
        </Box>
        <Box className={classes.langBox}>
          <Typography className={classes.lang} variant="button" component="h6">
            RU
          </Typography>
          <Typography className={classes.lang} variant="button" component="h6">
            EN
          </Typography>
        </Box>
        <div className={classes.numbers}>
          {numbers.map((item, index) => (
            <Typography
              key={index}
              className={
                index <= currentSegment
                  ? `${classes.number} ${classes.activeNumber}`
                  : classes.number
              }
              variant="h6"
            >
              <span key={index} onClick={handleNumberClick}>
                {item}
              </span>
            </Typography>
          ))}
        </div>
        <span className={classes.bottomLine}></span>
      </Box>
    </div>
  );
};
export default Slider;
