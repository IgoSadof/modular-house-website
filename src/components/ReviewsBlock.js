import React, { useState, useRef, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SquareButton from './buttons/SquareButton';
import ReviewsSlider from './sliders/ReviewsSlider';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Quote from './svg/Quote';
import TitleWithLine from '../components/TitleWithLine';
import { customFontsSize } from '../config/modularHouseTheme';
import getPublicPath from '../utils/getPublicPath';

const useStyles = makeStyles((theme) => ({
  Block: {
    display: 'flex',
    gap: '60px',
    marginTop: '120px',
    paddingRight: '10vw',
    '@media (min-width:1921px)': {
      gap: '4.2vw',
      marginTop: '8.3vw',
    },

    [theme.breakpoints.down('md')]: {
      marginTop: '80px',
      flexDirection: 'column',
      width: '100%',
      padding: '0 10%',
      gap: '40px',
      '& $titleBox': {
        right: '-12%',
        position: 'relative',
      },
    },
  },
  titleBox: {
    display: 'flex',
    // gap: "20px",
    flexDirection: 'row',
    flexShrink: '0',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row-reverse',
      marginLeft: 'auto',
      width: '100%',
    },
  },
  BlockColumn: {
    width: '28vw',
    display: 'flex',
    gap: '20px',
    marginLeft: '100px',
    justifyContent: 'space-between',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      order: '3',
      marginLeft: '0',
      width: '100%',
    },
  },
  commentBoxWrap: {
    position: 'relative',
    width: '100%',
    height: '30%',
    gap: '20px',
    [theme.breakpoints.down('md')]: {
      height: '200px',
    },
  },
  commentBox: {
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
  },
  commentTitleBox: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: customFontsSize.h6.regular,
    lineHeight: 1.2,
    fontWeight: 600,
    '@media (min-width:1921px)': {
      fontSize: customFontsSize.h6.adaptiv,
    },
  },
  place: {
    marginTop: '10px',
    '@media (min-width:1921px)': {
      marginTop: '0.7vw',
    },
  },
  message: {
    marginTop: '20px',
    '@media (min-width:1921px)': {
      marginTop: '1.4vw',
    },
    [theme.breakpoints.down('md')]: {
      height: '150px',
      overflow: 'overlay',
    },
  },
  buttons: {
    display: 'flex',
    gap: '12px',
    '@media (min-width:1921px)': {
      gap: '0.8vw',
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  title: {
    marginTop: '140px',
    width: '165px',
  },
  mediaBlock: {
    display: 'flex',
    marginLeft: 'auto',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      order: '2',
      marginRight: 'auto',
      height: '48vh',
    },
  },
  mediaBlock_unborder: {
    border: 'none',
  },
  reviewVideoBox: {
    position: 'relative',
    width: '100%',
    height: '500px',
    maxHeight: '500px',
    '@media (min-width:1921px)': {
      height: '34.7vw',
      maxHeight: '34.7vw',
    },

    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '100%',
    },
  },
  reviewVideo: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  secondBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 'auto',
    height: '176px',
    marginLeft: '20px',
    '@media (min-width:1921px)': {
      height: '12vw',
      marginLeft: '1.04vw',
    },
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
  },
  imagesBoxes: {
    width: '360px',
    height: '100%',
    '@media (min-width:1921px)': {
      width: '25vw',
    },
  },
  reviewDate: {
    display: 'flex',
    marginTop:'20px',
    justifyContent: 'space-between',
    alignItems: 'end',
    [theme.breakpoints.down('md')]: {
      marginTop:'40px',
    },
    
  },
}));

