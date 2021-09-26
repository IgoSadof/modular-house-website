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
    // width: "60%",
    backgroundColor: "#D1D1D1",
    // borderBottom:'1px solid black'
  },
}));

const Panel = React.forwardRef(({change,arr}, ref) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    console.log(arr[newValue].name)
    setValue(state=>newValue);
    change(arr[newValue].name)
  };
  const listItem = arr.map((item,index) => {
    return <Tab key={index} label={ <Typography variant='h6' color='textPrimary'> {item['Название модуля']} </Typography>}></Tab>
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

export default Panel;
