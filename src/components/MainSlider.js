import React, { useState, useMemo, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactPlayer from 'react-player';
import numbers from '../constant/numbers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import getData from '../utils/getData';
import CircularProgress from '@material-ui/core/CircularProgress';
import getPublicPath from '../utils/getPublicPath';
import validateText from '../utils/validateText';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: '50px 0px 90px',
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    minHeight: '768px',
    backgroundColor: '#D1D1D1',
    '@media (min-width:1921px)': {
      padding: '3.5vw 0px 7vw',
    },

    [theme.breakpoints.down('md')]: {
      '@media (min-width:600px)': {
        height: '100%',
      },
      padding: '0',
    },
  },
  button: {
    position: 'relative',
    zIndex: '2',
    marginLeft: 'auto',
  },
  menuButton: {
    padding: '0',
  },
  mainVideoBox: {
    position: 'absolute',
    right: '-160px',
    width: '70%',
    height: '100vh',
    minHeight: '768px',
    top: '0',
    zIndex: '0',
    '& video': {
      mixBlendMode: 'darken',
    },
    [theme.breakpoints.down('md')]: {
      minHeight: '0',
      '@media (min-width:600px)': {
        // marginTop: '25vw',
        position: 'static',
      },
      top: '50%',
      right: '0',
      width: '100%',
      height: (param) => (param.breakpoints.s ? '85vw' : 'null'),
      transform: ' scale(1.2)',
    },
  },
  fon: {
    position: 'absolute',
    background:
      '-webkit-radial-gradient(rgba(209,209,209,0.05) 30%, #D1D1D1 50%)',
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      background: (param) =>
        param.breakpoints.s
          ? '-webkit-radial-gradient(rgba(209,209,209,0.05) 30%, #D1D1D1 50%)'
          : '-webkit-radial-gradient(rgba(209,209,209,0.05) 30%, #D1D1D1 50%)',
    },
  },
  fullImg: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    opacity: (param) => 1 - 0.1 * param.scroll,
  },
  leftpartImg: {
    position: 'absolute',
    top: '47%',
    left: '3%',
    transform: (param) =>
      `translate(0%,${-50 - param.scroll * 10}% ) scale(1.15)`,
    opacity: (param) => 0.1 * param.scroll,
  },
  rightpartImg: {
    position: 'absolute',
    top: '47%',
    left: '62%',
    transform: (param) =>
      `translate(${-50 + param.scroll * 10}%, ${
        -50 - param.scroll * 10
      }% ) scale(1.15)`,
    opacity: (param) => 0.1 * param.scroll,
  },
  langBox: {
    position: 'relative',
    zIndex: '2',
    display: 'flex',
    '& > * + * ': {
      marginLeft: '6px',
    },
    cursor: 'pointer',
    marginLeft: 'auto',
  },
  midleBlock: {
    marginTop: 'auto',
    marginBottom: 'auto',
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    paddingTop: '10vh',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      paddingTop: '0',
    },
  },
  textBlock: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  midleLine: {
    width: '75px',
    height: '1px',
    backgroundColor: 'black',
  },
  articleBox: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
    height: '62vh',
    minHeight: '450px',

    [theme.breakpoints.down('md')]: {
      height: '50%',
      // marginTop: '40px',
    },
  },
  article: {
    minWidth: '300px',
    // minHeight:'550px',
    display: 'flex',
    position: 'absolute',
    left: '0',
    right: '0',
    zIndex: 1,
    '& > * + * ': {
      marginTop: '30px',
    },
    flexDirection: 'column',
    // marginTop:"-20%",
    marginLeft: '100px',
    width: '34vw',
    '@media (min-width:1921px)': {
      marginLeft: '6.9vw',
      '& > * + * ': {
        marginTop: '2.1vw',
      },
    },

    [theme.breakpoints.down('md')]: {
      minHeight: '100px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
      top: '140px',
      '& > * + * ': {
        marginTop: '20px',
      },
      width: '80%',
      '& h1': {
        fontSize: (param) => (param.breakpoints.se ? '24px' : '32px'),
      },
      '& p': {
        height: '16vh',
        overflow: 'overlay',
      },
    },
  },
  header: {
    textTransform: 'uppercase',
  },
  text: {
    // width: "70%",
  },

  numbersBox: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + * ': {
      marginTop: '30px',
    },
    position: 'relative',
    marginTop: 'auto',
    zIndex: '2',
    '@media (min-width:1921px)': {
      '& > * + * ': {
        marginTop: '2vw',
      },
    },
    [theme.breakpoints.down('md')]: {
      '@media (min-width:600px)': {
        marginTop: '-10vw',
      },
      marginBottom: '40px',
      '& span': {
        fontSize: '14px',
      },
    },
  },
  numbers: {
    width: '100%',
    marginLeft: '100px',
    display: 'flex',
    height: '20px',
    '& h5': {
      fontSize: '14px',
    },
    '@media (min-width:1921px)': {
      marginLeft: '6.9vw',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '0',
    },
  },
  number: {
    display: 'flex',
    justifyContent: 'flex-start',
    cursor: 'pointer',

    '& span': {
      cursor: 'pointer',
      outline: 'none',
    },
    width: '10vw',
    height: '20px',
    [theme.breakpoints.down('md')]: {
      width: '24vw',
      justifyContent: 'center',
    },
    // marginLeft:'auto',
  },
  activeNumber: {
    color: '#828282',
  },
  linesBox: {
    display: 'flex',
    pointerEvents: 'none',
  },
  bottomFirstLine: {
    pointerEvents: 'none',
    display: 'flex',
    height: '1px',
    width: '100px',
    backgroundColor: '#4F4F4F',
    '@media (min-width:1921px)': {
      width: '6.9vw',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  bottomLine: {
    position: 'relative',
    height: '1px',
    backgroundColor: '#4F4F4F',
    '&::before': {
      transformOrigin: '100% 50%',
      position: 'absolute',
      content: `''`,
      display: 'block',
      width: '10px',
      height: '1px',
      top: '0',
      right: '0',
      backgroundColor: '#4F4F4F',
      transform: 'rotate(45deg)',
      '@media (min-width:1921px)': {
        width: '0.6vw',
      },
    },
    '&::after': {
      transformOrigin: '100% 50%',
      position: 'absolute',
      content: `''`,
      display: 'block',
      width: '10px',
      height: '1px',
      top: '0',
      right: '0',
      backgroundColor: '#4F4F4F',
      transform: 'rotate(315deg)',
      '@media (min-width:1921px)': {
        width: '0.6vw',
      },
    },
    transition: '0.5s',
  },
  icon: {
    width: '75px',
    '& img': {
      width: '100%',
    },
    // height:"42px",
    '@media (min-width:1921px)': {
      width: '5.2vw',
      // height:"2.2vw",
    },
    [theme.breakpoints.down('md')]: {
      width: '50px',
    },
  },
  loaderBox: {
    width: '40px',
    height: '40px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    zIndex: '5',
    marginLeft: '-20px',
    marginTop: '-20px',
  },
}));

