import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormBlock from './FormBlock';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import TitleWithLine from '../components/TitleWithLine';
import getPublicPath from '../utils/getPublicPath';
import getAboutUsData from '../utils/getAboutUsData';

const useStyles = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.down('md')]: {
      '& h2': {
        fontSize: '20px',
        textAlign: 'end',
      },
    },
  },
  button: {
    marginLeft: 'auto',
  },
  header: {
    fontSize: '3vw',
    fontWeight: '600',
    lineHeight: '1.2',
    letterSpacing: '0.03em',
    textTransform: 'uppercase',
    color: '#4F4F4F',
    // '@media (min-width:1921px)': {
    //   fontSize: "3.54vw",
    // },
    [theme.breakpoints.down('md')]: {
      width: '75%',
      fontSize: '26px',
      fontWeight: '700',
      textAlign: 'start',
      marginRight: 'auto',
    },
  },
  Block: {
    display: 'flex',
    '& > * + * ':{
      marginLeft:'60px'
    },
    marginTop: '100px',
    '&:first-child ': {
      marginTop: 'auto',
      height: '86vh',
      width: '100%',
      '@media (min-width:1921px)': {
        // marginTop: "7vw",
      },
    },
    '@media (min-width:1921px)': {
      '& > * + * ':{
        marginLeft:'4.2vw'
      },
      marginTop: '8.3vw',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      alignItems: 'center',
      marginTop: '40px',
      '&:last-of-type': {
        marginBottom: '40px',
      },
      '& > * + * ':{
        marginLeft:'0',
        marginTop:'40px',
      },
      '&:first-child ': {
        marginTop: '60px',
        height: 'auto',
      },
    },
  },
  BlockContent: {
    '&:first-child ': {
      marginTop: 'auto',
      marginBottom: 'auto',
      height: 'auto',
      '@media (min-width:1921px)': {
        // marginTop: "7vw",
      },
    },
  },
  titleBox: {
    flexDirection: 'row-reverse',
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      width: '100%',
      marginLeft: '0',
    },
  },
  textBox: {
    display: 'flex',
    flexDirection: 'column',
     '& > * + * ':{
        marginTop:'15px'
      },
    // marginLeft: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    '@media (min-width:1921px)': {
      '& > * + * ':{
        marginTop:'1.1vw'
      },
    },
  },
  creatorsBox: {
    // width: "360px",
    display: 'flex',
    marginTop: 'auto',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: '0',
    },
  },
  creatorTextBox: {
    // fontSize: "12px",
    marginTop: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  creatorTitle: {
    fontSize: '28px',
    textTransform: 'uppercase',
    fontWeight: 600,
    '@media (min-width:1921px)': {
      fontSize: '1.45vw',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
    },
  },
  creatorSubtitle: {
    marginTop: '10px',
    fontSize: '14px',
    '@media (min-width:1921px)': {
      fontSize: '0.73vw',
      marginTop: '0.07vw',
    },
  },
  creatorMainText: {
    marginTop: '60px',
    [theme.breakpoints.down('md')]: {
      marginTop: '20px',
    },
    '@media (min-width:1921px)': {
      marginTop: '3.1vw',
    },
    // fontSize: "12px",
  },
  creatorFooterText: {
    marginTop: '15px',
    // fontSize: "12px",
    '@media (min-width:1921px)': {
      marginTop: '0.8vw',
    },
  },
  imgBox: {
    marginRight: 'auto',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      marginTop: '40px',
      marginBottom: '20px',
    },
  },
  BlockMt0: {
    marginTop: '60px',
    '@media (min-width:1921px)': {
      marginTop: '4.2vw',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '0',
    },
  },
  lineInvis: {
    opacity: '0',
  },
  img: {
    height: '100%',
    // width:"100%",
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  header2: {
    [theme.breakpoints.down('md')]: {
      width: '65%',
    },
  },
  BlockColumn: {
    width: '28vw',
    display: 'flex',
    marginLeft: '100px',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexShrink: '0',
    [theme.breakpoints.down('md')]: {
      order: '3',
      marginLeft: '0',
      width: '100%',
    },
  },
}));

