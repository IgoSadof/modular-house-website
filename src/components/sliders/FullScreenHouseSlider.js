import React, { useRef, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SquareButton from '../buttons/SquareButton';
import RegularButton from '../buttons/RegularButton.js';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
// import { SwiperSlide } from 'swiper/react';
import getPublicPath from '../../utils/getPublicPath';
import HouseFotosSlider from '../sliders/HouseFotosSlider';
import arrow from '../../assets/images/icons/arrow.svg';

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
    '& div':{
      height:'100%',
    },
    '& img': {
      width:(param) => (param.autoSlidesPerView ? 'auto' : '100%'),
      objectFit: 'cover',
      height:'100%',
      userDrag: 'none',
      userSelect: 'none',
      '-webkit-user-drag': 'none',
      '-moz-user-select': 'none',
      '-webkit-user-select': 'none',
      '-ms-user-select': 'none',
      [theme.breakpoints.down('md')]: {
        width:(param) => '100%',
      },
    },
    [theme.breakpoints.down('md')]: {
      width:(param) => '100%',
      height: (param) => (param.fullHeight ? '100vw' : '100%'),
      '@media (orientation: landscape)': {
        height: '65vh',
      },
    },
    '@media (max-width:960px)': {
      height: 'auto !important',
      '& .slick-track': {
        width: '100% !important',
        transform: 'none !important',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        '& .slick-slide':{
          display: 'block',
          width: '100% !important',
          marginBottom: '10px',
          '&.slick-cloned':{
            display: 'none',
          },
        },
      },
      sidesButtons:{
        display: 'none !important',
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
          : '40px 10% 0px 10%',
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
    },

    flexDirection: 'column',
    padding: '0',
    position: 'absolute',
    bottom: '50%',
  },
  mainImgItem: {
    height: '100%',
    position: 'relative',
    paddingRight:(param) => (param.autoSlidesPerView ? '14px' : '0'),
    '@media (min-width:1921px)': {
      paddingRight:(param) => (param.autoSlidesPerView ? '0.72vw' : '0'),
    },
    [theme.breakpoints.down('md')]: {
      paddingRight:(param) => '0',
    },
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
    width: '44px',
    height: '22px',
    margin: 'auto',
    position: 'absolute',
    left: '0',
    right: '0',
    bottom: '26px',
    '& img': {
      width: '100%',
    },
    animation: 'arrow  0.7s infinite ease-in-out alternate',
    '@media (min-width:1921px)': {
      width: '2.3vw',
      height: '1.2vw',
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
    marginTop: 'auto',
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
  butligt:{
    '& > button': {
      padding: '4px 46px',
      boxSizing: 'content-box',
      marginBottom: '6px',

      background: 'transparent',
      borderColor: '#f2f2f2',
      color: '#f2f2f2',
      '&:hover': {
        background: '#f2f2f2',
        color: '#121212',
      },
      '@media (min-width:1921px)': {
          padding: '0.1vw 2.2vw',
      },
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
  middleIcon,
  autoSlidesPerView,
  fullHeight = true,
  sidesDesctopButtons,
  initialSlide,
  enabled,
  oneButton, 
  outSideButtons,
  ancorLink,
  lang
}) => {
  const breakpoints = useBreakpoint();
  const sliderRef = useRef(null);
  const param = {
    title,
    mobileButtons,
    fullHeight,
    sidesDesctopButtons,
    autoSlidesPerView
  };
  const classes = useStyles(param);

  const handleClickLeft = () => {
    sliderRef.current.slickPrev();
  };
  const handleClickRight = () => {
    
    sliderRef.current.slickNext();
  };
  

  const gallery = useMemo(() => {
    return arr?.map((item, index) => {
      return (
        <div className={classes.mainImgItem} key={index} >
          <img
            className={classes.mainImgSlider}
            src={getPublicPath(data, item.image)}
            alt='house'
            data-number={index}
          />
        </div>
      );
    });
  }, [data, classes.mainImgSlider, arr, classes.mainImgItem]);

  const handleMouseClick = () => {
    // console.log(ancorLink.current)
    if (window) {
      window.scrollTo({
        top: window.screen.availHeight - 100,
        behavior: 'smooth',
      });
    }
  };
  

  const handleSingleButtonClick = () => {
    if (window) {
      window.scrollTo({
        top: ancorLink.current.getBoundingClientRect().top,
        behavior: 'smooth',
      });
    }
  }
  return (
    <Box
      components='section'
      className={` ${classes.BlockFullscreen} ${classes.sliderConteiner}`}
    >
      <Box className={` ${classes.sliderContent} sliderWrapper`}>
        {arr ? (
          <HouseFotosSlider
            houseRef={sliderRef}
            listItem={gallery}
            pagination={pagination}
            autoSlidesPerView={autoSlidesPerView}
            enabled={enabled}
            initialSlide={initialSlide}
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

        {middleIcon && !breakpoints.md ? (
          <Box className={`${classes.mouseIconBox}`} onClick={handleMouseClick}>
            <img src={arrow} alt='arrow' />
            {/* <Box className={classes.mouse} onClick={handleMouseClick}></Box> */}
          </Box>
        ) : null}

        {!breakpoints.md ? (
          <Box className={`${classes.buttons} ${classes.butligt}`} style={{ marginLeft: 'auto' }}>
            {oneButton ? (
              <RegularButton
                click={() => handleSingleButtonClick()}
                bgColor='transparent'
                bdColor='#F2F2F2'
                color='#F2F2F2'
              >
                {lang === 'EN' ? 'Check available dates' : 'Узнать свободные даты'} 
              </RegularButton>
            ) : (
              <>
                <Box style={{ transform: outSideButtons? 'translate(-101%, 0)':'null'}}>
                  <SquareButton
                    variant={'contained'}
                    click={handleClickLeft}
                    less
                    color='#4F4F4F'
                    bgColor='primary.fon'
                  />
                </Box>
                <Box style={{ transform: outSideButtons? 'translate(101%, 0)': 'null'}}>
                  <SquareButton
                    variant={'contained'}
                    click={handleClickRight}
                    great
                    color='#4F4F4F'
                    bgColor='primary.fon'
                  />
                </Box>
              </>
            )}
          </Box>
        ) : mobileButtons ? (
          <Box className={classes.buttons} style={{ marginLeft: 'auto' }}>
            <SquareButton
              variant={'contained'}
              click={handleClickLeft}
              less
              color='#4F4F4F'
              bgColor='primary.fon'
            />
            <SquareButton
              variant={'contained'}
              click={handleClickRight}
              great
              color='#4F4F4F'
              bgColor='primary.fon'
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