const ReviewsBlock = ({ data, reviews }) => {
  const breakpoints = useBreakpoint();
  const classes = useStyles();

  const [review, setReview] = useState(0);
  const [reviewVideo, setReviewVideo] = useState(reviews.length - 1);
  const [opacity] = useState(true);

  const handleClickLeft = () => {
    setReview((state) => (state - 1 < 0 ? reviews.length - 1 : state - 1));
    setReviewVideo((state) => (state + 1 > reviews.length - 1 ? 0 : state + 1));
    if(breakpoints.md) myRef.current.swiper.slideNext();
  };

  const handleClickRight = () => {
    setReview((state) => (state + 1 > reviews.length - 1 ? 0 : state + 1));
    setReviewVideo((state) => (state - 1 < 0 ? reviews.length - 1 : state - 1));
    if(!breakpoints.md) myRef.current.swiper.slidePrev();
  };
  const myRef = useRef(null);

  return (
    <Box component='section' className={classes.Block}>
      {!breakpoints.md ? (
        <>
          <Box className={classes.titleBox}>
            <Box className={classes.BlockColumn}>
              <TitleWithLine title='РЕАЛЬНЫЕ ОТЗЫВЫ' />

              <TransitionGroup className={classes.commentBoxWrap}>
                <CSSTransition
                  key={reviewVideo}
                  in={opacity}
                  appear={true}
                  timeout={500}
                  classNames='fade'
                >
                  <Box className={classes.commentBox}>
                    <Box className={classes.commentTitleBox}>
                      <Box>
                        <Typography
                          className={classes.name}
                        >{`${reviews[review].name}`}</Typography>
                        <Typography className={classes.place}>
                          {`${reviews[review].place}, ${reviews[
                            review
                          ].data.slice(6)}`}
                        </Typography>
                      </Box>
                      <Quote
                        width={breakpoints.xxl ? '3vw' : 54}
                        height={breakpoints.xxl ? '3vw' : 40}
                      />
                    </Box>
                    <Typography variant='body1' className={classes.message}>
                      {reviews[review].text}
                    </Typography>
                  </Box>
                </CSSTransition>
              </TransitionGroup>

              <Box className={classes.reviewDate}>
                <Box className={classes.buttons}>
                  <SquareButton
                    variant={'outlined'}
                    click={handleClickLeft}
                    less
                  />
                  <SquareButton
                    click={handleClickRight}
                    great
                    variant={'outlined'}
                  />
                </Box>
                <Typography variant='h5' component='p'>
                  {`${review + 1 > 9 ? review + 1 : `0${review + 1}`}/${
                    reviews.length > 9 ? reviews.length : `0${reviews.length}`
                  }`}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={classes.mediaBlock}>
            <TransitionGroup className={classes.reviewVideoBox}>
              <CSSTransition
                key={reviewVideo}
                in={opacity}
                appear={true}
                timeout={500}
                classNames='fade'
              >
                <img
                  className={classes.reviewVideo}
                  src={getPublicPath(
                    data,
                    `${reviews[reviewVideo].foto.substr(
                      reviews[reviewVideo].foto.search(/images\//g)
                    )}`
                  )}
                  alt='img'
                />
              </CSSTransition>
            </TransitionGroup>

            <Box className={classes.secondBlock}>
              <Box className={classes.imagesBoxes}>
                <ReviewsSlider myRef={myRef} reviews={reviews} data={data} />
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box className={classes.titleBox}>
            <TitleWithLine title='РЕАЛЬНЫЕ ОТЗЫВЫ' />
          </Box>
          <Box className={classes.BlockColumn}>
            <TransitionGroup className={classes.commentBoxWrap}>
              <CSSTransition
                key={reviewVideo}
                in={opacity}
                appear={true}
                timeout={500}
                classNames='fade'
              >
                <Box className={classes.commentBox}>
                  <Box className={classes.commentTitleBox}>
                    <Box>
                      <Typography
                        className={classes.name}
                      >{`${reviews[review].name} ${reviews[review].place}`}</Typography>
                      <Typography className={classes.place}>
                        {`${reviews[review].place}, ${reviews[
                          review
                        ].data.slice(6)}`}
                      </Typography>
                    </Box>
                    <Quote
                      width={breakpoints.xxl ? '3vw' : 54}
                      height={breakpoints.xxl ? '3vw' : 40}
                    />
                  </Box>

                  <Typography variant='body1' className={classes.message}>
                    {reviews[review].text}
                  </Typography>
                </Box>
              </CSSTransition>
            </TransitionGroup>

            <Box className={classes.reviewDate}>
              <Box className={classes.buttons}>
                <SquareButton
                  variant={'outlined'}
                  click={handleClickLeft}
                  less
                />
                <SquareButton
                  click={handleClickRight}
                  great
                  variant={'outlined'}
                />
              </Box>
              <Typography variant='h5' component='p'>
                {`${reviews[review].data.slice(0, 2)}/${reviews[
                  review
                ].data.slice(3, 5)} `}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.mediaBlock}>
            <TransitionGroup className={classes.reviewVideoBox}>
              <CSSTransition
                key={reviewVideo}
                in={opacity}
                appear={true}
                timeout={500}
                classNames='fade'
              >
                <img
                  className={classes.reviewVideo}
                  src={getPublicPath(
                    data,
                    `${reviews[reviewVideo].foto.substr(
                      reviews[reviewVideo].foto.search(/images\//g)
                    )}`
                  )}
                  alt='img'
                />
              </CSSTransition>
            </TransitionGroup>

            {/* <Box className={classes.secondBlock}>
              <Box className={classes.imagesBoxes}>
                <ReviewsSlider myRef={myRef} reviews={reviews} data={data} />
              </Box>
            </Box> */}
          </Box>
        </>
      )}
    </Box>
  );
};
export default ReviewsBlock;
