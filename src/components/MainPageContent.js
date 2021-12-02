import './global.css';
import React, { useState, useRef, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HouseSlider from "./sliders/HouseSlider";
import Accordions from './Accordion';
import SquareButton from './buttons/SquareButton';
import ContactsBlock from '../components/ContactsBlock';
import Form from '../components/Form';
import ReviewsSlider from './sliders/ReviewsSlider';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import getData from '../utils/getData';
import { GatsbyImage } from 'gatsby-plugin-image';
import OneImageAutoSlider from './sliders/OneImageAutoSlider';
import Quote from './svg/Quote';
import getImg from '../utils/getImg';
import TitleWithLine from '../components/TitleWithLine';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '120px',
    overflow: 'hidden',
  },
  Block: {
    display: 'flex',
    gap: '60px',
    marginTop: '120px',
    paddingRight: '10vw',

    [theme.breakpoints.down('md')]: {
      marginTop: '100px',
      flexDirection: 'column',
      width: '100%',
      padding: '0 10%',
      gap: '30px',
      '& $titleBox': {
        right: '-12%',
        position: 'relative',
      },
    },
  },

  BlockMobile: {
    padding: '0',
  },
  FormBox: {
    width: '100%',
    padding: '0 10%',
  },
  BlockFullscreen: {
    [theme.breakpoints.down('md')]: {
      padding: '0',
      '& $titleBox': {
        right: '0',
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
  BlockContent: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
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
  sliderBlock: {
    display: 'flex',
    // flexDirection: "column",
    gap: '20px',
    overflow: 'hidden',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      width: '100%',
      padding: '0 20px',
      '& $titleBox': {
        right: '-12%',
        position: 'relative',
      },
    },
  },
  line: {
    display: 'inline-block',
    width: '80px',
    minWidth: '80px',
    height: '1px',
    backgroundColor: 'black',
    marginTop: '22px',
  },
  firstLine: {
    marginTop: '0px',
    height: '1px',
  },
  slider: {
    height: 'auto',
    flexGrow: '1',
    border: '1px solid',
  },
  accordion: {
    width: '60%',
    display: 'flex',
    gap: '40px',
    marginLeft: 'auto',
    [theme.breakpoints.down('md')]: {
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
    fontSize: '14px',
    lineHeight: 1.2,
    fontWeight: 600,
  },
  place: {
    marginTop: '10px',
  },
  message: {
    marginTop: '20px',
    [theme.breakpoints.down('md')]: {
      height: '150px',
      overflow: 'scroll',
    },
  },
  buttons: {
    display: 'flex',
    gap: '12px',
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
    // height: "70vh",
    // maxHeight: "600px",
    [theme.breakpoints.down('md')]: {
      order: '2',
      marginRight: 'auto',
      height: '48vh',
    },
  },
  mediaBlock_unborder: {
    border: 'none',
  },
  formBox: {
    width: '30vw',
    marginLeft: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: '0',
    },
  },
  sliderBox: {
    width: '100%',
    overflowX: 'hidden',
  },
  buttonGroup: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      margin: 'auto',
    },
  },
  button: {
    width: '120px',
    borderRadius: '0',
    height: '36px',
    marginTop: '96px',
    border: '1px solid',
  },
  expodom_img: {
    width: '100%',
  },
  logoBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '135px',
    gap: '7px',
  },
  logo: {
    width: '83px',
  },
  contactsBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  contactsBoxes: {
    display: 'flex',
    gap: '40px',
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '92px',
    gap: '30px',
  },
  formField: {
    width: '285px',
  },
  contactsFormBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  contactsForm: {
    marginTop: '120px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  contactsButton: {
    marginTop: 'auto',
  },
  reviewVideoBox: {
    position: 'relative',
    width: '100%',
    height: '500px',
    maxHeight: '500px',

    [theme.breakpoints.down('md')]: {
      width: '50%',
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
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
  },

  imagesBoxes: {
    width: '360px',
  },
  reviewDate: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
  },
  Expodom: {
    marginTop: '100px',
    '& .makeStyles-message-392': {
      color: 'red',
    },
  },
}));

