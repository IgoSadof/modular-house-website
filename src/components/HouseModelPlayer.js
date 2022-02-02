import './global.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import ReactPlayer from 'react-player/lazy';

import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import CircularProgress from '@material-ui/core/CircularProgress';
// import { CircleSlider } from 'react-circle-slider';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: '50px ',
    boxSizing: 'border-box',
    position: 'relative',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('md')]: {},
  },
  elips: {
    boxSizing: 'border-box',
    top: '25%',
    left: '10%',
    width: '80%',
    height: '50%',
    borderRadius: '50%',
    position: 'absolute',
    border: '1px solid',
    zIndex: '1',
  },
  elipsPoint: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: '#4F4F4F',
    cursor: 'pointer',
    draggable: 'true',
  },
  videoBox: {
    position: 'relative',
    zIndex: '0',
  },
  CircleSliderBox: {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: '1',
  },
}));

const HouseModelPlayer = ({ video }) => {
  const breakpoints = useBreakpoint();
  const [playVideo, setPlayVideo] = useState(false);
  console.log(video);

  const param = { breakpoints };
  const classes = useStyles(param);

  return (
    <Box className={classes.content}>
      {!video ? (
        <div className={classes.loaderBox}>
          <CircularProgress />
        </div>
      ) : null}
      {/* <div className={classes.fon}></div> */}
      {!video ? null : (
        <>
          <Box className={classes.elips}>
          <Box className={classes.elipsPoint}></Box>
          {/* <Box className={classes.CircleSliderBox}>
            <CircleSlider
              value={100}
              size={500}
              progressColor='transparent'
              knobRadius='10px'
              circleColor='#4F4F4F'
            />
          </Box> */}
          </Box>
          <Box className={classes.videoBox}>
            <ReactPlayer
              height='100%'
              width='100%'
              url={video}
              loop={true}
              playing={playVideo}
              progressInterval={10}
              muted={true}
              onProgress={({ playedSeconds }) => {}}
              // onReady={() => {
              //   setPlayVideo(true);
              // }}
            />
          </Box>
        </>
      )}
    </Box>
  );
};
export default HouseModelPlayer;
