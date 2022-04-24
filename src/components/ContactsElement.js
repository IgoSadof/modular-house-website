import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Logo from './svg/Logo';
import { GatsbyImage } from 'gatsby-plugin-image';
import getImg from '../utils/getImg';

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
    gap: '20px',
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
      gap: '40px',
    },
  },
  BlockColumn: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'space-between',
    flexDirection: 'column',
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
    gap: '60px',
    '@media (min-width:1921px)': {
      gap: '4.2vw',
    },
    [theme.breakpoints.down('md')]: {

      gap: '30px',
    },
  },
  ContactsBoxes: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'space-between',
    '@media (min-width:1921px)': {
      gap: '1.4vw',
    },
    [theme.breakpoints.down('md')]: {
      gap: '20px',
      justifyContent: 'center',
    },
  },
  personalBoxLink: {
    textDecoration: 'none',
  },
  personalBox: {
    width: '225px',
    '@media (min-width:1921px)': {
      width: '11.7vw',
    },
    [theme.breakpoints.down('md')]: {
      width: '150px',
    },
  },
  ContactsFoto: {
    width: '100%',
  },
  infoBox: {
    display: 'flex',
    alignItems:'baseline',
    gap: '32px',
    '@media (min-width:1921px)': {
      gap: '1.8vw',
    },
    [theme.breakpoints.down('md')]: {
      padding: '0 10%',
      alignSelf: (param) => (param.breakpoints.s ? 'null' : 'center'),
    },
  },
  infoBoxTel:{
    gap: '28px',
    '@media (min-width:1921px)': {
      gap: '1.6vw',
    },
  },
  infoBoxText: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
    gap: '24px',
    '& p': {
      fontSize: '16px',
      '@media (min-width:1921px)': {
        fontSize: '0.83vw',
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
    fontSize: '12px',
    fontWeight: '300',
    marginTop: '10px',
    '@media (min-width:1921px)': {
      fontSize: '24px',
    },
  },
  ContactsSails: {
    textTransform: "none",
    fontWeight: '400',
  },
  ContactsPhone: {
    fontWeight: '600',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
  },
}));

const ContactsElement = ({ header, data, dataContacts }) => {
  const breakpoints = useBreakpoint();
  const param = { breakpoints };
  const classes = useStyles(param);

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
                style={
                  breakpoints.md
                    ? { width: '150px' }
                    : breakpoints.l
                    ? { width: '180px' }
                    : null
                }
              >
                <GatsbyImage
                  className={classes.mainPlan}
                  image={getImg(data, dataContacts['contacts-ceo'][0].image)}
                  alt='img'
                ></GatsbyImage>
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
                style={
                  breakpoints.md
                    ? { width: '150px' }
                    : breakpoints.l
                    ? { width: '180px' }
                    : null
                }
              >
                <GatsbyImage
                  className={classes.mainPlan}
                  image={getImg(data, dataContacts['contacts-ceo'][1].image)}
                  alt='img'
                ></GatsbyImage>

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
                >
                  {dataContacts['contacts-ceo'][0].role}
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
                Отдел продаж:
              </Typography>
              <Typography
                className={classes.ContactsPhone}
                variant='h4'
                component='p'
              >
                {dataContacts.phone}
              </Typography>
            </Box>
            {!breakpoints.md ? (
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
                  <a
                    className={classes.personalBoxLink}
                    href={`mailto:${dataContacts.email}`}
                  >
                    <Typography variant='body1'>{dataContacts.email}</Typography>
                  </a>
                  <Typography variant='body1'>
                    {dataContacts.adres}
                  </Typography>
                </Box>
              </Box>
            ) : null}
          </Box>

          {breakpoints.md ? (
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
                <Typography variant='body1'>
                {dataContacts.adres}
                </Typography>
              </Box>
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};
export default ContactsElement;
