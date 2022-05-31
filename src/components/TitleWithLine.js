import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    position: 'relative',
    display: 'flex',
    width: '500px',
    height: 'fit-content',
    left: '-100px',
    '& span': {
      marginTop: 'auto',
      marginBottom: '6.6px',
    },
    '& h2': {
      whiteSpace: (param) => (param.longLine ? 'nowrap' : null),
      marginLeft: (param) => (param.longLine ? '10%' : '20px'),
    },
    '@media (min-width:1921px)': {
      width: '34.7vw',
      marginBottom: '0.4vw',
      '& h2': {
        whiteSpace: (param) => (param.longLine ? 'nowrap' : null),
        marginLeft: (param) => (param.longLine ? '10%' : '1vw'),
      },
      left: '-5.2vw',
    },
    [theme.breakpoints.down('md')]: {
      '& h2': {
        marginLeft: () => '10%',
        marginRight: () => '20px',
        textAlign: 'left', 
      },
      '& span': {
        width: '100%',
      },
      flexDirection: 'row-reverse',
      left: '0',
      width: '100%',
    },
  },
  sectionTitleUnderLine: {
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      // left:'-120px',
      width: '100%',
      marginTop: '5px',
      '& $line': {
        position: 'relative',
        width: '100vw',
        left: '-20vw',
      },
      '& h2': {
        position: 'relative',
        // left:'-80px',
      },
    },
  },
  line: {
    display: 'inline-block',
    width: '3.8vw',
    minWidth: '80px',
    height: '1px',
    backgroundColor: '#4F4F4F',
    marginTop: '22px',
    [theme.breakpoints.down('md')]: {
      width: (param) => (param.longLine ? '100%' : '80px'),
    },
  },
}));

const TitleWithLine = ({ title, style, longLine, underLine }) => {
  const param = { longLine };
  const classes = useStyles(param);
  return (
    <Box
      className={
        !underLine
          ? `${classes.sectionTitle}`
          : `${classes.sectionTitle} ${classes.sectionTitleUnderLine}`
      }
      style={style}
    >
      <span className={classes.line}></span>
      <Typography variant='h2' className={classes.text}>
        {title}
      </Typography>
    </Box>
  );
};
export default TitleWithLine;
