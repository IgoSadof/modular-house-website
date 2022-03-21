import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './svg/Logo';

import Facebook from './svg/icons/Facebook';
import Youtube from './svg/icons/Youtube';
import Instagram from './svg/icons/Instagram';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'gatsby';
import RegularButton from './buttons/RegularButton';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const useStyles = makeStyles((theme) => ({
  menu: {
    boxSizing: 'border-box',
    position: 'fixed',
    top: '0',
    left: '0',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: (param) => (param.inBurger ? '100%' : '10%'),
    height: (param) => (param.inBurger ? '80vh' : '100vh'),
    minHeight:'768px',
    borderRight: '1px solid #4F4F4F',
    padding: '50px 0px 80px',
    transition: '0.5s',
    opacity: '1',
    zIndex: '2',
    zIndex: '2',
    '& span': {
      fontSize: '16px',
      fontWeight: '600',
      '@media (min-width:1921px)': {
        fontSize: '0.83vw',
      },
    },
    '&:hover': {
      transition: '0.5s',
      // backgroundColor:"#F0F0F0",
      '& $text': {
        transition: '0.5s',
        opacity: '0',
      },
      '& $navList': {
        transition: '0.5s',
        opacity: '1',
      },
    },
    background:
      'radial-gradient(rgba(232, 232, 232, 0.3) 100%, rgba(232, 232, 232, 0.12) 100%)',
    backdropFilter: 'blur(10px)',
    '@media (min-width:1921px)': {
      padding: '3.5vw 0px 6.5vw',
    },

    [theme.breakpoints.down('md')]: {
      display: (param) => (param.inBurger ? 'flex' : 'none'),
      minHeight:'100px',
      borderRight: 'none',
      position: 'relative',
      padding: '0',
      background: 'none',
      backdropFilter: 'none',
      alignItems: 'self-start',
    },
  },
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    '& img': {
      width: '100%',
    },
  },
  iconsBox: {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
    '@media (min-width:1921px)': {
      gap: '1.6vw',
    },
  },
  icon: {
    cursor: 'pointer',
    '@media (min-width:1921px)': {
      width: '1vw',
      height: '1vw',
    },
  },
  text: {
    transition: '0.5s',
    position: 'absolute',
    lineHeight: '1em',
    textTransform: 'uppercase',
    letterSpacing: '0.015em',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  navList: {
    transition: '0.5s',
    opacity: '0',
    padding: '0px',
    display: 'flex',
    listStyle: 'none',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '30px',
    '@media (min-width:1921px)': {
      gap: '2vw',
    },
    [theme.breakpoints.down('md')]: {
      opacity: '1',
      gap: '50px',
      marginTop: 'auto',
      marginBottom: 'auto',
      alignItems: 'flex-start',
      '@media (orientation: landscape)': {
        flexDirection: 'row',
      },
    },
    [theme.breakpoints.down(theme.breakpoints.values.s)]: {
      gap: '40px',
    },
  },
  navItem: {
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      opacity: '1',
      '& span': {
        fontSize: '18px',
      },
    },
  },
  Link: {
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
      color: 'black',
    },
  },
  menuFooter: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    '& span': {
      fontWeight: '500',
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between',
      '@media (orientation: landscape)': {
        marginBottom: '40px',
        justifyContent: 'center',
        '& button': {
          display: 'none',
        },
      },
    },
  },
}));

const Menu = ({ inBurger, clickToOpenForm }) => {
  const breakpoints = useBreakpoint();
  const param = { inBurger };
  const classes = useStyles(param);

  return (
    <Box component='nav' className={classes.menu}>
      {inBurger ? null : (
        <>
          <Link className={classes.logo} to={'/'}>
            <Logo
              width={breakpoints.xxl ? '4.2vw' : 60}
              height={breakpoints.xxl ? '6.2vw' : 90}
              color={'#4F4F4F'}
            />
          </Link>
          <Typography variant='button' className={classes.text}>
            Меню
          </Typography>
        </>
      )}
      <ul className={classes.navList}>
        <li className={classes.navItem}>
          <Link className={classes.Link} to={'/'}>
            <Typography variant='button'>О НАС</Typography>
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link className={classes.Link} to={'/who-we-are'}>
            <Typography variant='button'>КТО МЫ </Typography>
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link className={classes.Link} to={'/what-we-do'}>
            {inBurger ? (
              <Typography variant='button'>ЧТО МЫ ДЕЛАЕМ </Typography>
            ) : (
              <>
                <Typography variant='button'>ЧТО МЫ </Typography>
                <br />
                <Typography variant='button'>ДЕЛАЕМ</Typography>
              </>
            )}
          </Link>
        </li>
        {/* <li className={classes.navItem}>
          <Link className={classes.Link} to={"/watch"}>
            {inBurger ? (
              <Typography variant="button">ГДЕ УВИДЕТЬ </Typography>
            ) : (
              <>
                <Typography variant="button">ГДЕ</Typography>
                <br />
                <Typography variant="button">УВИДЕТЬ</Typography>
              </>
            )}
          </Link>
        </li> */}
        <li className={classes.navItem}>
          <Link className={classes.Link} to={'/contact-us'}>
            {inBurger ? (
              <Typography variant='button'>ДАВАЙТЕ СВЯЖЕМСЯ </Typography>
            ) : (
              <>
                <Typography variant='button'>ДАВАЙТЕ</Typography>
                <br />
                <Typography variant='button'> СВЯЖЕМСЯ</Typography>
              </>
            )}
          </Link>
        </li>
      </ul>

      <Box className={classes.menuFooter}>
        {inBurger ? (
          <RegularButton variant='outlined' click={clickToOpenForm}>
            СВЯЗАТЬСЯ
          </RegularButton>
        ) : null}
        <Box className={classes.iconsBox}>
          <a
            target='_blank'
            rel='noreferrer'
            className={classes.Link}
            href={'https://www.facebook.com/zrobimarchitects/'}
          >
            <Facebook
              width={breakpoints.xxl ? '0.5vw' : 8}
              height={breakpoints.xxl ? '1.2vw' : 18}
            />
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            className={classes.Link}
            href={'https://www.youtube.com/channel/UCxc3agJ3TIg4H0dilD-yBlQ'}
          >
            <Youtube
              width={breakpoints.xxl ? '1.2vw' : 17}
              height={breakpoints.xxl ? '0.8vw' : 12}
            />
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            className={classes.Link}
            href={'https://www.instagram.com/by___home/'}
          >
            <Instagram
              width={breakpoints.xxl ? '0.9vw' : 14}
              height={breakpoints.xxl ? '0.9vw' : 14}
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
};
export default Menu;
