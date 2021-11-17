import React, { useState } from "react";
import "./global.css";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Footer from "./Footer";
import Menu from "./Menu";
import modularHouseTheme from "../config/modularHouseTheme";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Burger from "./Burger";
import RegularButton from "./buttons/RegularButton";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Drawer from "@material-ui/core/Drawer";
import ClearIcon from "@material-ui/icons/Clear";
import Form from "./Form";
import call from "../assets/images/call.png";
import Typography from "@material-ui/core/Typography";
import SquareButton from "./buttons/SquareButton";

const dataToComponent = (WrappedComponent, currebtData, house) => {
  return <WrappedComponent data={currebtData} house={house} />;
};

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: (param) =>
      param.page === "aboutUs" ||
      param.page === "main" ||
      param.page === "house"
        ? "100%"
        : "100vh",
    [theme.breakpoints.down("md")]: {
      height: (param) => (param.page === "houseList" ? "100vh" : "100%"),
    },
  },

  Block: {
    position: "relative",
    width: "100%",
    padding: (param) =>
      param.page === "main" ? "0 10% 100px 10%" : "14vh 10% 14vh 10%",
    // padding: "100px 10% 100px 11%",
    backgroundColor: "#D1D1D1",
    overflow: "hidden",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      padding: "0 10% !important",
      marginBottom: "40px",
    },
  },
  BlockFullscreen: {
    position: "relative",
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#D1D1D1",
    overflow: "hidden",
    padding: (param) => (param.page === "main" ? "0 10% 120px 10%" : null),
    [theme.breakpoints.down("md")]: {
      height: (param) => (param.page === "houseList" ? "100%" : null),
      padding: "0 !important",
      marginBottom: (param) =>
        param.page === "house" || param.page === "main" ? "40px" : null,
    },
  },
  button: {
    position: "absolute",
    top: (param) =>
      param.page === "aboutUs" ||
      param.page === "main" ||
      param.page === "house"
        ? "50px"
        : "5%",
    right: "10%",
    zIndex: "2",
  },
  connectBox: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    height: "100vh",
    zIndex: "3",
    padding: "60px 100px 100px 100px",
    justifyContent: "center",
    "& h5": {
      alignSelf: "end",
    },
    [theme.breakpoints.down("md")]: {
      padding: "10%",
      paddingTop: "0",
      width: "100%",
      justifyContent: "space-between",
      gap: "initial",
    },
  },
  buttonBox: {
    marginLeft: "auto",
  },
  callBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "30px",
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
      allFile(filter: { extension: { regex: "/(jpg)|(png)/" } }) {
        edges {
          node {
            id
            base
            relativeDirectory
            relativePath
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
      allMysqlModules {
        nodes {
          moduleName
          parameterValue
          parameterName
          parentId
          contentId
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
      allMysqlRooms {
        nodes {
          contentId
          houseName
          parameterName
          parameterValue
          mysqlId
          parentId
        }
      }
      allMysqlOptions {
        nodes {
          house
          parameterName
          parameterValue
          mysqlId
          contentId
        }
      }
      allMysqlValue {
        nodes {
          contentid
          value
          tmplvarid
        }
      }
      allMysqlParent {
        nodes {
          mysqlId
          mysqlParent
        }
      }
      allMysqlMainPage {
        nodes {
          mysqlId
          parameterName
          parameterValue
        }
      }
    }
  `);
  const matches = {
    1920: useMediaQuery("(min-width:1920px)"),
    1200: useMediaQuery("(max-width:1200px)"),
  };

  const param = { page };
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
    if (event.target.getAttribute("role") === "presentation") {
      setIsFormOpen(false);
      return;
    }
    if (event && event.type === "keydown" && event.key !== "Escape") {
      return;
    }
    if (event && event.type === "click") {
      return;
    }
    open ? setIsFormOpen(true) : setIsFormOpen(false);
  };

  return (
    <ThemeProvider theme={modularHouseTheme}>
      <Helmet>
        <html lang="ru"/>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <meta charSet="utf-8" />
        <meta name="description" content="Moduls houses for living" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Helmet>
      <Box className="conteiner">
        <Menu />
        <Box className="content">
          <Box className={classes.page}>
            <Box
              className={
                page === "watch" ||
                page === "houseList" ||
                page === "main" ||
                page === "house"
                  ? classes.BlockFullscreen
                  : classes.Block
              }
            >
              {matches[1200] ? (
                <Burger
                  click={handleClickConnect}
                  page={page}
                  position={
                    page === "watch" || page === "houseList" || page === "house"
                      ? "absolute"
                      : null
                  }
                  color={
                    page === "watch" || page === "houseList" || page === "house"
                      ? "white"
                      : null
                  }
                />
              ) : null}
              <div
                className={classes.ConnectBox}
                name="form"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <React.Fragment>
                  <Drawer
                    hideBackdrop={true}
                    anchor={"right"}
                    open={isFormOpen}
                    onClose={toggleDrawer(false)}
                  >
                    <Box className={classes.connectBox}>
                      {!matches[1200] ? (
                        <>
                          <Box className={classes.buttonBox}>
                            <SquareButton
                              variant="outlined"
                              click={handleClickConnect}
                              icon={<ClearIcon />}
                            />
                          </Box>
                          <Form
                            title={"Напешите нам"}
                            email
                            text
                            closeForm={handleClickConnect}
                            inBurger={matches[1200] ? true : false}
                            main
                            id="burgerForm"
                          />
                        </>
                      ) : (
                        <>
                          <Burger
                            isOpen={true}
                            click={
                              matches[1200] ? () => handleClickConnect() : null
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
                                <Typography variant="h6" component="p">Позвонить</Typography>
                                <a href="tel:+375293650669">
                                  <img
                                    className={classes.call}
                                    src={call}
                                    alt="call"
                                  ></img>
                                </a>
                              </Box>
                              <Form
                                title={"Напешите нам"}
                                email
                                text
                                closeForm={handleOpenBurgerMenu}
                                inBurger={true}
                                main
                                id="burgerForm"
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
                {matches["1200"] ? null : (
                  <RegularButton variant="outlined" click={handleClickConnect}>
                    СВЯЗАТЬСЯ
                  </RegularButton>
                )}
              </Box>
              {component ? dataToComponent(component, data, house) : children}
            </Box>
            <Footer />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default Layout;
