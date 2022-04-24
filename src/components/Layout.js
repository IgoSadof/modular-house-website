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
import call from '../assets/images/call.png';
import Typography from '@material-ui/core/Typography';
import SquareButton from './buttons/SquareButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import favicon from '../assets/images/favicon.ico';
import Cross from './svg/Cross';
import Call from './svg/Call';

const dataToComponent = (WrappedComponent, currebtData, house) => {
  return <WrappedComponent data={currebtData} house={house} />;
};

const useStyles = makeStyles((theme) => ({
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: (param) =>
      param.page === 'aboutUs' ||
      param.page === 'main' ||
      param.page === 'house'
        ? '100%'
        : '100vh',
    [theme.breakpoints.down('md')]: {
      height: (param) =>
        param.page === 'houseList' && param.breakpoints.md ? '100%' : '100%',
    },
    '@media (max-height:600px)': {
      height:'100% !important',
    },
   
  },

  Block: {
    position: 'relative',
    width: '100%',
    padding: (param) =>
      param.page === 'main' ? '0 10% 100px 10%' : '14vh 10% 14vh 10%',
    // padding: "100px 10% 100px 11%",
    backgroundColor: '#D1D1D1',
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
    backgroundColor: '#D1D1D1',
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
        ? '3.5vw'
        : '5%',
    right: '10%',
    zIndex: '2',
  },
  connectBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
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
      width: '100%',
      justifyContent: 'space-between',
      gap: 'unset',
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
        filter: { extension: { regex: "/(jpg)|(png)|(glb)|(usdz)|(mp4)/" } }
      ) {
        edges {
          node {
            id
            base
            relativeDirectory
            relativePath
            publicURL
            childImageSharp {
              gatsbyImageData(
                width: 1600
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
      allMysqlHouses {
        nodes {
          alias
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
      allMysqlAboutUs {
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
    }
  `);

  const breakpoints = useBreakpoint();

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

  return (
    <ThemeProvider theme={modularHouseTheme}>
      <Helmet>
        <html lang='ru' />
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <meta charSet='utf-8' />
        <meta name='description' content='Moduls houses for living' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link rel='shortcut icon' href={favicon} type='image/x-icon'></link>
      </Helmet>
      <Box position='relative' className='conteiner'>
        {breakpoints.isLoad ? (
          <>
            <Menu />
            <Box className='content'>
              <Box className={classes.page}>
                <Box
                  className={
                    page !== 'aboutUs' ? classes.BlockFullscreen : classes.Block
                  }
                >
                  {breakpoints.md ? (
                    <Burger
                      click={handleClickConnect}
                      page={page}
                      position={page !== 'aboutUs' && page !== 'houseList'  ? 'absolute' : 'relative'}
                      color={
                        page === 'watch' ||
                        page === 'house'
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
                                title={'НАПИШИТЕ НАМ'}
                                email
                                text
                                closeForm={handleClickConnect}
                                inBurger={breakpoints.md ? true : false}
                                main
                                id='burgerForm'
                              />
                            </>
                          ) : (
                            <>
                              <Burger
                                isOpen={true}
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
                                  />
                                </Box>
                              ) : (
                                <>
                                  <Box className={classes.callBox}>
                                    <Typography variant='h6' component='p'>
                                      Позвонить
                                    </Typography>
                                    <a href='tel:+375447702236'>
                                      <Call/>
                                    </a>
                                  </Box>
                                  <Form
                                    title={'напишите нам'}
                                    email
                                    text
                                    closeForm={handleOpenBurgerMenu}
                                    inBurger={true}
                                    main
                                    id='burgerForm'
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
                    {breakpoints.md || page === 'contacts' ? null : (
                      <RegularButton
                        variant='outlined'
                        click={handleClickConnect}
                      >
                        СВЯЗАТЬСЯ
                      </RegularButton>
                    )}
                  </Box>
                  {component
                    ? dataToComponent(component, data, house)
                    : children}
                </Box>
                <Footer />
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
    </ThemeProvider>
  );
};
export default Layout;
