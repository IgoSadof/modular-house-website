import './css/customRange.css';
import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import ReactPlayer from 'react-player';

import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import CircularProgress from '@material-ui/core/CircularProgress';
// import { CircleSlider } from 'react-circle-slider';

const useStyles = makeStyles((theme) => ({
  content: {
    // boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '0',
    },
  },
  loaderBox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SliderBox: {
    display: 'flex',
    alignItems: 'center',
    width: '90%',
    margin: '3vw auto 0 auto',
  },
  videoBox: {
    height: '70vh',
    '@media (max-width:1200px)': {
      '&': {
        height: '25vw',
      },
    },
    overflow: 'hidden',
    '& video': {
      transform: 'scale(1.2)',
    },
  },
  leftArrow: {
    width: '0.7vw',
    height: '0.7vw',
    borderLeft: '1px solid #4F4F4F',
    borderBottom: '1px solid #4F4F4F',
    transform: 'rotate(45deg) translateY(-0.1vw)',
    [theme.breakpoints.down('md')]: {
      width: '10px',
      height: '10px',
      transform: 'rotate(45deg) translateY(-0.1vw)',
    },
  },
  rightArrow: {
    width: '0.7vw',
    height: '0.7vw',
    borderRight: '1px solid #4F4F4F',
    borderTop: '1px solid #4F4F4F',
    transform: 'rotate(45deg) translateY(-0.1vw)',
    [theme.breakpoints.down('md')]: {
      width: '10px',
      height: '10px',
      transform: 'rotate(45deg) translateY(-0.1vw)',
    },
  },
}));

const HouseModelPlayer = ({ video, keyId }) => {
  const breakpoints = useBreakpoint();
  const [rangeValue, setRangeValue] = useState(0.5);
  const param = { breakpoints };
  const classes = useStyles(param);

  const changeRangeValue = (event) => {
    setRangeValue(event.target.value);
    playerRef.current.seekTo(event.target.value);
  };
  const playerRef = useRef(null);
  const playerBoxRef = useRef(null);
  useEffect(() => {
    let video = playerBoxRef.current?.children[0]?.children[0];
    if (video) {
      video.setAttribute('mutted', true);
      video.setAttribute('key', keyId);
    }
  }, [keyId, playerRef]);

  return (
    <Box className={classes.content}>
      {!video ? (
        <div className={classes.loaderBox}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <Box ref={playerBoxRef} className={classes.videoBox}>
            <ReactPlayer
              key={keyId}
              ref={playerRef}
              height='100%'
              width='100%'
              url={video}
              fraction='true'
              played={rangeValue}
              playing={false}
              progressInterval={10}
              muted={true}
            />
          </Box>
          <Box className={classes.SliderBox}>
            <span className={classes.leftArrow}></span>
            <input
              type='range'
              min='0'
              max='1'
              step='0.01'
              value={rangeValue}
              onChange={changeRangeValue}
            />
            <span className={classes.rightArrow}></span>
          </Box>
        </>
      )}
    </Box>
  );
};
export default HouseModelPlayer;
