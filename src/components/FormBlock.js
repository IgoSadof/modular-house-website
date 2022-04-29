import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Box from '@material-ui/core/Box';
import Form from './Form';
import { GatsbyImage } from 'gatsby-plugin-image';
import TitleWithLine from '../components/TitleWithLine';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },

  Block: {
    display: 'flex',
    gap: '60px',
    height: '90vh',
    '@media (min-width:1921px)': {
      gap: '4.2vw',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      height: 'auto',
    },
  },
  title: {
    marginTop: '140px',
    width: '165px',
  },
  mediaBlock: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      order: '1,',
    },
  },
  mediaBlock_unborder: {
    border: 'none',
    // border:"1px solid"
  },
  formBox: {
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      margin: '0',
    },
  },
  titleBox: {
    gap: '20px',
    flexDirection: 'row-reverse',
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      right: (param) => (param.blockPadding ? '-12%' : null),
      width: '100%',
      marginLeft: '0',
    },
  },

  button: {
    width: '120px',
    borderRadius: '0',
    height: '36px',
    marginTop: '96px',
    border: '1px solid',
  },
  text: {
    width: '300px',
    textTransform: 'uppercase',
  },
  expodom_img: {
    width: '100%',
    objectFit: 'cover',
    marginLeft: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  Expodom: {
    [theme.breakpoints.down('md')]: {
      gap: '0',
    },

    '& .makeStyles-message-392': {
      color: 'red',
    },
  },
  BlockColumn: {
    width: '28vw',
    display: 'flex',
    gap: '20px',
    marginLeft: '100px',
    flexShrink: '0',
    justifyContent: 'space-between',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      order: '3',
      marginLeft: '0',
      width: '100%',
    },
    '@media (min-width:1921px)': {
      marginLeft: '5.2vw',
    },
  },
}));

const FormBlock = ({
  header,
  title,
  subtitle,
  text,
  email,
  img,
  formPosition,
  staticImg,
  padding,
  blockPadding = false,
  endpoint,
  extraFormFields,
  underLine,
}) => {
  const param = { formPosition, blockPadding };
  const classes = useStyles(param);
  const breakpoints = useBreakpoint();

  return (
    <div className={classes.root}>
      <Box className={`${classes.Block} ${classes.Expodom}`}>
        {!breakpoints.md ? (
          <>
            <Box className={classes.BlockColumn}>
              <Box className={classes.titleBox}>
                {header ? <TitleWithLine title={header} /> : null}
              </Box>
              <Box className={classes.formBox}>
                <Form
                  extraFormFields={extraFormFields}
                  endpoint={endpoint}
                  title={title}
                  subtitle={subtitle ? subtitle : null}
                  email={email ? email : null}
                  text={text ? text : null}
                  id='formBlock'
                />
              </Box>
            </Box>
            {staticImg || img ? (
              <Box
                className={`${classes.mediaBlock} ${classes.mediaBlock_unborder}`}
              >
                {!staticImg ? (
                  <GatsbyImage
                    className={classes.expodom_img}
                    image={img}
                    alt='img'
                  ></GatsbyImage>
                ) : (
                  <img
                    className={classes.expodom_img}
                    src={img}
                    alt='img'
                  ></img>
                )}
              </Box>
            ) : null}
          </>
        ) : (
          <>
            <Box className={classes.titleBox} style={{ marginBottom: '40px' }}>
              {header ? <TitleWithLine title={header} longLine={true} underLine={underLine} /> : null}
            </Box>
            {staticImg || img ? (
              <Box
                className={`${classes.mediaBlock} ${classes.mediaBlock_unborder}`}
              >
                {!staticImg ? (
                  <GatsbyImage
                    className={classes.expodom_img}
                    image={img}
                    alt='img'
                  ></GatsbyImage>
                ) : (
                  <img
                    className={classes.expodom_img}
                    src={img}
                    alt='img'
                  ></img>
                )}
              </Box>
            ) : null}
            <Box className={classes.BlockColumn}>
              <Box
                className={classes.formBox}
                style={padding ? { padding: '0 10%' } : null}
              >
                <Form
                  endpoint={endpoint}
                  extraFormFields={extraFormFields}
                  title={title}
                  subtitle={subtitle ? subtitle : null}
                  email={email ? email : null}
                  text={text ? text : null}
                  id='formBlock'
                />
              </Box>
            </Box>
          </>
        )}
      </Box>
    </div>
  );
};
export default FormBlock;
