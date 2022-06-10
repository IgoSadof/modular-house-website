import React, { useRef, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MainPageHouseSlider from './sliders/MainPageHouseSlider';
import Accordions from './Accordion';
import Form from '../components/Form';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import getData from '../utils/getData';
import OneImageAutoSlider from './sliders/OneImageAutoSlider';
import getPublicPath from '../utils/getPublicPath';
import TitleWithLine from '../components/TitleWithLine';
import ContactsBlock from './ContactsBlock';
import Advantages from './Advantages';
import ReviewsBlock from './ReviewsBlock';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '120px',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      marginTop: '40px',
    },
  },
  Block: {
    display: 'flex',
    '& > * + * ': {
      marginLeft: '60px',
    },
    marginTop: '120px',
    paddingRight: '10vw',
    '@media (min-width:1921px)': {
      '& > * + * ': {
        marginLeft: '4.2vw',
      },
      marginTop: '8.3vw',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '80px',
      flexDirection: 'column',
      width: '100%',
      padding: '0 10%',
      '& > * + * ': {
        marginLeft: '0',
        marginTop: '40px',
      },
      '& $titleBox': {
        right: '-12%',
        position: 'relative',
      },
    },
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
    '& > * + * ': {
      paddingTop: '40px',
    },
    marginLeft: '100px',
    justifyContent: 'space-between',
    flexDirection: 'column',
    '@media (min-width:1921px)': {
      marginLeft: '5.2vw',
      flexShrink: '0',
    },
    [theme.breakpoints.down('md')]: {
      '& > * + * ': {
        marginLeft: '0',
      },
      order: '3',
      marginLeft: '0',
      width: '100%',
    },
  },
  sliderBlock: {
    display: 'flex',
    // flexDirection: "column",
    '& > * + * ': {
      marginLeft: '20px',
    },
    overflow: 'hidden',
    '@media (min-width:1921px)': {
      '& > * + * ': {
        marginLeft: '1.4vw',
      },

    },

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      width: '100%',
      // height:'70vh',
      paddingLeft: '20px',
      '& $titleBox': {
        right: '-12%',
        position: 'relative',
      },
    },
    "@media (max-width:400px)": {
      paddingLeft: '10px',
    },
  },
  line: {
    display: 'inline-block',
    width: '4.2vw',
    minWidth: '80px',
    height: '1px',
    backgroundColor: 'black',
    marginTop: '22px',
  },
  firstLine: {
    marginTop: '0px',
    height: '1px',
  },

  accordion: {
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },

  sliderBox: {
    width: '100%',
    overflowX: 'hidden',
     "@media (max-width:400px)": {
      width: "100%",
    },
  },

  ContactsBox: {
    display: 'flex',
    flexDirection: 'column',
    margin: '180px 0 60px 0',
    paddingRight: '10vw',
    [theme.breakpoints.down('md')]: {
      paddingRight: '0',
      margin: '80px 0 80px 0',
    },
  },
  OneImageAutoSliderBox:{
    width:'100%',
    minHeight: '600px',
    maxHeight: '80vh',
    overflow:'hidden',
    '& div':{
      height:'100%',
    }
  },
}));

const MainPageContent = ({ data }) => {
  const dataMainPage = useMemo(
    () => getData(data.allMysqlMainPage.nodes),
    [data]
  );
  const reviews = dataMainPage.reviews.filter((item) => item.published);
  const answers = dataMainPage.answers.filter((item) => item.published);

  const breakpoints = useBreakpoint();
  const classes = useStyles();
  const houseSliderRef = useRef(null);
  let slidesPath = [...dataMainPage['form-block-with-gallery'][0].gallery].map(
    (item) => {
      if (item.published) {
        return item.image;
      }
    }
  );
  const slides = [];
  slidesPath.forEach((item) => {
    slides.push(getPublicPath(data, item));
  });

  return (
    <Box className={classes.root}>
      <Box component='section' className={classes.sliderBlock}>
        {!breakpoints.md ? (
          <span className={`${classes.line} ${classes.firstLine}`}></span>
        ) : null}
        <Box className={classes.sliderBox}>
          <MainPageHouseSlider
            houseRef={houseSliderRef}
            mobile={breakpoints.md}
            data={data}
          />
        </Box>
      </Box>

      {/* ПОДРОБНЕЕ */}

      {dataMainPage.published_advantages ? (
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
              <TitleWithLine title={dataMainPage.title_advantages} />
            </Box>
          </Box>

          <Box className={classes.accordion}>
            <Advantages
              arr={dataMainPage.advantages}
              title='advantages'
              data={data}
            ></Advantages>
            {/* <Accordions arr={detail} title='advantages' /> */}
          </Box>
        </Box>
      ) : null}

      {/* ОТЗЫВЫ */}

      {dataMainPage.published_reviews ? (
        <ReviewsBlock
          data={data}
          reviews={reviews}
          title={dataMainPage.title_reviews}
        ></ReviewsBlock>
      ) : null}

      {/* ОТВЕТЫ */}

      {dataMainPage.published_answers ? (
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
                <TitleWithLine title={dataMainPage.title_answers} />
              </Box>
            </>
          ) : (
            <Box className={classes.titleBox} style={{ minHeight: '224px' }}>
              <Box className={classes.BlockColumn}>
                <TitleWithLine title={dataMainPage.title_answers} />
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
      ) : null}

      {/* "ЭКСПОДОМ" */}

      {dataMainPage['form-block-with-gallery'][0].published ? (
        !breakpoints.md ? (
          <Box component='section' className={classes.Block}>
            <Box className={classes.titleBox}>
              <Box
                className={classes.BlockColumn}
                style={{ justifyContent: 'start' }}
              >
                <TitleWithLine
                  title={dataMainPage['form-block-with-gallery'][0].header}
                />
                <Box m='auto'>
                  <Form
                    title={dataMainPage['form-block-with-gallery'][0].title}
                    subtitle={
                      dataMainPage['form-block-with-gallery'][0].subtitle
                    }
                    buttonText='Записаться'
                  />
                </Box>
              </Box>
            </Box>
            
            <Box className={classes.OneImageAutoSliderBox} ><OneImageAutoSlider slides={slides} /></Box>
          </Box>
        ) : (
          <Box
            component='section'
            className={`${classes.Block} ${classes.BlockFullscreen}`}
          >
            <Box className={classes.titleBox}>
              <Box className={classes.BlockColumn}>
                <TitleWithLine
                  title={dataMainPage['form-block-with-gallery'][0].header}
                  longLine={true}
                />
              </Box>
            </Box>
            <Box className={classes.BlockColumn}>
              <OneImageAutoSlider slides={slides} />
              <Box className={classes.FormBox}>
                <Form
                  title={dataMainPage['form-block-with-gallery'][0].title}
                  subtitle={dataMainPage['form-block-with-gallery'][0].subtitle}
                />
              </Box>
            </Box>
          </Box>
        )
      ) : null}

      <Box className={classes.ContactsBox}>
        <ContactsBlock data={data} title='Контакты' paddingBottom />
      </Box>
    </Box>
  );
};
export default MainPageContent;
