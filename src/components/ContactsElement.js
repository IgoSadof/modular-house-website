import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Logo from './svg/Logo';
import getPublicPath from '../utils/getPublicPath';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  BlockMain: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > * + * ': {
      marginLeft: '20px',
    },
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      paddingBottom: '0',
    },
  },
  BlockContent: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      '& > * + * ': {
        marginLeft: '0',
        marginTop: '40px',
      },
    },
  },
  BlockColumn: {
    display: 'flex',
    '& > * + * ': {
      marginLeft: '20px',
    },
    justifyContent: 'space-between',
    flexDirection: 'column',
    '@media (min-width:1921px)': {
      marginLeft: '5.2vw',
      flexShrink: '0',
    },
  },
  textHeader: {
    textTransform: 'uppercase',
  },
  logoBox: {
    display: 'flex',
  },
  logo: {
    width: '83px',
  },
  ContactsBox: {
    display: 'flex',
    flexDirection: 'column',
    '& > div:nth-child(3) ':{
      marginTop:'20px'
    },
    '& > div:nth-child(5) ':{
      marginTop:'60px'
    },
    '@media (min-width:1450px)': {
      '& > div:nth-child(2) ':{
        marginTop:'60px'
      },
    },
    '@media (min-width:1921px)': {
      '& > * + * ': {
        //marginTop: '4.2vw',
      },
    },
    [theme.breakpoints.down('md')]: {
      '& > div:nth-child(2) ':{
        marginTop:'60px'
      },
      '& > div:nth-child(3) ':{
        marginTop:'20px'
      },
      '& > div:nth-child(5) ':{
        marginTop:'60px'
      },
    },
  },
  ContactsBoxes: {
    display: 'flex',
    '& > * + * ': {
      marginLeft: '20px',
    },
    '@media (min-width:1450px)': {
      '& > * + * ':{
        marginLeft:'1.4vw'
      },
      // justifyContent: 'space-between',
    },
    '@media (min-width:1921px)': {
      '& > * + * ': {
        marginLeft: '1.4vw',
      },
    },
    [theme.breakpoints.down('md')]: {
      '& > * + * ': {
        marginLeft: '20px',
      },
      justifyContent:'flex-start',
      paddingLeft: '10%',
      paddingRight: '10%',
    },
  },
  personalBoxLink: {
    textDecoration: 'none',
  },
  personalBox: {
    width: '45%',
    '@media (min-width:767px)': {
      width: '180px',
    },
    '& img':{
      width:'100%',
    },
    '@media (min-width:1921px)': {
      width: '11.7vw',
    },
  },
  ContactsFoto: {
    width: '100%',
  },
  infoBox: {
    display: 'flex',
    alignItems: 'baseline',
    flexWrap: 'wrap',
  
    '& > p': {
      marginLeft: '0',
    },
    '& > p:last-child': {
      marginLeft: '28px',
    },
    '@media (min-width:1921px)': {
      '& > p:last-child': {
        marginLeft: '1.8vw',
      },
    },
    [theme.breakpoints.down('md')]: {
      justifyContent:'flex-start',
      paddingLeft: '10%',
      paddingRight: '10%',
    },
    '@media (max-width:600px)': {
      '& p':{
        fontSize:'14px'
      },
      padding: '0 10%',
      alignSelf: (param) => (param.breakpoints.s ? 'null' : 'center'),
    },
  },
  infoBoxTel: {
    '& > * + * ': {
      marginLeft: '28px',
    },
    '@media (min-width:1921px)': {
      '& > * + * ': {
        marginLeft: '1.6vw',
      },
    },
    [theme.breakpoints.down('md')]: {
      '& > * + * ': {
        marginLeft: '20px',
      }
    },
  },
  infoBoxText: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
    marginLeft: '28px',
    '@media (min-width:1921px)': {
      marginLeft: '1.6vw',
    },
    '& > p:nth-child(2) ': {
      marginTop: '1.5em',
    },
    '& p': {
      fontSize: '16px',
      '@media (min-width:1921px)': {
        fontSize: '0.92vw',
      },
    },
    '@media (max-width:600px)': {
      '& p': {
        fontSize: '14px',
      },
    },
  },
  ContactsName: {
    marginTop: '30px',
    fontWeight: '400',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    '@media (min-width:1921px)': {
      marginTop: '2.1vw',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
  },
  ContactsPosition: {
    fontSize: '13px',
    marginTop: '8px',
    fontWeight: '400',
    opacity: '0.6',
    '@media (min-width:1921px)': {
      fontSize: '18px',
    },
  },
  ContactsSails: {
    textTransform: 'none',
    whiteSpace: 'nowrap',
    fontWeight: '400',
    width: '100%',
    marginBottom: '0.25em',
  },
  ContactsPhone: {
    fontWeight: '600',
    whiteSpace: 'nowrap',
    fontSize: '18px',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
    '@media (min-width:1921px)': {
      fontSize: '0.94vw',
    },
  },
}));