const MainPageContent = ({ data }) => {
  const detail = useMemo(() => getData(data, 4), [data]);
  const dataAnswers = useMemo(() => getData(data, 18), [data]);
  const reviews = useMemo(() => getData(data, 5), [data]);
  const answers = [...dataAnswers];

  const breakpoints = useBreakpoint();
  const classes = useStyles();

  const [review, setReview] = useState(0);
  const [reviewVideo, setReviewVideo] = useState(reviews.length - 1);
  const [opacity] = useState(true);

  const handleClickLeft = () => {
    setReview((state) => (state - 1 < 0 ? reviews.length - 1 : state - 1));
    setReviewVideo((state) => (state + 1 > reviews.length - 1 ? 0 : state + 1));
    myRef.current.slickNext();
  };

  const handleClickRight = () => {
    setReview((state) => (state + 1 > reviews.length - 1 ? 0 : state + 1));
    setReviewVideo((state) => (state - 1 < 0 ? reviews.length - 1 : state - 1));
    myRef.current.slickPrev();
  };
  const myRef = useRef(null);
  const houseSliderRef = useRef(null);
  const slidesPath = [
    'images/slide1.jpg',
    'images/slide2.jpg',
    'images/slide3.jpg',
  ];
  const slides = [];
  slidesPath.forEach((item) => {
    slides.push(getImg(data, item));
  });

  return (
    <Box className={classes.root}>
      <Box component='section' className={classes.sliderBlock}>
        {/* <Box className={classes.titleBox}> */}
        {!breakpoints.md ? (
          <span className={`${classes.line} ${classes.firstLine}`}></span>
        ) : null}
        {/* {breakpoints.md ? (
            <Typography variant="h2" className={classes.text}></Typography>
          ) : null} */}
        {/* </Box> */}
        <Box className={classes.sliderBox}>
          <HouseSlider
            houseRef={houseSliderRef}
            mobile={breakpoints.md}
            data={data}
          />
        </Box>
      </Box>

      {/* ПОДРОБНЕЕ */}

      <Box
        component='section'
        className={
          breakpoints.md
            ? `${classes.Block} ${classes.BlockFullscreen}`
            : classes.Block
        }
      >
        <Box className={classes.titleBox}>
          <Box className={classes.BlockColumn}>
            <TitleWithLine title='ПРЕИМУЩЕСТВА' />

            {/* ) : null} */}
          </Box>
        </Box>

        <Box className={classes.accordion}>
          <Accordions arr={detail} title='advantages' />
        </Box>
      </Box>

      {/* ОТЗЫВЫ */}

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
                          >{`${reviews[review][19]} ${reviews[review][20]}`}</Typography>
                          <Typography className={classes.place}>
                            {`${reviews[review][20]}, ${reviews[
                              review
                            ][22].slice(6)}`}
                          </Typography>
                        </Box>
                        <Quote />
                      </Box>
                      <Typography variant='body1' className={classes.message}>
                        {reviews[review][21]}
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
                  <GatsbyImage
                    className={classes.reviewVideo}
                    image={getImg(
                      data,
                      `${reviews[reviewVideo][23].substr(
                        reviews[reviewVideo][23].search(/images\//g)
                      )}`
                    )}
                    alt='img'
                  ></GatsbyImage>
                </CSSTransition>
              </TransitionGroup>

              <Box className={classes.secondBlock}>
                <Box className={classes.imagesBoxes}>
                  <ReviewsSlider
                    myRef={myRef}
                    reviews={reviews}
                    getImg={getImg}
                    data={data}
                  />
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
                        >{`${reviews[review][19]} ${reviews[review][20]}`}</Typography>
                        <Typography className={classes.place}>
                          {`${reviews[review][20]}, ${reviews[review][22].slice(
                            6
                          )}`}
                        </Typography>
                      </Box>
                      <Quote />
                    </Box>

                    <Typography variant='body1' className={classes.message}>
                      {reviews[review][21]}
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
                  {`${reviews[review][22].slice(0, 2)}/${reviews[
                    review
                  ][22].slice(3, 5)} `}
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
                  <GatsbyImage
                    className={classes.reviewVideo}
                    image={getImg(
                      data,
                      `${reviews[reviewVideo][23].substr(
                        reviews[reviewVideo][23].search(/images\//g)
                      )}`
                    )}
                    alt='img'
                  ></GatsbyImage>
                </CSSTransition>
              </TransitionGroup>

              <Box className={classes.secondBlock}>
                <Box className={classes.imagesBoxes}>
                  <ReviewsSlider
                    myRef={myRef}
                    reviews={reviews}
                    getImg={getImg}
                    data={data}
                  />
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Box>

      {/* ОТВЕТЫ */}

      <Box
        component='section'
        className={
          breakpoints.md
            ? `${classes.Block} ${classes.BlockFullscreen}`
            : classes.Block
        }
      >
        {breakpoints.md ? (
          <>
            <Box className={classes.titleBox}>
              <TitleWithLine title='ОТВЕТЫ НА ВОПРОСЫ' />
            </Box>
          </>
        ) : (
          <Box className={classes.titleBox} style={{ minHeight: '224px' }}>
            <Box className={classes.BlockColumn}>
              <TitleWithLine title='ОТВЕТЫ НА ВОПРОСЫ' />
            </Box>
          </Box>
        )}

        <Box className={classes.accordion}>
          <Accordions
            answers={true}
            arr={answers}
            title='answers'
            uppercase={false}
          />
        </Box>
      </Box>

      {/* "ЭКСПОДОМ" */}

      {!breakpoints.md ? (
        <Box component='section' className={classes.Block}>
          <Box
            className={classes.titleBox}
            // style={{ marginTop: '100px' }}
          >
            <Box
              className={classes.BlockColumn}
              style={{ justifyContent: 'start' }}
            >
              <TitleWithLine title='Приглашаем' />
              <Box m='auto'>
                <Form
                  title='В готовый модульный дом под Минском на ознакомительную экскурсиюшаем'
                  subtitle='Оставьте заявку и наш менеджер свяжется с вами для уточнения даты и времени экскурсии'
                  buttonText='Записаться'
                />
              </Box>
            </Box>
          </Box>
          <OneImageAutoSlider slides={slides} />
        </Box>
      ) : (
        <Box
          component='section'
          className={`${classes.Block} ${classes.BlockFullscreen}`}
        >
          <Box className={classes.titleBox}>
            <TitleWithLine title='Приглашаем' />
          </Box>
          <Box className={classes.BlockColumn}>
            <OneImageAutoSlider slides={slides} />
            <Box className={classes.FormBox}>
              <Form
                title='В готовый модульный дом под Минском на ознакомительную экскурсиюшаем'
                subtitle='Оставьте заявку и наш менеджер свяжется с вами для уточнения даты и времени экскурсии'
              />
            </Box>
          </Box>
        </Box>
      )}

      <Box
        component='section'
        className={classes.Block}
        style={{ marginTop: !breakpoints.md ? '180px' : '100px' }}
      >
        {!breakpoints.md ? (
          <>
            <Box className={classes.titleBox}>
              <Box className={classes.BlockColumn}>
                <TitleWithLine
                  title='Контакты'
                  style={{ marginBottom: '60px' }}
                />
                <ContactsBlock data={data} />
              </Box>
            </Box>

            <Box className={classes.formBox}>
              <Typography
                variant='h2'
                className={classes.text}
                style={{ marginBottom: '100px' }}
              >
                Напишите нам
              </Typography>
              <Form email text main />
            </Box>
          </>
        ) : (
          <>
            <Box className={classes.titleBox}>
              <TitleWithLine title='Контакты' />
            </Box>
            <Box className={classes.BlockColumn}>
              <ContactsBlock data={data} />
              <Box className={classes.titleBox} style={{ marginTop: '40px' }}>
                <TitleWithLine title='Напишите нам' />
              </Box>
              <Form email text main id='contacts' />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
export default MainPageContent;
