import "./global.css";
import React, { useState, useMemo, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ReactPlayer from "react-player";
import numbers from "../constant/numbers";
import video2 from "../assets/video/video2.mp4";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import getMainPage from "../utils/getMainPage";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "60px 0px 100px",
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    backgroundColor: "#D1D1D1",

    [theme.breakpoints.down("md")]: {
      height: "auto",
      padding: "0",
    },
  },
  button: {
    position: "relative",
    zIndex: "2",
    marginLeft: "auto",
  },
  menuButton: {
    padding: "0",
  },
  mainVideoBox: {
    position: "absolute",
    right: "-160px",
    width: "70%",
    height: "100vh",
    top: "0",
    zIndex: "0",
    [theme.breakpoints.down("md")]: {
      right: "0",
      width: "100%",
      position: "relative",
      height: "85vw",
    },
  },
  fon: {
    position: "absolute",
    background: "radial-gradient(rgba(209,209,209,0.05) 30%, #D1D1D1 70%)",
    height: "100%",
    width: "100%",
  },
  fullImg: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    opacity: (param) => 1 - 0.1 * param.scroll,
  },
  leftpartImg: {
    position: "absolute",
    top: "47%",
    left: "3%",
    transform: (param) =>
      `translate(0%,${-50 - param.scroll * 10}% ) scale(1.15)`,
    opacity: (param) => 0.1 * param.scroll,
  },
  rightpartImg: {
    position: "absolute",
    top: "47%",
    left: "62%",
    transform: (param) =>
      `translate(${-50 + param.scroll * 10}%, ${
        -50 - param.scroll * 10
      }% ) scale(1.15)`,
    opacity: (param) => 0.1 * param.scroll,
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
    height: "100%",
    alignItems: "flex-start",
    paddingTop: "14vh",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      paddingTop: "0",
    },
  },
  textBlock: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  midleLine: {
    width: "75px",
    height: "1px",
    backgroundColor: "black",
  },
  articleBox: {
    position: "relative",
    zIndex: 1,
    height: "55vh",

    [theme.breakpoints.down("md")]: {
      height: "20vh",
      marginTop: "40px",
    },
  },
  article: {
    minWidth: "300px",
    display: "flex",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    zIndex: 1,
    gap: "40px",
    flexDirection: "column",
    marginLeft: "100px",
    width: "70%",

    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "auto",
      gap: "20px",
      "& h1": {
        fontSize: "24px",
      },
    },
  },
  header: {
    textTransform: "uppercase",
  },
  text: {
    // width: "70%",
  },

  numbersBox: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    position: "relative",
    marginTop: "auto",
  },
  numbers: {
    width: "100%",
    marginLeft: "25%",
    display: "flex",
    height: "20px",

    [theme.breakpoints.down("md")]: {
      marginLeft: "10%",
    },
  },
  number: {
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    width: "20%",
    height: "20px",
    // marginLeft:'auto',
  },
  activeNumber: {
    color: "#828282",
  },
  bottomLine: {
    position: "relative",
    width: (param) => param.lineLength + "%",
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
}));

const Slider = ({ scroll, isFirstEntry, data }) => {
  const dataSlides = useMemo(() => getMainPage(data), [data]);
  const matches = { 1200: useMediaQuery("(max-width:1200px)") };
  const baseLength = matches["1200"] ? 30 : 46;
  const [lineLength, setLineLength] = useState(baseLength);
  const [currentSegment, setCurrentSegment] = useState(0);
  const [activeNumb, setActiveNumb] = useState(0);
  const [playVideo, setPlayVideo] = useState(true);
  const param = { scroll, lineLength };
  const classes = useStyles(param);
  const [opacity] = useState(true);
  const vidSegments = {
    0: 1.5,
    1: 2.9,
    2: 6.8,
    3: 8,
  };

  const handleNumberClick = (e, numb = 0) => {
    if (numb === 0) {
      numb = +e.target.textContent[1];
    }
    if (numb - 1 > currentSegment) {
      setPlayVideo(true);
      setCurrentSegment(numb - 1);
    }

    setLineLength(() =>
      numb === 1 ? baseLength : baseLength + 20 * (numb - 1)
    );
    setActiveNumb(numb - 1);
  };

  useEffect(() => {
    if (isFirstEntry) {
      scroll < 1
        ? handleNumberClick(null, 1)
        : scroll >= 1 && scroll < 2
        ? handleNumberClick(null, 2)
        : scroll >= 2 && scroll < 3
        ? handleNumberClick(null, 3)
        : scroll >= 3 && scroll < 4
        ? handleNumberClick(null, 4)
        : (scroll = 4);
    }
  }, [scroll]);

  return (
    <Box component="section" className={classes.content}>
      <Box className={classes.midleBlock}>
        <Box className={classes.textBlock}>
          <TransitionGroup className={classes.articleBox}>
            <CSSTransition
              key={dataSlides[activeNumb].id}
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
                  {dataSlides[activeNumb].title.toUpperCase()}
                </Typography>
                {dataSlides[activeNumb].image?(
                  <Box>
                  <img
                    className={classes.logo}
                    src={`../../${dataSlides[activeNumb].image.substr(
                      dataSlides[activeNumb].image.search(/images/)
                    )}`}
                    alt="icon"
                  ></img>
                </Box>
                ):null}
                
                <Typography
                  className={classes.text}
                  variant="body1"
                  component="h6"
                >
                  {dataSlides[activeNumb].subtitle}
                </Typography>
              </Box>
            </CSSTransition>
          </TransitionGroup>

          <Box className={classes.mainVideoBox}>
            <div className={classes.fon}></div>
            <ReactPlayer
              height="100%"
              width="100%"
              url={video2}
              playing={playVideo}
              muted={true}
              onProgress={({ playedSeconds, loadedSeconds }) => {
                if (playedSeconds >= vidSegments[currentSegment]) {
                  setPlayVideo(false);
                }
              }}
              onReady={() => {
                setPlayVideo(true);
              }}
            />
          </Box>

          <Box className={classes.numbersBox}>
            <div className={classes.numbers}>
              {numbers.map((item, index) => (
                <Typography
                  key={index}
                  className={
                    index <= activeNumb
                      ? `${classes.number} ${classes.activeNumber}`
                      : classes.number
                  }
                  variant="h6"
                >
                  <span
                    role="button"
                    tabIndex="0"
                    key={index}
                    onClick={handleNumberClick}
                    onKeyDown={handleNumberClick}
                  >
                    {item}
                  </span>
                </Typography>
              ))}
            </div>
            <div className={classes.bottomLine}></div>
          </Box>
        </Box>
      </Box>
      {/* <Box className={classes.langBox}>
          <Typography className={classes.lang} variant="button" component="h6">
            RU
          </Typography>
          <Typography className={classes.lang} variant="button" component="h6">
            EN
          </Typography>
        </Box> */}
    </Box>
  );
};
export default Slider;
