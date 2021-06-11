import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  panel: {
    position: "absolute",
    right: "0",
    bottom: "0",
    width: "700px",
    backgroundColor: "#e5e5e5",
  },
}));

const Panel = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className={classes.panel}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="ВСЕ" />
        <Tab label="ФАСАД" />
        <Tab label="КУХНЯ" />
        <Tab label="ТУАЛЕТ" />
      </Tabs>
    </Box>
  );
};

export default Panel;
