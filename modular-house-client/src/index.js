import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import modularHouseTheme from "./config/modularHouseTheme"

ReactDOM.render(
  
  // <React.StrictMode>
  <ThemeProvider theme={modularHouseTheme}>
    <App />

  </ThemeProvider>,
    
  // </React.StrictMode>,
  document.getElementById('root')
);

