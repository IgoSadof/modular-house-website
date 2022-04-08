import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    position: "relative",
    display: "flex",
    gap: "20px",
    width: "500px",
    height: "fit-content",
    left: "-100px",
    "& span": {
      marginTop: "auto",
      marginBottom: "8.6px",
    },
    "& h2": {
      whiteSpace: (param) => (param.longLine?"nowrap":null),
      marginLeft:(param) => (param.longLine?"10%":'0'),
    },
    '@media (min-width:1921px)': {
      width: "34.7vw",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "row-reverse",
      left: "0",
      width: "100%",
    },
  },
  line: {
    display: "inline-block",
    width: "80px",
    minWidth: "80px",
    height: "1px",
    backgroundColor: "black",
    marginTop: "22px",
    [theme.breakpoints.down("md")]: { 
      width: (param) => (param.longLine?"100%":"80px"),
    },
  },
}));

const TitleWithLine = ({ title, style, longLine }) => {
  const param = {longLine};
  const classes = useStyles(param);
  return (
    <Box className={classes.sectionTitle} style={style}>
      <span className={classes.line}></span>
      <Typography variant="h2" className={classes.text}>
        {title}
      </Typography>
    </Box>
  );
};
export default TitleWithLine;