const ContactsElement = ({ header, data, dataContacts, lang }) => {
  const breakpoints = useBreakpoint();
  const param = { breakpoints };
  const classes = useStyles(param);
  // console.log(dataContacts)

  return (
    <Box components='main' className={classes.root}>
      <Box components='section' className={classes.BlockMain}>
        {header ? (
          <Box className={classes.BlockColumn}>
            <Typography variant='h2' className={classes.textHeader}>
              {header}
            </Typography>
            <Box className={classes.logoBox}>
              <Logo
                width={breakpoints.xxl ? '4.2vw' : 60}
                height={breakpoints.xxl ? '6.2vw' : 90}
                color={'#4F4F4F'}
              />
            </Box>
          </Box>
        ) : null}

        <Box components='section' className={classes.BlockContent}>
          <Box className={classes.ContactsBox}>
            <Box className={classes.ContactsBoxes}>
              <Box
                className={classes.personalBox}
                // style={
                //   breakpoints.md
                //     ? { width: '150px' }
                //     : breakpoints.l
                //     ? { width: '180px' }
                //     : null
                // }
              >
                <img
                  className={classes.mainPlan}
                  src={getPublicPath(
                    data,
                    dataContacts['contacts-ceo'][0].image
                  )}
                  alt='foto'
                />
                <Typography
                  className={classes.ContactsName}
                  variant='h4'
                  component='p'
                >
                  {dataContacts['contacts-ceo'][0].name}
                </Typography>
                <Typography
                  className={classes.ContactsPosition}
                  variant='body1'
                  component='p'
                >
                  {dataContacts['contacts-ceo'][0].role}
                </Typography>
              </Box>
              <Box
                className={classes.personalBox}
                // style={
                //   breakpoints.md
                //     ? { width: '150px' }
                //     : breakpoints.l
                //     ? { width: '180px' }
                //     : null
                // }
              >
                <img
                  className={classes.mainPlan}
                  src={getPublicPath(
                    data,
                    dataContacts['contacts-ceo'][1].image
                  )}
                  alt='foto'
                />

                <Typography
                  className={classes.ContactsName}
                  variant='h4'
                  component='p'
                >
                  {dataContacts['contacts-ceo'][1].name}
                </Typography>
                <Typography
                  className={classes.ContactsPosition}
                  variant='body1'
                >
                  {dataContacts['contacts-ceo'][1].role}
                </Typography>
              </Box>
              {/* </a> */}
            </Box>
            <Box className={`${classes.infoBox} ${classes.infoBoxTel}`}>
              <Typography
                className={classes.ContactsSails}
                variant='h4'
                component='p'
              >
                {lang === 'EN' ? 'Production of modular houses in Belarus:' : 'Производство модульных домов в Беларуси:'}
              </Typography>
              <Typography
                className={classes.ContactsPhone}
                variant='body1'
                component='p'
              >
                {/*dataContacts.phone*/}
                +375 33 914 79 48
              </Typography>
              {/* {dataContacts.name ? ( */}
                <Typography
                  className={classes.ContactsSails2}
                  variant='body1'
                  component='p'
                >
                  {/* {dataContacts.name} */}
                  {lang === 'EN' ? 'Minsk' : 'Минск'}
                </Typography>
              {/* ) : null} */}
            </Box>
            <Box className={`${classes.infoBox} ${classes.infoBoxTel}`}>
              <Typography
                className={classes.ContactsSails}
                variant='h4'
                component='p'
              >
                {lang === 'EN' ? 'Production of modular houses in Russia:' : 'Производство модульных домов в Росии:'}
              </Typography>
              <Typography
                className={classes.ContactsPhone}
                variant='body1'
                component='p'
              >
                {/*dataContacts.phone*/}
                +7 921 252 81 08
              </Typography>
              {/* {dataContacts.name ? ( */}
                <Typography
                  className={classes.ContactsSails2}
                  variant='body1'
                  component='p'
                >
                  {/* {dataContacts.name} */}
                  {lang === 'EN' ? 'Vologda' : 'Вологда'}
                </Typography>
              {/* ) : null} */}
            </Box>
            <Box className={`${classes.infoBox} ${classes.infoBoxTel}`}>
              <Typography
                className={classes.ContactsPhone}
                variant='body1'
                component='p'
              >
                {/*dataContacts.phone*/}
                +7 921 252 81 08
              </Typography>
              {/* {dataContacts.name ? ( */}
                <Typography
                  className={classes.ContactsSails2}
                  variant='body1'
                  component='p'
                >
                  {/* {dataContacts.name} */}
                  {lang === 'EN' ? 'Yaroslavl' : 'Ярославль'}
                </Typography>
              {/* ) : null} */}
              
            </Box>
            
              <Box className={classes.infoBox}>
                {!header ? (
                  <Box className={classes.logoBox}>
                    <Logo
                      width={breakpoints.xxl ? '4.2vw' : 60}
                      height={breakpoints.xxl ? '6.2vw' : 90}
                      color={'#4F4F4F'}
                    />
                    {/* <Typography variant="subtitle1">MODULAR HOUSE</Typography> */}
                  </Box>
                ) : null}

                <Box className={classes.infoBoxText}>
                  {/* <a
                    className={classes.personalBoxLink}
                    href={`mailto:${dataContacts.email}`}
                  >
                    <Typography variant='body1'>
                      {dataContacts.email}
                    </Typography>
                  </a>
                  <Typography variant='body1'>{dataContacts.adres}</Typography>*/}

                  <Typography className={classes.personalBoxLink} variant='body1'>
                      {lang === 'EN' ? 'Head office:' : 'Головной офис:'}
                  </Typography>
                  <Typography variant='body1'>
                    {lang === 'EN' ? 'Minsk' : 'Минск'}
                  </Typography>
                  <Typography variant='body1'>
                    {lang === 'EN' ? '11 M. Bogdanovicha str, 2-3 floors' : 'ул. Богдановича 11, 2-3 этаж'}
                  </Typography>
                </Box>
              </Box>
            
          </Box>

          {/*breakpoints.md ? (
            <Box className={classes.infoBox}>
              {!header ? (
                <Box className={classes.logoBox}>
                  <Logo
                    width={breakpoints.xxl ? '4.2vw' : 60}
                    height={breakpoints.xxl ? '6.2vw' : 90}
                    color={'#4F4F4F'}
                  />
                </Box>
              ) : null}

              <Box className={classes.infoBoxText}>
                <a
                  className={classes.personalBoxLink}
                  href={`mailto:${dataContacts.email}`}
                >
                  <Typography variant='body1'>{dataContacts.email}</Typography>
                </a>
                <Typography variant='body1'>{dataContacts.adres}</Typography>
              </Box>
            </Box>
              ) : null*/}
        </Box>
      </Box>
    </Box>
  );
};
export default ContactsElement;
