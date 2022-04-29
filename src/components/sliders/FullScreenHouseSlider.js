import React, { useRef, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SquareButton from '../buttons/SquareButton';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { SwiperSlide } from 'swiper/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import getImg from '../../utils/getImg';
import HouseFotosSlider from '../sliders/HouseFotosSlider';
import Mouse from '../svg/Mouse';

const useStyles = makeStyles((theme) => ({
  sliderConteiner: {
    position: 'relative',
    height: '100vh',
    '&:first-child img':{
      objectFit: 'cover',
      objectPosition: '50% 76%',
    },
    [theme.breakpoints.down('md')]: {
      height: '100%',
    },
  },
  sliderContent: {
    height: '100%',
    zIndex: '1',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
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
    paddingLeft: '10%',
    bottom: (param) => (param.title ? '80px' : '20px'),
    zIndex: '1',
    '& $buttons': {
      position: 'relative',
      zIndex: '4',
      bottom: '0',
      left: '0',
      // marginLeft: (param) => param.title? 'auto':'4%',
      marginRight: '10%',
    },
    '@media (min-width:1921px)': {
      bottom: (param) => (param.title ? '4.2vw' : '1.4vw'),
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      padding: (param) => (param.mobileButtons ? '0' : '20px 10% 0px 10%'),
      position: (param) => (param.mobileButtons ? 'absolute' : 'relative'),
      bottom: (param) => (param.mobileButtons ? '50%' : '0'),
    },
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
    margin:'auto',
  },

  descBox: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      padding:'0 10%',
      marginTop: '15px',
      gap: '10px',
      '@media (orientation: landscape)': {
        justifyContent: 'space-around',
      },
    },
  },
  title: {
    textAlign: 'left',
    color: '#E2E2E2',
    marginLeft: '100px',
    width: '28vw',
    '@media (min-width:1921px)': {
      marginLeft: '5.2vw',
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
    gap: '12px',
    left: '14%',
    bottom: '20px',
    zIndex: '2',
    '@media (min-width:1921px)': {
      bottom: '1.1vw',
      gap: '0.6vw',
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
}) => {
  const breakpoints = useBreakpoint();
  const sliderRef = useRef(null);
  const param = { title, mobileButtons };
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
          <GatsbyImage
            className={classes.mainImgSlider}
            image={getImg(data, item.image)}
            alt='img'
          ></GatsbyImage>
        </SwiperSlide>
      );
    });
  }, [data, classes.mainImgSlider, classes.mainImgItem]);
  return (
    <Box
      components='section'
      className={` ${classes.BlockFullscreen} ${classes.sliderConteiner}`}
    >
      <Box className={classes.sliderContent}>
        <HouseFotosSlider
          houseRef={sliderRef}
          listItem={gallery}
          pagination={pagination}
        />
      </Box>
      <Box className={classes.descWraper}>
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
          <Box className={classes.mouseIconBox}>
            <Mouse />
          </Box>
        ) : null}

        {!breakpoints.md ? (
          <Box
            className={classes.buttons}
            style={{ marginLeft: title ? 'auto' : '4%' }}
          >
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
