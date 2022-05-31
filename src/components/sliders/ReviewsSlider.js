import React, { useMemo } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { makeStyles } from '@material-ui/core/styles';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Mousewheel, FreeMode } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import getPublicPath from '../../utils/getPublicPath';

SwiperCore.use([Mousewheel, FreeMode]);

const useStyles = makeStyles((theme) => ({
  imgBox: {
    width: '176px',
    height: '100%',
    '@media (min-width:1921px)': {
      width: '12vw',
    },
    [theme.breakpoints.down('md')]: {},
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: '0.5',
  },
}));

const ReviewsSlider = ({ data, reviews, myRef }) => {
  const classes = useStyles();
  const breakpoints = useBreakpoint();
  let gap = Math.round(20/+window?.screen?.width*5000);


  const listItem = useMemo(() => {
    return reviews?.map((item, index) => {
      return (
        <SwiperSlide className={classes.imgBox} key={index}>
          <img
            className={classes.img}
            src={getPublicPath(data, item.foto)}
            alt='house'
          />
        </SwiperSlide>
      );
    });
  }, [data]);

  return (
    <Swiper
      ref={myRef}
      // slidesPerView={breakpoints.m ? (breakpoints.xs ? "2" : "3") : "5"}
      slidesPerView={2}
      grabCursor={true}
      loop={true}
      mousewheel={breakpoints.md ? false : true}
      // direction={breakpoints.md? "horizontal" : "vertical"}
      // freeMode={breakpoints.s ? true : false}
      spaceBetween={breakpoints.xxl ?gap:20}
    >
      {listItem}
    </Swiper>
  );
};

export default ReviewsSlider;
