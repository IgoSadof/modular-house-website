import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import Form from "./Form";
import { GatsbyImage } from "gatsby-plugin-image";
import TitleWithLine from "../components/TitleWithLine";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  Block: {
    display: "flex",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  title: {
    marginTop: "140px",
    width: "165px",
  },
  mediaBlock: {
    display: "flex",
    marginLeft: "auto",
    // border: "1px solid",
    width: "50%",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      order: "1,",
    },
  },
  mediaBlock_unborder: {
    border: "none",
    // border:"1px solid"
  },
  formBox: {
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      margin: "0",
     
    },
  },
  titleBox: {
    width: "30vw",
    display: "flex",
    gap: "20px",
    flexDirection: "row-reverse",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      right: "-12%",
      width: "100%",
      marginLeft: "0",
      // marginLeft: "auto",
    },
  },

  button: {
    width: "120px",
    borderRadius: "0",
    height: "36px",
    marginTop: "96px",
    border: "1px solid",
  },
  text: {
    width: "300px",
    textTransform: "uppercase",
  },
  expodom_img: {
    width: "90%",
    objectFit: "cover",
    marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  Expodom: {
    "& .makeStyles-message-392": {
      color: "red",
    },
  },
  BlockColumn: {
    width: "30vw",
    display: "flex",
    gap: "20px",
    marginLeft: "100px",
    justifyContent: "space-between",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      order: "3",
      marginLeft: "0",
      width: "100%",
    },
  },
}));

const FormBlock = ({
  header,
  title,
  subtitle,
  text,
  email,
  img,
  formPosition,
  staticImg,
  padding
}) => {
  const param = { formPosition };
  const classes = useStyles(param);
  const matches = {
    1200: useMediaQuery("(max-width:1200px)"),
  };

  return (
    <div className={classes.root}>
      <Box className={`${classes.Block} ${classes.Expodom}`}>
        {!matches[1200] ? (
          <>
            <Box className={classes.BlockColumn}>
              <Box className={classes.titleBox}>
                {header ? <TitleWithLine title={header} /> : null}
              </Box>
              <Box className={classes.formBox} >
                <Form
                  title={title}
                  subtitle={subtitle ? subtitle : null}
                  email={email ? email : null}
                  text={text ? text : null}
                  id="formBlock"
                />
              </Box>
            </Box>
            <Box
              className={`${classes.mediaBlock} ${classes.mediaBlock_unborder}`}
            >
              {!staticImg ? (
                <GatsbyImage
                  className={classes.expodom_img}
                  image={img}
                  alt="img"
                ></GatsbyImage>
              ) : (
                <img className={classes.expodom_img} src={img} alt="img"></img>
              )}
            </Box>
          </>
        ) : (
          <>
            <Box className={classes.titleBox} style={{marginBottom: "40px",}}>
              {header ? <TitleWithLine title={header} /> : null}
            </Box>
            <Box
              className={`${classes.mediaBlock} ${classes.mediaBlock_unborder}`}
            >
              {!staticImg ? (
                <GatsbyImage
                  className={classes.expodom_img}
                  image={img}
                  alt="img"
                ></GatsbyImage>
              ) : (
                <img className={classes.expodom_img} src={img} alt="img"></img>
              )}
            </Box>
            <Box className={classes.BlockColumn}>
              <Box className={classes.formBox} style={padding?{ padding: "0 10%"}:null}>
                <Form
                  title={title}
                  subtitle={subtitle ? subtitle : null}
                  email={email ? email : null}
                  text={text ? text : null}
                  id="formBlock"
                />
              </Box>
            </Box>
          </>
        )}
      </Box>
    </div>
  );
};
export default FormBlock;
