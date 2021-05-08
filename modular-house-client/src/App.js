
import Menu from "./components/Menu";
import React from "react";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import MainPage from "./pages/MainPage";
const useStyles = makeStyles((theme) => ({
  root: {
    position:"relative",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflowX:"hidden",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="App">
        <div className={classes.root}>
          <Switch>
            <Route exact path="/">
              <MainPage/>
            </Route>
            <Route exact path="/who-we-are">
              {/* <WhoWeAre /> */}
            </Route>
          </Switch>
          <Menu />
        </div>
      </div>
    </Router>
  );
}

export default App;

