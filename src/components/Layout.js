import React, { useState } from "react";
import "./global.css";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Footer from "./Footer";
import Menu from "./Menu";
import modularHouseTheme from "../config/modularHouseTheme";
import Box from "@material-ui/core/Box";
import SendForm from "./SendForm";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Burger from "./Burger";
import BurgerMenu from "./BurgerMenu";
import RegularButton from "./buttons/RegularButton";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

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
    if (isFormOpen) {
      setIsFormOpen((state) => !state);
    }
  };
  const handleClickConnect = () => {
    setIsFormOpen((state) => !state);
  };
  if (isBurgerMenuOpen) {
    if (typeof window !== "undefined") {
      document.body.style.overflowY = "hidden";
    }
  } else {
    if (typeof window !== "undefined") {
      document.body.style.overflowY = "overlay";
    }
  }
  return (
    <ThemeProvider theme={modularHouseTheme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Helmet>

      {/* <header>{data.site.siteMetadata.title}</header> */}
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
                  click={handleOpenBurgerMenu}
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
              <BurgerMenu
                isBurgerMenuOpen={isBurgerMenuOpen}
                click={handleOpenBurgerMenu}
                clickToOpenForm={handleClickConnect}
              />
              <SendForm
                isFormOpen={isFormOpen}
                click={handleClickConnect}
                burgerClick={
                  matches[1200] ? () => handleOpenBurgerMenu() : null
                }
              />
              <Box className={classes.button}>
                {matches["1200"] ? null : (
                  <RegularButton variant="outlined" click={handleClickConnect}>
                    СВЯЗАТЬСЯ
                  </RegularButton>
                )}
              </Box>
              {component ? dataToComponent(component, data, house) : children}
              {/* {children} */}
            </Box>
            <Footer />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default Layout;
