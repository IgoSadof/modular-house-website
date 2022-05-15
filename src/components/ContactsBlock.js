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
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row-reverse',
      marginLeft: 'auto',
      width: '100%',
    },
  },

  BlockColumn: {
    width: '28vw',
    display: 'flex',
    '& > * + * ':{
      marginTop:'20px'
    },
    marginLeft: '100px',
    justifyContent: 'space-between',
    flexDirection: 'column',
    '@media (min-width:1921px)': {
      '& > * + * ':{
        marginTop:'2vw'
      },
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
    '& > * + * ':{
      marginTop:'2vw'
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
      paddingBottom: '15.9vw',
    },
  },
}));

const ContactsBlock = ({ data, title, paddingBottom }) => {
  const dataContacts = useMemo(
    () => getData(data.allMysqlContacts.nodes),
    [data]
  );
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

              <ContactsElement dataContacts={dataContacts} data={data} />
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
              Напишите нам
            </Typography>
            <Form email text main />
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
            <ContactsElement dataContacts={dataContacts} data={data} />
            <Box className={classes.titleBox} style={{ marginTop: '60px' }}>
              <TitleWithLine
                title={'Напишите нам'}
                style={{ marginBottom: '20px' }}
                longLine={true}
              />
            </Box>
            <Form email text main id='ContactsBlock' />
          </Box>
        </>
      )}
    </Box>
  );
};
export default ContactsBlock;
