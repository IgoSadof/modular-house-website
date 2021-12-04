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
    [theme.breakpoints.down('md')]: {
      // padding: '0 5%',
      // marginTop: '20px',
    },
  },
  BlockMain: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    width: '100%',
    height: '100%',
    // paddingBottom: '120px',
    [theme.breakpoints.down('md')]: {
      // paddingTop: '40px',
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
      gap: '60px',
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
  },
  ContactsBoxes: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'space-between',
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
    [theme.breakpoints.down('md')]: {
      width: '150px',
    },
  },
  ContactsFoto: {
    width: '100%',
  },
  infoBox: {
    display: 'flex',
    gap: '20px',
    [theme.breakpoints.down('md')]: {
      padding: '0 10%',
    },
    // justifyContent: 'space-between',
  },
  infoBoxText: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
    gap: '30px',
  },
  ContactsName: {
    marginTop: '30px',
    fontWeight: '400',
  },
  ContactsPosition: {
    fontSize: '12px',
    fontWeight: '300',
    marginTop: '10px',
  },
  ContactsPhone: {
    marginTop: '30px',
  },
}));

const ContactsElement = ({ header, data }) => {
  const breakpoints = useBreakpoint();
  const classes = useStyles();

  return (
    <Box components='main' className={classes.root}>
      <Box components='section' className={classes.BlockMain}>
        {header ? (
          <Box className={classes.BlockColumn}>
            <Typography variant='h2' className={classes.textHeader}>
              {header}
            </Typography>
            <Box className={classes.logoBox}>
              <Logo color={'#4F4F4F'} />
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
                    image={getImg(data, 'images/andrey2.png')}
                    alt='img'
                  ></GatsbyImage>
                  <Typography
                    className={classes.ContactsName}
                    variant='h4'
                    component='p'
                  >
                    Андрусь Bezdar
                  </Typography>
                  <Typography
                    className={classes.ContactsPosition}
                    variant='body1'
                    component='p'
                  >
                    CEO & FOUNDER
                  </Typography>
                  <Typography
                    className={classes.ContactsPhone}
                    variant='h4'
                    component='p'
                  >
                    +375 44 5180676
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
                    image={getImg(data, 'images/alexey2.png')}
                    alt='img'
                  ></GatsbyImage>

                  <Typography
                    className={classes.ContactsName}
                    variant='h4'
                    component='p'
                  >
                    Алексей Кораблев
                  </Typography>
                  <Typography
                    className={classes.ContactsPosition}
                    variant='body1'
                  >
                    CEO & FOUNDER
                  </Typography>
                  <Typography
                    className={classes.ContactsPhone}
                    variant='h4'
                    component='p'
                  >
                    +375 29 3650669
                  </Typography>
                </Box>
              {/* </a> */}
            </Box>
            {!breakpoints.md ? (
              <Box className={classes.infoBox}>
                {!header ? (
                  <Box className={classes.logoBox}>
                    <Logo color={'#4F4F4F'} />
                    {/* <Typography variant="subtitle1">MODULAR HOUSE</Typography> */}
                  </Box>
                ) : null}

                <Box className={classes.infoBoxText}>
                  <a
                    className={classes.personalBoxLink}
                    href='mailto:info@zrobym.by'
                  >
                    <Typography variant='body1'>info@zrobym.by</Typography>
                  </a>
                  <Typography variant='body1'>
                    ул. Богдановича 11, 3 этаж
                  </Typography>
                </Box>
              </Box>
            ) : null}
          </Box>

          {breakpoints.md ? (
            <Box className={classes.infoBox}>
              {!header ? (
                <Box className={classes.logoBox}>
                  <Logo color={'#4F4F4F'} />
                </Box>
              ) : null}

              <Box className={classes.infoBoxText}>
                <a
                  className={classes.personalBoxLink}
                  href='mailto:info@zrobym.by'
                >
                  <Typography variant='body1'>info@zrobym.by</Typography>
                </a>
                <Typography variant='body1'>
                  ул. Богдановича 11, 3 этаж
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
