import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import TitleWithLine from './TitleWithLine';

const useStyles = makeStyles((theme) => ({
  Block: {
    display: 'flex',
    '& > * + * ': {
      marginLeft: '60px',
    },
    marginTop: '100px',
    padding: '0 10%',
    '@media (min-width:1921px)': {
      '& > * + * ': {
        marginLeft: '4.2vw',
      },
      '@media (min-width:1925px)': {
        marginTop: '4.2vw',
      }
    },

    [theme.breakpoints.down('md')]: {
      marginTop: '80px',
      flexDirection: 'column',
      width: '100%',
      padding: '0 10%',
      '& > * + * ': {
        marginTop: '40px',
        marginLeft: '0',
      },
      // '& $titleBox': {
      //   right: '-12%',
      //   position: 'relative',
      // },
    },
  },
  BlockFullscreen: {
    [theme.breakpoints.down('md')]: {
      padding: '0',
      // '& $titleBox': {
      //   right: '0',
      // },
    },
  },
  leftColumnBox: {
    display: 'flex',
    width: (param) => (param.rightColumnContent ? '28vw' : '100%'),
    '& > * + * ': {
      marginTop: (param) => (param.title ? '30px' : '0'),
    },
    paddingLeft: '100px',
    flexDirection: 'column',
    flexShrink: '0',
    width: '100%!important',
    '@media (min-width:1921px)': {
      '& > * + * ': {
        marginTop: (param) => (param.title ? '60px' : '0'),
      },
      paddingLeft: '5.2vw',
    },
    [theme.breakpoints.down('md')]: {
      width: (param) => '100%',
      paddingLeft: '0',
      flexDirection: 'column-reverse',
    },
  },
  leftColumnTitleBox: {
    width: '100%',
    display: 'flex',
    '& > * + * ': {
      marginTop: '20px',
    },
    '@media (min-width:1921px)': {
      '& > * + * ': {
        marginTop: '1.04',
      },
    },
    justifyContent: 'space-between',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      order: '3',
      width: '100%',
    },
  },
  leftColumnContent: {
    display:'flex',
    flexDirection: (param) => (param.rightColumnContent ? 'column' : 'raw'),
    width: '100%',
    height:'100%',
    [theme.breakpoints.down('md')]: {
      marginTop: '40px',
      padding: (param)=>param.mobileFullScreen? '0':'0 10%',
    },
  },

  RightColumnBox: {
    width: '60%',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      padding: '0 10%',
      width: '100%',
      flexDirection: 'column-reverse',
    },
  },
  rightColumnContent: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '0 10%',
    },
  },
}));

const ContentBlock = ({ title, leftColumnContent, rightColumnContent, mobileFullScreen, mb, component='section', blockRef }) => {
  const breakpoints = useBreakpoint();
  const param = { title, rightColumnContent, mobileFullScreen };
  const classes = useStyles(param);
  return (
    <Box
      ref={blockRef}
      mb={mb}
      component={component}
      className={
        breakpoints.md
          ? `${classes.Block} ${classes.BlockFullscreen}`
          : classes.Block
      }
    >
      <Box className={classes.leftColumnBox}>
        <Box className={classes.leftColumnTitleBox}>
          {title ? <TitleWithLine title={title} /> : null}
        </Box>
        <Box className={classes.leftColumnContent}>{leftColumnContent}</Box>
      </Box>

      {rightColumnContent ? (
        <Box className={classes.RightColumnBox}>{rightColumnContent}</Box>
      ) : null}
    </Box>
  );
};
export default ContentBlock;
