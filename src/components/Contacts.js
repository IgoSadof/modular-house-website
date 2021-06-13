import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import logo from "../assets/images/logo.svg";
import andrey from "../assets/images/andrey.png";
import alexey from "../assets/images/alexey.png";
import Form from "./Form";

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
  },
  BlockContent: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.BlockMain}>
        {header ? (
          <Box className={classes.BlockColumn}>
            <Typography className={classes.textHeader}>{header}</Typography>
            <Box className={classes.logoBox}>
              <img
                className={classes.logo}
                src={logo}
                alt="logo"
                alt="img"
              ></img>
              <Typography variant="subtitle1">MODULAR HOUSE</Typography>
            </Box>
          </Box>
        ) : null}

        <Box className={classes.BlockContent}>
          <Box className={classes.contactsBox}>
            <Box className={classes.contactsBoxes}>
              <Box className={classes.personalBox}>
                <img
                  className={classes.contactsFoto}
                  src={andrey}
                  alt="Foto"
                  alt="img"
                ></img>
                <Typography variant="subtitle1">Андрей</Typography>
                <Typography variant="subtitle1">Главный</Typography>
                <Typography variant="subtitle1">+375 29 3650669 </Typography>
              </Box>
              <Box className={classes.personalBox}>
                <img
                  className={classes.contactsFoto}
                  src={alexey}
                  alt="Foto"
                  alt="img"
                ></img>
                <Typography variant="subtitle1">Алексей</Typography>
                <Typography variant="subtitle1">Главный</Typography>
                <Typography variant="subtitle1">+375 44 5180676</Typography>
              </Box>
            </Box>
            <Box className={classes.infoBox}>
              {!header ? (
                <Box className={classes.logoBox}>
                  <img
                    className={classes.logo}
                    src={logo}
                    alt="logo"
                    alt="img"
                  ></img>
                  <Typography variant="subtitle1">MODULAR HOUSE</Typography>
                </Box>
              ) : null}

              <Box className={classes.infoBoxText}>
                <Typography variant="subtitle1">info@zrobym.by</Typography>
                <Typography variant="subtitle1">
                  ул. Богдановича 11, 3 этаж
                </Typography>
              </Box>
            </Box>
          </Box>
          <Form title={"НАПИШИТЕ НАМ"} email text />
        </Box>
      </Box>
    </div>
  );
};
export default Contacts;