const Slider = ({ scroll, isFirstEntry, data }) => {
  const dataSlides = useMemo(
    () => getData(data.allMysqlMainPage.nodes),
    [data]
  );
  const breakpoints = useBreakpoint();
  const baseLength = breakpoints.md ? 24 : 5.5;
  const [lineLength, setLineLength] = useState(baseLength);
  const [currentSegment, setCurrentSegment] = useState(0);
  const [activeNumb, setActiveNumb] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);
  const [video, setVideo] = useState(false);

  if (breakpoints && breakpoints.sm) {
    import('../assets/video/start-full-compres.mp4').then((video) => {
      setVideo(video);
    });
  } else {
    import('../assets/video/videoMobile.mp4').then((video) => {
      setVideo(video);
    });
  }

  const param = { scroll, lineLength, breakpoints };
  const classes = useStyles(param);
  const [opacity] = useState(true);
  const vidSegments = {
    0: 1.7,
    1: 4.41,
    2: 7,
    3: 9.7,
  };

  const handleNumberClick = (e, numb = 0) => {
    // let videoNode = videoRef.current.children[0].children[0]
    // if (videoNode) {
    //   videoNode.play()
    // }
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

  const videoRef = useRef(null)

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

  useEffect(() => {
    let videoNode = videoRef.current.children[0].children[0]
    console.log( videoNode)
    if (videoNode) {
      videoNode.autoplay = true;
      videoNode.setAttribute('muted', 'true')
      videoNode.setAttribute('key', video.default);
      videoNode.setAttribute('playsinline', 'true');
    }
    let numbers = document.getElementsByClassName(classes.number);
    let numberArr = Array.from(numbers);
    let intervalId = setTimeout(() => {
      numberArr[currentSegment + 1 === 4 ? 0 : currentSegment + 1].click();
    }, 4000);
    return function cleanup() {
      clearInterval(intervalId);
    };
  }, [currentSegment,videoRef]);
 

  return (
    <Box component='section' className={classes.content}>
      <Box className={classes.midleBlock}>
        <Box className={classes.textBlock}>
          <TransitionGroup className={classes.articleBox}>
            <CSSTransition
              key={dataSlides.intro[activeNumb].MIGX_id}
              in={opacity}
              appear={true}
              timeout={500}
              classNames='fade'
            >
              <Box className={classes.article}>
                <Typography
                  className={classes.header}
                  variant='h1'
                  component='h1'
                  dangerouslySetInnerHTML={{
                    __html: `${validateText(
                      dataSlides.intro[activeNumb].title
                    )}`,
                  }}
                ></Typography>

                <Box className={classes.icon}>
                  {activeNumb === 0 ? (
                    <img src={getPublicPath(data, dataSlides.intro[0].icon)} />
                  ) : activeNumb === 1 ? (
                    <img src={getPublicPath(data, dataSlides.intro[1].icon)} />
                  ) : activeNumb === 2 ? (
                    <img src={getPublicPath(data, dataSlides.intro[2].icon)} />
                  ) : activeNumb === 3 ? (
                    <img src={getPublicPath(data, dataSlides.intro[3].icon)} />
                  ) : null}
                </Box>

                <Typography
                  className={classes.text}
                  variant='body1'
                  component='p'
                >
                  {dataSlides.intro[activeNumb].text}
                </Typography>
              </Box>
            </CSSTransition>
          </TransitionGroup>

          <Box  ref={videoRef} className={classes.mainVideoBox}>
            {/* {!video.default ? (
              <div  className={classes.loaderBox}>
                <CircularProgress />
              </div>
            ) : null} */}
            {/* <div className={classes.fon}></div> */}
            {/* {!video.default ? null : ( */}
              <ReactPlayer
                height='100%'
                width='100%'
                url={video.default}
                loop={true}
                playing={playVideo}
                progressInterval={10}
                volume={0.5}
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
            {/* )} */}
          </Box>

          <Box className={classes.numbersBox}>
            <div className={classes.numbers}>
              {numbers.map((item, index) => (
                <Typography
                  key={index}
                  className={
                    index <= activeNumb
                      ? `${classes.number} ${classes.activeNumber}`
                      : `${classes.number}`
                  }
                  variant='h5'
                  component='p'
                  onClick={handleNumberClick}
                  onKeyDown={handleNumberClick}
                >
                  <span role='button' tabIndex='0' key={index}>
                    {item}
                  </span>
                </Typography>
              ))}
            </div>
            <Box className={classes.linesBox}>
              <span className={classes.bottomFirstLine}></span>
              <span
                className={classes.bottomLine}
                style={{
                  width: `${lineLength}vw`,
                }}
              ></span>
            </Box>
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
