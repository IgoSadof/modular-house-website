import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import logo from "../assets/images/newlogo.png";
import andrey from "../assets/images/andrey.png";
import alexey from "../assets/images/alexey.png";
import Form from "./Form";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
    justifyContent: "space-around",
    width: "100%",
    height: "100%",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: "80px",
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "135px",
    gap: "7px",
  },
  logo: {
    width: "83px",
  },
  contactsBox: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    justifyContent: "space-between",
  },
  contactsBoxes: {
    display: "flex",
    gap: "40px",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      gap: "20px",
    },
  },
  personalBoxLink: {
    textDecoration: "none",
  },
  personalBox: {
    [theme.breakpoints.up("xl")]: {
      width: "20vh",
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
}));

const Contacts = ({ header }) => {
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
            <Typography variant="h4" className={classes.textHeader}>
              {header}
            </Typography>
            <Box className={classes.logoBox}>
              <img className={classes.logo} src={logo} alt="logo"></img>
              {/* <Typography variant="subtitle1">MODULAR HOUSE</Typography> */}
            </Box>
          </Box>
        ) : null}

        <Box components="section" className={classes.BlockContent}>
          <Box className={classes.contactsBox}>
            <Box className={classes.contactsBoxes}>
              <a className={classes.personalBoxLink} href="tel:+375293650669">
                <Box className={classes.personalBox}>
                  <img
                    className={classes.contactsFoto}
                    src={andrey}
                    alt="Foto"
                  ></img>
                  <Typography variant="body1">Андрей</Typography>
                  <Typography variant="body1">Главный</Typography>
                  <Typography variant="body1">+375 29 3650669 </Typography>
                </Box>
              </a>

              <a className={classes.personalBoxLink} href="tel:+375445180676">
                <Box className={classes.personalBox}>
                  <img
                    className={classes.contactsFoto}
                    src={alexey}
                    alt="Foto"
                  ></img>
                  <Typography variant="body1">Алексей</Typography>
                  <Typography variant="body1">Главный</Typography>
                  <Typography variant="body1">+375 44 5180676</Typography>
                </Box>
              </a>
            </Box>
            {!matches[1200] ? (
              <Box className={classes.infoBox}>
                {!header ? (
                  <Box className={classes.logoBox}>
                    <img className={classes.logo} src={logo} alt="logo"></img>
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
          <Form title={"НАПИШИТЕ НАМ"} email text main />
          {matches[1200] ? (
            <Box className={classes.infoBox}>
              {!header ? (
                <Box className={classes.logoBox}>
                  <img className={classes.logo} src={logo} alt="logo"></img>
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
      </Box>
    </Box>
  );
};
export default Contacts;
