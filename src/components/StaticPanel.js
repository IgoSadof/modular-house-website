import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { houses } from "../constant/houses";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  panel: {
    position: "absolute",
    right: "0",
    bottom: "0",
    width: "700px",
    backgroundColor: "#D1D1D1",
    // borderBottom:'1px solid black'
  },
}));

const StaticPanel = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(state=>newValue);
    props.change(Object.keys(houses[0].img.fotosCategory)[newValue])
  };
  const listItem = Object.keys(houses[0].img.fotosCategory).map((item,index) => {
    return <Tab key={index} label={ <Typography variant='h6' color='textPrimary'> {item} </Typography>}></Tab>
    });
  return (
    <Box className={classes.panel}>
      <Tabs
        ref={ref}
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        {listItem}
      </Tabs>
    </Box>
  );
});

export default StaticPanel;
