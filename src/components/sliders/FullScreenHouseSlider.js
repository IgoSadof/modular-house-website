import React, { useRef, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SquareButton from '../buttons/SquareButton';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { SwiperSlide } from 'swiper/react';
import getPublicPath from '../../utils/getPublicPath';
import HouseFotosSlider from '../sliders/HouseFotosSlider';

const useStyles = makeStyles((theme) => ({
  sliderConteiner: {
    position: 'relative',
    height: (param) => (param.fullHeight ? '100vh' : '100%'),
    '&:first-child img': {
      objectFit: 'cover',
      objectPosition: '50% 76%',
    },
    [theme.breakpoints.down('md')]: {
      height: (param) => '100%',
    },
  },
  sliderContent: {
    height: '100%',
    zIndex: '1',
    position: 'relative',
    '& img': {
      width: '100%',
      objectFit: 'cover',
    },
    [theme.breakpoints.down('md')]: {
      height: (param) => (param.fullHeight ? '70vw' : '100%'),
      '@media (orientation: landscape)': {
        height: '65vh',
      },
    },
  },

  descWraper: {
    width: '100%',
    display: 'flex',
    position: 'absolute',
    left: '0',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    bottom: '80px',
    zIndex: '1',
    pointerEvents: 'none',
    cursor: 'pointer',
    '& $buttons': {
      position: 'relative',
      zIndex: '4',
      bottom: '0',
      left: '0',
      // marginLeft: (param) => param.title? 'auto':'4%',
      marginRight: '0',
    },
    '@media (min-width:1921px)': {
      bottom: '4.2vw',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      padding: (param) =>
        param.mobileButtons || param.sidesDesctopButtons
          ? '0'
          : '20px 10% 0px 10%',
      position: (param) =>
        param.mobileButtons || param.sidesDesctopButtons
          ? 'absolute'
          : 'relative',
      bottom: (param) =>
        param.mobileButtons || param.sidesDesctopButtons ? '50%' : '0',
    },
  },
  sidesButtons: {
    '& $buttons': {
      width: '100%',
      justifyContent: 'space-between',
      transform: 'translate(0, 50%)',
      '& $button:first-child': {
        transform: 'translate(-101%, 0)',
      },
      '& $button:last-child': {
        transform: 'translate(101%, 0)',
      },
    },

    flexDirection: 'column',
    padding: '0',
    position: 'absolute',
    bottom: '50%',
  },
  mainImgItem: {
    height: '100%',
    position: 'relative',
  },

  titleBox: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      '& h1': {
        fontSize: '36px',
      },
    },
  },
  mouseIconBox: {
    pointerEvents: 'visible',
    margin: 'auto',
    cursor: 'pointer',
    position: 'absolute',
    left: '50%',
    right: '50%',
    marginLeft: '24px',
  },
  mouse: {
    position: 'relative',
    width: '30px',
    height: '48px',
    border: '0.2vw solid #E2E2E2',
    borderRadius: '40px',
    '@media (min-width:1921px)': {
      width: '1.5vw',
      height: '2.5vw',
      borderRadius: '1.1vw',
    },
    '&::before': {
      content: `' '`,
      position: 'absolute',
      left: '50%',
      marginLeft: '-2px',
      top: '20%',
      width: '4px',
      height: '6px',
      borderRadius: '3px',
      backgroundColor: '#E2E2E2',
      animation: 'mouse  0.7s infinite ease-in-out alternate',
      '@media (min-width:1921px)': {
        width: '1.5vw',
        height: '2.5vw',
        borderRadius: '1.1vw',
        width: '0.25vw',
        height: '0.35vw',
        marginLeft: '-0.1vw',
      },
    },
  },

  descBox: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      padding: '0 10%',
      marginTop: '15px',
      '& > * + * ': {
        marginLeft: '10px',
      },
      '@media (orientation: landscape)': {
        justifyContent: 'space-around',
      },
    },
  },
  title: {
    textAlign: 'left',
    fontSize: '48px',
    color: '#E2E2E2',
    marginLeft: '100px',
    width: '28vw',
    '@media (min-width:1921px)': {
      marginLeft: '5.2vw',
      fontSize: '2.5vw',
    },
    [theme.breakpoints.down('md')]: {
      color: '#4F4F4F',
      marginLeft: '0',
      width: '100%',
    },
  },
  buttons: {
    position: 'absolute',
    display: 'flex',
    '& > * + * ': {
      marginLeft: '12px',
    },
    left: '14%',
    bottom: '20px',
    zIndex: '2',
    '@media (min-width:1921px)': {
      bottom: '1.1vw',
      '& > * + * ': {
        marginLeft: '0.6vw',
      },
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      justifyContent: 'space-between',
      left: '0%',
      bottom: '50%',
      transform: 'translate(0, 50%)',
    },
  },
}));

