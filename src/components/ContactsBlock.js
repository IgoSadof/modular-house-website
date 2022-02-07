import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Form from './Form';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import TitleWithLine from './TitleWithLine';
import ContactsElement from './ContactsElement';

const useStyles = makeStyles((theme) => ({
  Block: {
    display: 'flex',
    justifyContent:"space-between",

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      width: '100%',
      '& form': {
        padding: '0 5%',
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

  formBox: {
    width: '30vw',
    marginLeft: 'auto',
    display: 'flex',
    gap:"3.4vw",
    flexDirection: 'column',
    "$block &":{
      paddingBottom: '0',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: '0',
      paddingBottom: '0',
    },
    "@media (min-width:1921px)": {
      paddingBottom: '15.9vw',
    },
  },
}));

const ContactsBlock = ({ data, title, paddingBottom }) => {
  const breakpoints = useBreakpoint();
  const classes = useStyles();

  return (
    <Box className={classes.Block}>
      {!breakpoints.md ? (
        <>
          <Box className={classes.titleBox}>
            <Box className={classes.BlockColumn}>
              {title ? (
                <TitleWithLine title={title} style={{ marginBottom: '60px' }} />
              ) : null}

              <ContactsElement data={data} />
            </Box>
          </Box>

          <Box className={classes.formBox} style={paddingBottom? {paddingBottom: '230px',gap: '0',justifyContent: 'space-between',}:null}>
            <Typography
              variant='h2'
              className={classes.text}
              // style={{ marginBottom: '100px' }}
            >
              Напишите нам
            </Typography>
            <Form email text main />
          </Box>
        </>
      ) : (
        <>
          <Box className={classes.titleBox}>
          {title ? (
                <TitleWithLine title={title} 
                style={{ marginBottom: '40px' }} 
                />
              ) : null}
          </Box>
          <Box className={classes.BlockColumn}>
            <ContactsElement data={data} />
            <Box className={classes.titleBox}
             style={{ marginTop: '40px' }}
             >
            <TitleWithLine title={'Напишите нам'} style={{ marginBottom: '20px' }} />
              
            </Box>
            <Form email text main id='ContactsBlock' />
          </Box>
        </>
      )}
    </Box>
  );
};
export default ContactsBlock;
