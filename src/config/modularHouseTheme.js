import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const modularHouseTheme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
      fon:"#D1D1D1",
      
    },
    secondary: {
      main: green[500],
    },
     black: {
      main: 'black',
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: 24,
    },
  },
});
export default modularHouseTheme;
