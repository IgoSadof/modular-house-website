import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import TitleWithLine from './TitleWithLine';

const useStyles = makeStyles((theme) => ({
  Block: {
    display: 'flex',
    '& > * + * ':{
      marginLeft:'60px'
    },
    marginTop: '120px',
    padding: '0 10%',
    '@media (min-width:1921px)': {
      '& > * + * ':{
        marginLeft:'4.2vw'
      },
      marginTop: '8.3vw',
    },

    [theme.breakpoints.down('md')]: {
      marginTop: '80px',
      flexDirection: 'column',
      width: '100%',
      padding: '0 10%',
      '& > * + * ':{
        marginTop:'40px',
        marginLeft:'0',
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
    width: '28vw',
    '& > * + * ':{
      marginTop:'30px'
    },
    marginLeft: '100px',
    flexDirection: 'column',
    flexShrink: '0',
    '@media (min-width:1921px)': {
      '& > * + * ':{
        marginTop:'4.2'
      },
      marginLeft: '5.2vw',
    },
    [theme.breakpoints.down('md')]: {
      width:'100%',
      '& > * + * ':{
        marginTop:'1.6vw'
      },
      marginLeft: '0',
      flexDirection: 'column-reverse',
    },
  },
  leftColumnTitleBox: {
    width: '28vw',
    display: 'flex',
    '& > * + * ':{
      marginTop:'20px'
    },
    '@media (min-width:1921px)': {
      '& > * + * ':{
        marginTop:'1.04'
      },
    },
    justifyContent: 'space-between',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      order: '3',
      width: '100%',
     
    },
  },
  leftColumnContent:{
    width:'100%',
    [theme.breakpoints.down('md')]: {
      marginTop:'40px',
      padding:'0 10%'
    },
  },
 
  RightColumnBox: {
    width: '60%',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      padding:'0 10%',
      width: '100%',
      flexDirection: 'column-reverse',
    },
  },
  rightColumnContent:{
    width:'100%',
    [theme.breakpoints.down('md')]: {
      padding:'0 10%'
    },
  },
}));

const ContentBlock = ({
  title,
  leftColumnContent,
  rightColumnContent,
}) => {
  const breakpoints = useBreakpoint();
  const param = { title };
  const classes = useStyles(param);
  return (
    <Box
      component='section'
      className={
        breakpoints.md
          ? `${classes.Block} ${classes.BlockFullscreen}`
          : classes.Block
      }
    >
      <Box className={classes.leftColumnBox}>
        <Box className={classes.leftColumnTitleBox}>
          <TitleWithLine title={title} />
        </Box>
        <Box className={classes.leftColumnContent}>{leftColumnContent}</Box>
      </Box>

      <Box className={classes.RightColumnBox}>{rightColumnContent}</Box>
    </Box>
  );
};
export default ContentBlock;