const AboutUs = ({ data }) => {
  const breakpoints = useBreakpoint();
  const classes = useStyles();
  const dataObj = getAboutUsData(data);
  // console.log(dataObj)
  return (
    <Box component='main' className={classes.main}>
      <Box component='section' className={classes.Block}>
        <Box className={`${classes.Block} ${classes.BlockContent}`}>
          <Box className={classes.BlockColumn}>
            <Box className={classes.titleBox}>
              <TitleWithLine underLine={true} title={dataObj.main_header} />
            </Box>
          </Box>

          <Typography className={classes.header}>
            {dataObj.main_text}
          </Typography>
        </Box>
      </Box>

      {dataObj.articles.map((item, index) => {
        if (item.published) {
          return (
            <Box component='section' className={classes.Block} key={index}>
              <Box className={classes.BlockColumn}>
                <Box className={classes.titleBox}>
                  <TitleWithLine underLine={true} title={item.title} />
                </Box>
              </Box>
              <Box className={classes.textBox}>
                {item.article_text.map((paragraph, art_index) => (
                  <Typography
                    variant='body1'
                    className={classes.text}
                    key={art_index}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Box>
            </Box>
          );
        }
      })}

      <Box component='section' className={classes.Block}>
        {!breakpoints.md ? (
          <>
            <Box className={classes.BlockColumn}>
              <Box className={classes.titleBox}>
                <TitleWithLine underLine={true} title='Создатели' />
              </Box>
              <Box className={classes.creatorsBox}>
                <Box className={classes.creatorTextBox}>
                  <Typography
                    variant='subtitle2'
                    className={classes.creatorTitle}
                  >
                    {dataObj.Creators[0].name ? dataObj.Creators[0].name : null}
                  </Typography>
                  <Typography
                    variant='body1'
                    className={classes.creatorSubtitle}
                  >
                    {dataObj.Creators[0].role ? dataObj.Creators[0].role : null}
                  </Typography>

                  {dataObj.Creators[0].desc.map((paragraph, index) => (
                    <Typography
                      variant='body1'
                      className={index === 0? classes.creatorMainText : classes.creatorFooterText}
                      key={index}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box className={classes.imgBox}>
              <img
                className={classes.img}
                src={getPublicPath(
                  data,
                  dataObj.Creators[0].image ? dataObj.Creators[0].image : null
                )}
                alt='img'
              ></img>
            </Box>
          </>
        ) : (
          <>
            <Box className={classes.BlockColumn}>
              <Box className={classes.titleBox}>
                <TitleWithLine underLine={true} title='Создатели' />
              </Box>
              <Box className={classes.imgBox}>
                <img
                  className={classes.img}
                  src={getPublicPath(
                    data,
                    dataObj.Creators[0].image ? dataObj.Creators[0].image : null
                  )}
                  alt='img'
                ></img>
              </Box>
              <Box className={classes.creatorsBox}>
                <Box className={classes.creatorTextBox}>
                  <Typography
                    variant='subtitle2'
                    className={classes.creatorTitle}
                  >
                    {dataObj.Creators[0].name ? dataObj.Creators[0].name : null}
                  </Typography>
                  <Typography
                    variant='body1'
                    className={classes.creatorSubtitle}
                  >
                    {dataObj.Creators[0].role ? dataObj.Creators[0].role : null}
                  </Typography>

                  {dataObj.Creators[0].desc.map((paragraph, index) => (
                    <Typography
                      variant='body1'
                      className={index === 0? classes.creatorMainText : classes.creatorFooterText}
                      key={index}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Box>

      <Box
        component='section'
        className={`${classes.Block} ${classes.BlockMt0}`}
        style={breakpoints.md ? { flexDirection: 'column' } : null}
      >
        <Box className={classes.BlockColumn}>
          <Box className={classes.creatorsBox}>
            <Box className={classes.creatorTextBox}>
              <Typography variant='subtitle2' className={classes.creatorTitle}>
                {dataObj.Creators[1].name ? dataObj.Creators[1].name : null}
              </Typography>
              <Typography variant='body1' className={classes.creatorSubtitle}>
                {dataObj.Creators[1].role ? dataObj.Creators[1].role : null}
              </Typography>
              {dataObj.Creators[1].desc.map((paragraph, index) => (
                <Typography
                  variant='body1'
                  className={index === 0? classes.creatorMainText : classes.creatorFooterText}
                  key={index}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
        <Box className={classes.imgBox}>
          <img
            className={classes.img}
            src={getPublicPath(
              data,
              dataObj.Creators[1].image ? dataObj.Creators[1].image : null
            )}
            alt='img'
          ></img>
        </Box>
      </Box>

      <Box component='section' className={classes.Block}>
        <Box className={classes.BlockColumn}>
          <Box className={classes.titleBox}>
            <TitleWithLine underLine={true} title={dataObj.last_header} />
          </Box>
        </Box>
        <Typography className={`${classes.header} ${classes.header2}`}>
          {dataObj.last_text}
        </Typography>
      </Box>

      {dataObj['form-block'].published ? (
        <Box component='section' className={classes.Block}>
          <FormBlock
            img={getPublicPath(
              data,
              dataObj['form-block'].img ? dataObj['form-block'].img : null
            )}
            staticImg={true}
            header={
              dataObj['form-block'].header ? dataObj['form-block'].header : null
            }
            title={
              dataObj['form-block'].title ? dataObj['form-block'].title : null
            }
            subtitle={
              dataObj['form-block'].subtitle
                ? dataObj['form-block'].subtitle
                : null
            }
            email
            underLine={true}
          />
        </Box>
      ) : null}
    </Box>
  );
};
export default AboutUs;
