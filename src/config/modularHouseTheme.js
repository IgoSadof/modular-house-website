import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const modularHouseTheme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
      fon: "#D1D1D1",
    },
    secondary: {
      main: green[500],
    },
    textPrimary: {
      main: "#333333",
    },
    textSecondary: {
      main: "#4F4F4F",
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
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
      fontSize: 48,
      color: "white",
      // lineHeight: 50,
      fontWeight: 600,
      fontStyle: "normal",
    },
    h3: {
      fontSize: 24,
      // lineHeight: 50,
      fontWeight: 400,
      fontStyle: "normal",
      color: "#4F4F4F",
    },
    h4: {
      fontSize: 18,
      // lineHeight: 20,
      fontWeight: 500,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#333333",
      fontFamily: ["Ubuntu", "sans-serif"].join(","),
    },
    h5: {
      fontSize: 18,
      // lineHeight: 18,
      fontWeight: 500,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#4F4F4F",
    },
    h6: {
      fontSize: 14,
      // lineHeight: 18,
      fontWeight: 500,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#4F4F4F",
      
    },
    body1: {
      fontSize: 12,
      // lineHeight: 14,
      fontWeight: 400,
      fontStyle: "normal",
      color: "#4F4F4F",
      fontFamily: ["Ubuntu", "sans-serif"].join(","),
    },
    body2: {
      fontSize: 12,
      // lineHeight: 14,
      fontWeight: 400,
      fontStyle: "normal",
      color: "#7C7C7C",
      fontFamily: ["Ubuntu", "sans-serif"].join(","),
    },
    subtitle1: {
      fontSize: 14,
      // lineHeight: 18,
      fontWeight: 600,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#4F4F4F",
      fontFamily: ["Ubuntu", "sans-serif"].join(","),
      
    },
    subtitle2: {
      fontSize: 14,
      // lineHeight: 18,
      fontWeight: 600,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#333333",
    },
    button: {
      fontSize: 14,
      // lineHeight: 14,
      fontWeight: 500,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#333333",
      fontFamily: ["Ubuntu", "sans-serif"].join(","),
    },
    caption:{
      fontSize: 30,
      // lineHeight: 14,
      fontWeight: 600,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#333333",

    }
  },

  overrides: {
    // Style sheet name ⚛️
    MuiButton: {},
  },
});
export default modularHouseTheme;
