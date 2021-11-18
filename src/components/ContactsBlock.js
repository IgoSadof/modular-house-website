import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Logo from "./svg/Logo";
import { GatsbyImage } from "gatsby-plugin-image";
import getImg from "../utils/getImg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  BlockMain: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      paddingTop: "40px",
    },
  },
  BlockContent: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: "60px",
    },
  },
  BlockColumn: {
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  textHeader: {
    textTransform: "uppercase",
  },
  logoBox: {
    display: "flex",
  },
  logo: {
    width: "83px",
  },
  contactsBox: {
    display: "flex",
    flexDirection: "column",
    gap: "60px",
    justifyContent: "space-between",
  },
  contactsBoxes: {
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      gap: "20px",
      justifyContent: "center",
    },
  },
  personalBoxLink: {
    textDecoration: "none",
  },
  personalBox: {
    width: "225px",
    [theme.breakpoints.down("md")]: {
      width: "150px",
    },
  },
  contactsFoto: {
    width: "100%",
  },
  infoBox: {
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
  },
  infoBoxText: {
    display: "flex",
    flexDirection: "column",
    marginTop: "auto",
    gap: "30px",
  },
  contactsName: {
    marginTop: "30px",
    fontWeight: "400",
  },
  contactsPosition: {
    fontSize: "12px",
    fontWeight: "300",
    marginTop: "10px",
  },
  contactsPhone: {
    marginTop: "30px",
  },
}));

const ContactsBlock = ({ header, data }) => {
  const matches = {
    1920: useMediaQuery("(min-width:1920px)"),
    1200: useMediaQuery("(max-width:1200px)"),
  };
  const classes = useStyles();

  return (
    <Box components="main" className={classes.root}>
      <Box components="section" className={classes.BlockMain}>
        {header ? (
          <Box className={classes.BlockColumn}>
            <Typography variant="h2" className={classes.textHeader}>
              {header}
            </Typography>
            <Box className={classes.logoBox}>
              {/* <img className={classes.logo} src={logo} alt="logo"></img> */}
              <Logo color={"#4F4F4F"} />
              {/* <Typography variant="subtitle1">MODULAR HOUSE</Typography> */}
            </Box>
          </Box>
        ) : null}

        <Box components="section" className={classes.BlockContent}>
          <Box className={classes.contactsBox}>
            <Box className={classes.contactsBoxes}>
              <a className={classes.personalBoxLink} href="tel:+375293650669">
                <Box className={classes.personalBox}>
                  <GatsbyImage
                    className={classes.mainPlan}
                    image={getImg(data, "images/andrey2.png")}
                    alt="img"
                  ></GatsbyImage>
                  <Typography
                    className={classes.contactsName}
                    variant="h4"
                    component="p"
                  >
                    Андрусь Bezdar
                  </Typography>
                  <Typography
                    className={classes.contactsPosition}
                    variant="body1"
                    component="p"
                  >
                    CEO & FOUNDER
                  </Typography>
                  <Typography
                    className={classes.contactsPhone}
                    variant="h4"
                    component="p"
                  >
                    +375 44 5180676
                  </Typography>
                </Box>
              </a>

              <a className={classes.personalBoxLink} href="tel:+375445180676">
                <Box className={classes.personalBox}>
                  <GatsbyImage
                    className={classes.mainPlan}
                    image={getImg(data, "images/alexey2.png")}
                    alt="img"
                  ></GatsbyImage>

                  <Typography
                    className={classes.contactsName}
                    variant="h4"
                    component="p"
                  >
                    Алексей Кораблев
                  </Typography>
                  <Typography
                    className={classes.contactsPosition}
                    variant="body1"
                  >
                    CEO & FOUNDER
                  </Typography>
                  <Typography
                    className={classes.contactsPhone}
                    variant="h4"
                    component="p"
                  >
                    +375 29 3650669
                  </Typography>
                </Box>
              </a>
            </Box>
            {!matches[1200] ? (
              <Box className={classes.infoBox}>
                {!header ? (
                  <Box className={classes.logoBox}>
                    <Logo color={"#4F4F4F"} />
                    {/* <Typography variant="subtitle1">MODULAR HOUSE</Typography> */}
                  </Box>
                ) : null}

                <Box className={classes.infoBoxText}>
                  <a
                    className={classes.personalBoxLink}
                    href="mailto:info@zrobym.by"
                  >
                    <Typography variant="body1">info@zrobym.by</Typography>
                  </a>
                  <Typography variant="body1">
                    ул. Богдановича 11, 3 этаж
                  </Typography>
                </Box>
              </Box>
            ) : null}
          </Box>

          {matches[1200] ? (
            <Box className={classes.infoBox}>
              {!header ? (
                <Box className={classes.logoBox}>
                  <Logo color={"#4F4F4F"} />
                </Box>
              ) : null}

              <Box className={classes.infoBoxText}>
                <a
                  className={classes.personalBoxLink}
                  href="mailto:info@zrobym.by"
                >
                  <Typography variant="body1">info@zrobym.by</Typography>
                </a>
                <Typography variant="body1">
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
export default ContactsBlock;
