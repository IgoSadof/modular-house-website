import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ContactsBlock from './ContactsBlock';

const useStyles = makeStyles((theme) => ({
  Block: {
    padding: '0 10vw',
    margin: 'auto 0',
    [theme.breakpoints.down('md')]: {
      padding: '0',
      margin: '0 0 40px 0',
      flexDirection: 'column',
      width: '100%',
      paddingTop:"120px",
   
    },
  },
}));

const ContactsPage = ({ data, title }) => {
  const classes = useStyles();

  return (
    <Box
      component='section'
      className={classes.Block}
    >
     <ContactsBlock data={data} title={title} ></ContactsBlock>
    </Box>
  );
};
export default ContactsPage;
