import React, { useState } from 'react';
import './css/global.css';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Footer from './Footer';
import Menu from './Menu';
import modularHouseTheme from '../config/modularHouseTheme';
import Box from '@material-ui/core/Box';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Burger from './Burger';
import RegularButton from './buttons/RegularButton';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Drawer from '@material-ui/core/Drawer';
import ClearIcon from '@material-ui/icons/Clear';
import Form from './Form';
import Typography from '@material-ui/core/Typography';
import SquareButton from './buttons/SquareButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import favicon from '../assets/images/favicon.ico';
import Call from './svg/Call';
import getBrouser from '../utils/getBrouser';
import LangContext from '../context/LangContext';

const dataToComponent = (WrappedComponent, currebtData, house, lang) => {
  return <WrappedComponent data={currebtData} house={house} lang={lang} />;
};

const useStyles = makeStyles((theme) => ({
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: (param) =>
      param.page === 'contacts' || param.page === 'houseList'
        ? '100vh'
        : '100%',
    [theme.breakpoints.down('md')]: {
      height: (param) =>
        param.page === 'houseList' && param.breakpoints.md ? '100%' : '100%',
    },
    minHeight: '100vh',
    '@media (max-height:600px)': {
      height: '100% !important',
    },
    '& a': {
      outline: 'none',
    },
  },
  conteiner: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  Block: {
    position: 'relative',
    width: '100%',
    padding: (param) =>
      param.page === 'main' ? '0 10% 100px 10%' : '14vh 10% 14vh 10%',
    // padding: "100px 10% 100px 11%",
    backgroundColor: theme.palette.primary.fon,
    overflow: 'hidden',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '0 10% !important',
      marginBottom: '40px',
    },
  },
  BlockFullscreen: {
    position: 'relative',
    height: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.fon,
    overflow: 'hidden',
    padding: (param) => (param.page === 'main' ? '0 0 0 10%' : null),
    [theme.breakpoints.down('md')]: {
      height: (param) => (param.page === 'houseList' ? '100%' : null),
      padding: '0 !important',
    },
  },
  button: {
    position: 'absolute',
    top: (param) =>
      param.page === 'aboutUs' ||
      param.page === 'main' ||
      param.page === 'house'
        ? '50px'
        : '50px',
    right: '10vw',
    zIndex: '2',
  },
  '@media (min-width: 1921px)': {
    button: {
      top: '3.5vw !important',
    },
  },
  connectBox: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + * ': {
      marginTop: '50px',
    },
    height: '100vh',
    zIndex: '3',
    padding: '60px 100px 100px 100px',
    justifyContent: 'center',
    '& h5': {
      alignSelf: 'end',
    },
    [theme.breakpoints.down('md')]: {
      padding: '10%',
      paddingTop: '0',
      paddingBottom: '14vh',
      width: '100%',
      justifyContent: 'space-between',
      '& > * + * ': {
        marginTop: '0',
      },
    },
  },
  buttonBox: {
    marginLeft: 'auto',
  },
  callBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '30px',
  },
  loaderBox: {
    width: '40px',
    height: '40px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    zIndex: '5',
    marginLeft: '-20px',
    marginTop: '-20px',
  },
}));

