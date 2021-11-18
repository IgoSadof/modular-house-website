import "./global.css";
import React, { useState, useMemo, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ReactPlayer from "react-player/lazy";
import numbers from "../constant/numbers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import getMainPage from "../utils/getMainPage";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "50px 0px 100px",
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
      top: "60px",
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
      height: "80vh",
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
    display: "flex",
    alignItems: "center",
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
    // top: "40%",
    left: "0",
    right: "0",
    zIndex: 1,
    gap: "30px",
    flexDirection: "column",
    // marginTop:"-20%",
    marginLeft: "100px",
    width: "470px",

    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "auto",
      top: "0",
      gap: "10px",
      width: "70%",
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
    marginLeft: "5vw",
    display: "flex",
    height: "20px",

    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
    },
  },
  number: {
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    width: "10vw",
    height: "20px",
    [theme.breakpoints.down("md")]: {
      width: "24vw",
    },
    // marginLeft:'auto',
  },
  activeNumber: {
    color: "#828282",
  },
  bottomLine: {
    position: "relative",
    height: "1px",
    backgroundColor: "black",
    marginBottom: "10px",
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
      transform: "rotate(45deg)",
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
      transform: "rotate(315deg)",
    },
    transition: "0.5s",
  },
  icon: {
    [theme.breakpoints.down("md")]: {
      width: "50px",
    },
  },
  loaderBox: {
    width: "40px",
    height: "40px",
    position: "absolute",
    left: "50%",
    top: "50%",
    zIndex: "5",
    marginLeft: "-20px",
    marginTop: "-20px",
  },
}));

const Slider = ({ scroll, isFirstEntry, data }) => {
  const dataSlides = useMemo(() => getMainPage(data), [data]);
  const breakpoints = useBreakpoint();
  const baseLength = breakpoints.md ? 24 : 15;
  const [lineLength, setLineLength] = useState(baseLength);
  const [currentSegment, setCurrentSegment] = useState(0);
  const [activeNumb, setActiveNumb] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);
  const [video2, setVideo2] = useState(false);
  import("../assets/video/video2.mp4").then((video) => {
    // setTimeout(()=>{setVideo2(video);},3000)
    setVideo2(video)
  });

  const param = { scroll, lineLength };
  const classes = useStyles(param);
  const [opacity] = useState(true);
  const vidSegments = {
    0: 1.7,
    1: 3.41,
    2: 5,
    3: 8.3,
  };

  const handleNumberClick = (e, numb = 0) => {
    if (numb === 0) {
      numb = +e.target.textContent[1];
    }
    if (numb - 1 > currentSegment) {
      setPlayVideo(true);
      setCurrentSegment(numb - 1);
    }
    let interval = breakpoints.md ? 24 * (numb - 1) : 10 * (numb - 1);

    setLineLength(() => (numb === 1 ? baseLength : baseLength + interval));
    setActiveNumb(numb - 1);
  };

  useEffect(() => {
    if (activeNumb < currentSegment) {
      setPlayVideo(true);
    }
  }, [activeNumb, currentSegment]);

  useEffect(() => {
    setLineLength(baseLength);
  }, [baseLength]);

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
                {dataSlides[activeNumb].image ? (
                  <Box>
                    <img
                      className={classes.icon}
                      src={`../../${dataSlides[activeNumb].image.substr(
                        dataSlides[activeNumb].image.search(/images/)
                      )}`}
                      alt="icon"
                    ></img>
                  </Box>
                ) : null}

                <Typography
                  className={classes.text}
                  variant="body1"
                  component="p"
                >
                  {dataSlides[activeNumb].subtitle}
                </Typography>
              </Box>
            </CSSTransition>
          </TransitionGroup>

          <Box className={classes.mainVideoBox}>
            {!video2.default ? (
              <div className={classes.loaderBox}>
                <CircularProgress />
              </div>
            ) : null}
            <div className={classes.fon}></div>
            {!video2.default ? null : (
              <ReactPlayer
                height="100%"
                width="100%"
                url={video2.default}
                loop={true}
                playing={playVideo}
                progressInterval={10}
                muted={true}
                onProgress={({ playedSeconds }) => {
                  if (activeNumb >= currentSegment) {
                    if (playedSeconds >= vidSegments[activeNumb]) {
                      setPlayVideo(false);
                      setCurrentSegment(activeNumb);
                    }
                  } else if (
                    playedSeconds >= vidSegments[activeNumb] &&
                    playedSeconds <= vidSegments[currentSegment]
                  ) {
                    setPlayVideo(false);
                    setCurrentSegment(activeNumb);
                  }
                }}
                onReady={() => {
                  setPlayVideo(true);
                }}
              />
            )}
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
                  variant="h5"
                  component="p"
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
            <div
              className={classes.bottomLine}
              style={{
                width: `${lineLength}vw`,
              }}
            ></div>
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
