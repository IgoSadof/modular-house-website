import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  conteiner: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 50%)',
    width: '100%',
    '@media (min-width:1921px)': {},
    [theme.breakpoints.down('md')]: {
      padding: ' 0 10%',
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
  content: {
    display: 'flex',
    width: 'auto',
    paddingRight: '60px',
    marginRight: '40px',
    marginBottom: '40px',
    flexDirection: 'column',
    '& h4': {
      color: '#4F4F4F',
    },
    gap: '20px',
    '@media (min-width: 1920px)': {
      width: '22vw',
      paddingRight: '3.1vw',
      marginRight: '2.1vw',
      marginBottom: '2.1vw',
    },
    [theme.breakpoints.down('md')]: {
      '&:last-of-type': {
        marginBottom: '0',
      },
      paddingRight: '0',
      marginRight: '0',
    },
  },
}));

export default function Advantages({ arr, title }) {
  console.log(arr);
  const classes = useStyles();

  return (
    <Box className={classes.conteiner}>
      {arr.map((item, index) => {
        return (
          <Box className={classes.content} key={index}>
            <Typography variant='h4'>{item[70]}</Typography>
            <Typography variant='body1'>{item[71]}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}