const Layout = ({ pageTitle, children, page, component, house }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(gif)|(png)|(glb)|(usdz)|(mp4)|(svg)/" }
        }
      ) {
        edges {
          node {
            id
            base
            relativeDirectory
            relativePath
            publicURL
          }
        }
      }
      allMysqlHouses {
        nodes {
          alias
          position
          published
          mysqlId
          name
          contentID
          value
        }
      }
      allMysqlHousesEn {
        nodes {
          alias
          position
          published
          mysqlId
          name
          contentID
          value
        }
      }

      allMysqlMainPage {
        nodes {
          name
          value
        }
      }
      allMysqlMainPageEn {
        nodes {
          name
          value
        }
      }
      allMysqlAboutUs {
        nodes {
          name
          value
        }
      }
      allMysqlAboutUsEn {
        nodes {
          name
          value
        }
      }
      allMysqlContacts {
        nodes {
          name
          value
        }
      }
        allMysqlContactsEn {
        nodes {
          name
          value
        }
      }
      allMysqlArenda {
        nodes {
          name
          value
        }
      }
       allMysqlArendaEn {
        nodes {
          name
          value
        }
      }
      allMysqlMenu {
        nodes {
          id
          name
          menutitle
          published
          link
        }
      }
       allMysqlMenuEn {
        nodes {
          id
          name
          menutitle
          published
          link
        }
      }
    }
  `);

  const breakpoints = useBreakpoint();
  // const [lang, setLang] = useState('RU');

  const param = { page, breakpoints };
  const classes = useStyles(param);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const handleOpenBurgerMenu = () => {
    setIsBurgerMenuOpen((state) => !state);
  };
  const handleClickConnect = () => {
    setIsFormOpen((state) => !state);
    setIsBurgerMenuOpen(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.target.getAttribute('role') === 'presentation') {
      setIsFormOpen(false);
      return;
    }
    if (event && event.type === 'keydown' && event.key !== 'Escape') {
      return;
    }
    if (event && event.type === 'click') {
      return;
    }
    open ? setIsFormOpen(true) : setIsFormOpen(false);
  };
  const checkWindow = () => typeof window !== 'undefined';
  if (checkWindow()) {
    if (getBrouser(window).isSafari) {
      modularHouseTheme.palette.primary.fon =
        modularHouseTheme.palette.primary.fonSafari;
    } else if (getBrouser(window).isYandex) {
      modularHouseTheme.palette.primary.fon =
        modularHouseTheme.palette.primary.fonYandex;
    }
  }
  // console.log(modularHouseTheme.palette.primary.fon);
  // const handleLangClick = (e, lang) => {
  //   // setLang(lang);
  // };
  return (
    <ThemeProvider theme={modularHouseTheme}>
      <LangContext.Consumer>
        {(lang) => (
          <>
            <Helmet>
              <html lang={lang.lang === 'EN' ? 'en' : 'ru'} />
              <title>
                {pageTitle} | {data.site.siteMetadata.title}
              </title>
              <meta charSet='utf-8' />
              <meta name='description' content='Moduls houses for living' />
              <link rel='preconnect' href='https://fonts.googleapis.com' />
              <link
                rel='preconnect'
                href='https://fonts.gstatic.com'
                crossorigin
              />
              <link
                rel='shortcut icon'
                href={favicon}
                type='image/x-icon'
              ></link>
            </Helmet>
            <Box
              bgcolor='primary.fon'
              position='relative'
              className={classes.conteiner}
            >
              {breakpoints.isLoad ? (
                <>
                  <Menu
                    data={data}
                    lang={lang.lang}
                    toggleLang={lang.toggleLang}
                  />
                  <Box className='content'>
                    <Box className={classes.page}>
                      <Box
                        className={
                          page !== 'aboutUs'
                            ? classes.BlockFullscreen
                            : classes.Block
                        }
                      >
                        {breakpoints.md ? (
                          <Burger
                            click={handleClickConnect}
                            page={page}
                            position={
                              page !== 'aboutUs' && page !== 'houseList'
                                ? 'absolute'
                                : 'relative'
                            }
                            color={
                              page === 'watch' || page === 'house'
                                ? 'white'
                                : null
                            }
                          />
                        ) : null}
                        <div
                          role='link'
                          aria-label="Form's block"
                          tabIndex='0'
                          className={classes.ConnectBox}
                          name='form'
                          onClick={toggleDrawer(false)}
                          onKeyDown={toggleDrawer(false)}
                        >
                          <React.Fragment>
                            <Drawer
                              hideBackdrop={true}
                              anchor={'right'}
                              open={isFormOpen}
                              onClose={toggleDrawer(false)}
                            >
                              <Box className={classes.connectBox}>
                                {!breakpoints.md ? (
                                  <>
                                    <Box className={classes.buttonBox}>
                                      <SquareButton
                                        variant='outlined'
                                        click={handleClickConnect}
                                        icon={<ClearIcon />}
                                      />
                                    </Box>
                                    <Form
                                      data={data}
                                      title={
                                        lang.lang === 'EN'
                                          ? 'WRITE TO US'
                                          : ' НАПИШИТЕ НАМ'
                                      }
                                      email
                                      text
                                      closeForm={handleClickConnect}
                                      inBurger={breakpoints.md ? true : false}
                                      main
                                      id='burgerForm'
                                      lang={lang.lang}
                                    />
                                  </>
                                ) : (
                                  <>
                                    <Burger
                                      isOpen={true}
                                      lang={lang.lang}
                                      click={
                                        breakpoints.md
                                          ? () => handleClickConnect()
                                          : null
                                      }
                                    />
                                    {!isBurgerMenuOpen ? (
                                      <Box className={classes.menuBox}>
                                        <Menu
                                          inBurger={true}
                                          clickToOpenForm={handleOpenBurgerMenu}
                                          data={data}
                                          toggleLang={lang.toggleLang}
                                          lang={lang.lang}
                                        />
                                      </Box>
                                    ) : (
                                      <>
                                        <Box className={classes.callBox}>
                                          <Typography
                                            variant='h6'
                                            component='p'
                                          >
                                            {lang.lang === 'EN' ? 'Call' : 'Позвонить'} 
                                          </Typography>
                                          <a href='tel:+375447106735'>
                                            <Call />
                                          </a>
                                        </Box>
                                        <Form
                                          data={data}
                                          title={lang.lang === 'EN' ? 'Write to us' : 'Напишите нам'} 
                                          email
                                          text
                                          closeForm={handleOpenBurgerMenu}
                                          inBurger={true}
                                          main
                                          id='burgerForm'
                                          lang={lang.lang}
                                        />
                                      </>
                                    )}
                                  </>
                                )}
                              </Box>
                            </Drawer>
                          </React.Fragment>
                        </div>

                        <Box className={classes.button}>
                          {breakpoints.md || page === 'contacts' || page === 'watch' ? null : (
                            <RegularButton
                              variant='outlined'
                              click={handleClickConnect}
                            >
                              {lang.lang === 'EN' ? 'CONTACT' : 'СВЯЗАТЬСЯ'}
                            </RegularButton>
                          )}
                        </Box>
                        {component
                          ? dataToComponent(component, data, house, lang.lang)
                          : children}
                      </Box>
                      <Footer lang={lang.lang}/>
                    </Box>
                  </Box>
                </>
              ) : (
                <Box className='loaderConteiner'>
                  <div className={classes.loaderBox}>
                    <CircularProgress />
                  </div>
                </Box>
              )}
            </Box>
          </>
        )}
      </LangContext.Consumer>
    </ThemeProvider>
  );
};
export default Layout;
