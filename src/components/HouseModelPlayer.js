import './css/customRange.css';
import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import ReactPlayer from 'react-player/lazy';

import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import CircularProgress from '@material-ui/core/CircularProgress';
// import { CircleSlider } from 'react-circle-slider';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: '50px ',
    // boxSizing: 'border-box',
    position: 'relative',
    width: '100%',
    height: '80%',
    [theme.breakpoints.down('md')]: {},
  },
  SliderBox: {
    display:"flex",
    alignItems:"center",
    width: '90%',
    margin: '3vw auto 0 auto',
  },
  videoBox:{
    "& video":{
      objectFit: "cover",
    }
  },
  leftArrow:{
    width:"0.7vw",
    height: "0.7vw",
    borderLeft:"1px solid #4F4F4F",
    borderBottom:"1px solid #4F4F4F",
    transform: "rotate(45deg) translateY(-0.1vw)",
  },
  rightArrow:{
    width:"0.7vw",
    height: "0.7vw",
    borderRight:"1px solid #4F4F4F",
    borderTop:"1px solid #4F4F4F",
    transform: "rotate(45deg) translateY(-0.1vw)",
  }
}));

const HouseModelPlayer = ({ video }) => {
  const breakpoints = useBreakpoint();
  const [rangeValue, setRangeValue] = useState(0.5);
  const param = { breakpoints };
  const classes = useStyles(param);

  const changeRangeValue = (event) => {
    setRangeValue(event.target.value);
    playerRef.current.seekTo(event.target.value)
  };
  const playerRef = useRef(null)
  

  return (
    <Box className={classes.content}>
      {!video ? (
        <div className={classes.loaderBox}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <Box className={classes.videoBox}>
            <ReactPlayer
              ref={playerRef}
              height='50vh'
              width='100%'
              url={video}
              fraction="true"
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
              step="0.01"
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
