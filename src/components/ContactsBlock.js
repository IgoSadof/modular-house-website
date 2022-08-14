import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Form from './Form';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import TitleWithLine from './TitleWithLine';
import ContactsElement from './ContactsElement';
import getData from '../utils/getData';

const useStyles = makeStyles((theme) => ({
  Block: {
    display: 'flex',
    justifyContent: 'space-between',
    // transform: (param)=> `scale(${param.scale})`,
    '@media (max-width:1200px)': {
      '&': {
        padding: '20px 0',
      },
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      width: '100%',
      '& form': {
        padding: '0 10%',
      },
    },
  },

  titleBox: {
    display: 'flex',
    flexDirection: 'row',
    flexShrink: '0',
    
    paddingTop: '3.5vw',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row-reverse',
      marginLeft: 'auto',
      width: '100%',
    },
  },

  BlockColumn: {
    width: '30vw',
    display: 'flex',
    '& > * + * ': {
      // marginTop:'20px'
    },
    marginLeft: '100px',
    justifyContent: 'space-between',
    flexDirection: 'column',
    '@media (min-width:1921px)': {
      marginLeft: '5.2vw',
      flexShrink: '0',
    },

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
    '& > * + * ': {
      marginTop: '2vw',
    },
    flexDirection: 'column',
    '$block &': {
      paddingBottom: '0',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: '0',
      paddingBottom: '0',
    },
    '@media (min-width:1921px)': {
      
    },
    paddingTop: '3.5vw',
    paddingBottom: '90px',
  },
}));

const ContactsBlock = ({ data, title, paddingBottom, lang }) => {
  const dataContacts = useMemo(
    () => getData(data.allMysqlContacts.nodes),
    [data]
  );
  const breakpoints = useBreakpoint();
  let scale = 1 / (window ? window.devicePixelRatio : 1);
  const param = { scale };
  const classes = useStyles(param);

  return (
    <Box className={classes.Block}>
      {!breakpoints.md ? (
        <>
          <Box className={classes.titleBox}>
            <Box className={classes.BlockColumn}>
              {title ? (
                <TitleWithLine title={title} style={{ marginBottom: '60px' }} />
              ) : null}

              <ContactsElement dataContacts={dataContacts} data={data} lang={lang} />
            </Box>
          </Box>

          <Box
            className={classes.formBox}
            style={
              paddingBottom
                ? {
                    paddingBottom: breakpoints.xxl ? '14.5vw' : '230px',
                    justifyContent: 'space-between',
                  }
                : null
            }
          >
            <Typography
              variant='h2'
              className={classes.text}
              // style={{ marginBottom: '100px' }}
            >
              {lang === 'EN' ? 'Write to us' : 'Напишите нам'} 
            </Typography>
            <Form email text main data={data} lang={lang} />
          </Box>
        </>
      ) : (
        <>
          <Box className={classes.titleBox}>
            {title ? (
              <TitleWithLine
                title={title}
                longLine={true}
                style={{ marginBottom: '40px' }}
              />
            ) : null}
          </Box>
          <Box className={classes.BlockColumn}>
            <ContactsElement dataContacts={dataContacts} data={data} lang={lang}/>
            <Box className={classes.titleBox} style={{ marginTop: '60px' }}>
              <TitleWithLine
                title={lang === 'EN' ? 'Write to us' : 'Напишите нам'} 
                style={{ marginBottom: '20px' }}
                longLine={true}
              />
            </Box>
            <Form data={data} email text main lang={lang}  id='ContactsBlock' />
          </Box>
        </>
      )}
    </Box>
  );
};
export default ContactsBlock;