const FullScreenHouseSlider = ({
  title,
  desc,
  arr,
  data,
  pagination,
  mobileButtons,
  mouseIcon,
  autoSlidesPerView,
  fullHeight = true,
  sidesDesctopButtons,
}) => {
  // console.log(sidesDesctopButtons)
  const breakpoints = useBreakpoint();
  const sliderRef = useRef(null);
  const param = { title, mobileButtons, fullHeight, sidesDesctopButtons };
  const classes = useStyles(param);

  const handleClickLeft = () => {
    sliderRef.current.swiper.slidePrev();
  };
  const handleClickRight = () => {
    sliderRef.current.swiper.slideNext();
  };

  const gallery = useMemo(() => {
    return arr?.map((item, index) => {
      return (
        <SwiperSlide className={classes.mainImgItem} key={index}>
          <img
            className={classes.mainImgSlider}
            src={getPublicPath(data, item.image)}
            alt='img'
          />
        </SwiperSlide>
      );
    });
  }, [data, classes.mainImgSlider, classes.mainImgItem]);

  const handleMouseClick = () => {
    if (window) {
      window.scrollTo({
        top: window.screen.availHeight - 100,
        behavior: 'smooth',
      });
    }
  };
  return (
    <Box
      components='section'
      className={` ${classes.BlockFullscreen} ${classes.sliderConteiner}`}
    >
      <Box className={classes.sliderContent}>
        {arr ? (
          <HouseFotosSlider
            houseRef={sliderRef}
            listItem={gallery}
            pagination={pagination}
            autoSlidesPerView={autoSlidesPerView}
          />
        ) : null}
      </Box>
      <Box
        className={
          sidesDesctopButtons && !breakpoints.md
            ? ` ${classes.descWraper} ${classes.sidesButtons}`
            : classes.descWraper
        }
      >
        {title ? (
          <Box className={classes.titleBox}>
            <Typography
              variant='h1'
              color='textSecondary'
              className={classes.title}
            >
              {title}
            </Typography>
          </Box>
        ) : null}

        {mouseIcon && !breakpoints.md ? (
          <Box className={`${classes.mouseIconBox}`}>
            <Box className={classes.mouse} onClick={handleMouseClick}></Box>
          </Box>
        ) : null}

        {!breakpoints.md ? (
          <Box className={classes.buttons} style={{ marginLeft: 'auto' }}>
            <SquareButton
              variant={'contained'}
              click={handleClickLeft}
              less
              color='#4F4F4F'
              bgColor='#D1D1D1'
            />
            <SquareButton
              variant={'contained'}
              click={handleClickRight}
              great
              color='#4F4F4F'
              bgColor='#D1D1D1'
            />
          </Box>
        ) : mobileButtons ? (
          <Box className={classes.buttons} style={{ marginLeft: 'auto' }}>
            <SquareButton
              variant={'contained'}
              click={handleClickLeft}
              less
              color='#4F4F4F'
              bgColor='#D1D1D1'
            />
            <SquareButton
              variant={'contained'}
              click={handleClickRight}
              great
              color='#4F4F4F'
              bgColor='#D1D1D1'
            />
          </Box>
        ) : null}
      </Box>
      {breakpoints.md && desc ? (
        <Box className={classes.descBox}>
          <Typography variant='body1'> {desc}</Typography>
        </Box>
      ) : null}
    </Box>
  );
};
export default FullScreenHouseSlider;
