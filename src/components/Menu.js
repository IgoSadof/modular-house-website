import React, { useMemo, useState } from 'react';
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
    height: (param) => (param.inBurger ? '84vh' : '100vh'),
    minHeight: '100vh',
    borderRight: '1px solid #4F4F4F',
    padding: '50px 0px 80px',
    transition: '0.5s',
    opacity: '1',
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
      padding: '3.5vw 0px 4.2vw',
    },
    '$ a:focus-visible': {
      outline: 'none',
      border: '1px solid',
    },

    [theme.breakpoints.down('md')]: {
      display: (param) => (param.inBurger ? 'flex' : 'none'),
      minHeight: '100px',
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
    outline: 'none',
    '& img': {
      width: '100%',
    },
    '&:focus-visible, &:visited, &:active': {
      outline: 'none',
    },
  },
  iconsBox: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    '& > * + * ': {
      marginLeft: '30px',
    },
    alignItems: 'center',
    '@media (min-width:1921px)': {
      '& > * + * ': {
        marginLeft: '1.6vw',
      },
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 'auto',
      marginRight: '0',
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
    lineHeight: '1.4',
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
    '& > * + * ': {
      marginTop: '3vh',
    },
    '@media (min-width:1921px)': {
      '& > * + * ': {
        marginTop: '2vw',
      },
    },
    [theme.breakpoints.down('md')]: {
      opacity: '1',
      '& > * + * ': {
        marginTop: '6vh',
      },
      marginTop: 'auto',
      marginBottom: 'auto',
      alignItems: 'flex-start',
      '@media (max-width:1000px)': {
        '@media (orientation: landscape)': {
          flexDirection: 'row',
          '& > * + * ': {
            marginTop: '0',
            marginLeft: '50px',
          },
          '& > li:last-of-type ': {
            marginTop: '50px',
            marginLeft: '0',
          },
        },
      },
    },
  },
  navItem: {
    zIndex: '3',
    cursor: 'pointer',
    /*width: '90px',*/
    '@media (min-width:1921px)': {
      width: '100%',
    },
    [theme.breakpoints.down('md')]: {
      width: 'auto',
      opacity: '1',
      '& span': {
        fontSize: '18px',
      },
    },
  },
  Link: {
    color: 'black',
    textDecoration: 'none',
    outline: 'none',
    '&:hover': {
      color: 'black',
    },
    '&:focus-visible, &:visited, &:active': {
      outline: 'none',
    },
  },
  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& span': {
      fontWeight: '500',
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
  hide: {
    opacity: '0',
  },
  show: {
    opacity: '1',
  },
  lang: {
    bottom: '0',
    position: 'absolute',
    right: 'auto',
    left: 'auto',
    display: 'flex',
    height: '50px',
    zIndex: '3',
    marginTop: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '1px solid #4F4F4F',
    width: '100%',
    '& > * ': {
      fontSize: '1.1rem',
    },
    '& > * + * ': {
      marginLeft: '9%',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '30px',
      position: 'relative',
    },
    '@media (min-width:1921px)': {
      height: '3.5vw',
      '& > * ': {
        fontSize: '1vw',
      },
    }
  },
  langText: {
    cursor: 'pointer',
    color: '#333333',
  },
  langTextActive: {
    color: '#a9a9a9',
  },
  menuFooterFirstLine:{
    width:'100%',
    display:'flex',
  }
}));

const Menu = ({ data, inBurger, clickToOpenForm, lang, toggleLang }) => {
  // const menuData = useMemo(
  //   () =>
  //     data.allMysqlMenu.nodes
  //       .filter((item) => item.menutitle && item.link && item.published)
  //       .sort((a, b) => a.menutitle - b.menutitle),
  //   [data]
  // );
  let menuDataObj = useMemo(
    () => ({
      EN: data.allMysqlMenuEn?.nodes
        .filter((item) => item.menutitle && item.link && item.published)
        .sort((a, b) => a.menutitle - b.menutitle),
      RU: data.allMysqlMenu.nodes
        .filter((item) => item.menutitle && item.link && item.published)
        .sort((a, b) => a.menutitle - b.menutitle),
    }),
    [data]
  );
  const menuData =
    lang === 'EN' && menuDataObj['EN'] ? menuDataObj['EN'] : menuDataObj['RU'];
  const [isItemFocused, setIsItemFocused] = useState(false);
  const breakpoints = useBreakpoint();
  const param = { inBurger };
  const classes = useStyles(param);
  const handleItemFocus = () => {
    setIsItemFocused(true);
  };
  const handleItemUnFocus = () => {
    setIsItemFocused(false);
  };
  const handleLangClick = (e, lang) => {
    toggleLang(lang);
  };

  return (
    <Box component='nav' className={classes.menu}>
      {inBurger ? null : (
        <>
          <Link tabIndex={1} className={classes.logo} to={'/'}>
            <Logo
              width={breakpoints.xxl ? '4.2vw' : 60}
              height={breakpoints.xxl ? '6.2vw' : 90}
              color={'#4F4F4F'}
            />
          </Link>
          <Typography
            variant='button'
            className={
              isItemFocused ? `${classes.text} ${classes.hide}` : classes.text
            }
          >
            {lang === 'EN' ? 'Menu' : 'Меню'}
          </Typography>
        </>
      )}
      <ul
        className={
          isItemFocused ? `${classes.navList} ${classes.show}` : classes.navList
        }
      >
        {menuData.map((item) => (
          <li className={classes.navItem} key={item.id}>
            <Link
              tabIndex={1}
              className={classes.Link}
              to={item.link}
              onFocus={handleItemFocus}
              onBlur={handleItemUnFocus}
            >
              <Typography variant='button'>{item.name}</Typography>
            </Link>
          </li>
        ))}
      </ul>

      <Box className={classes.menuFooter}>
        <Box className={classes.menuFooterFirstLine}>
          {' '}
          {inBurger ? (
            <RegularButton variant='outlined' click={clickToOpenForm}>
              {lang === 'EN' ? 'CONTACT' : 'СВЯЗАТЬСЯ'}
            </RegularButton>
          ) : null}
          <Box className={classes.iconsBox}>
            <a
              target='_blank'
              rel='noreferrer'
              className={classes.Link}
              href={'https://www.facebook.com/BYhome.zrobim/'}
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

        <Box className={classes.lang}>
          <Typography
            onClick={(e) => handleLangClick(e, 'RU')}
            className={
              lang === 'RU'
                ? `${classes.langText} ${classes.langTextActive}`
                : `${classes.langText}`
            }
            variant='h3'
            component='p'
          >
            RU
          </Typography>
          <Typography
            onClick={(e) => handleLangClick(e, 'EN')}
            className={
              lang === 'EN'
                ? `${classes.langText} ${classes.langTextActive}`
                : `${classes.langText}`
            }
            variant='h3'
            component='p'
          >
            EN
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Menu;
