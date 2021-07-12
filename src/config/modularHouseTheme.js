import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const myFontsSize = {
  width1900: 1.5,
  widthMobile: 0.75,
  h1: 48,
  h3: 24,
  h4: 18,
  h5: 18,
  h6: 14,
  body1: 12,
  body1: 12,
  subtitle1: 14,
  subtitle2: 14,
  button: 14,
  caption: 30,
};

const modularHouseTheme = createMuiTheme({
  palette: {
    primary: {
      // main: 'purple[500]',
      main: '#000000',
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1900,
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
      fontSize: myFontsSize.h1,
      color: "white",
      lineHeight: 1.15,
      fontWeight: 600,
      fontStyle: "normal",
      "@media (min-width:1900px)": {
        fontSize: myFontsSize.h1 * myFontsSize.width1900,
      },
      "@media (max-width:1200px)": {
        fontSize: myFontsSize.h1 * myFontsSize.widthMobile,
      },
    },
    h3: {
      fontSize: 24,
      lineHeight: 1.15,
      fontWeight: 400,
      fontStyle: "normal",
      color: "#4F4F4F",
      "@media (min-width:1900px)": {
        fontSize: myFontsSize.h3 * myFontsSize.width1900,
      },
    },
    h4: {
      fontSize: 18,
      lineHeight: 1.15,
      fontWeight: 500,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#333333",
      fontFamily: ["Ubuntu", "sans-serif"].join(","),
      "@media (min-width:1900px)": {
        fontSize: myFontsSize.h4 * myFontsSize.width1900,
      },
    },

    h5: {
      fontSize: 18,
      lineHeight: 1.15,
      fontWeight: 500,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#4F4F4F",
      "@media (min-width:1900px)": {
        fontSize: myFontsSize.h5 * myFontsSize.width1900,
      },
    },
    h6: {
      fontSize: 14,
      lineHeight: 1.15,
      fontWeight: 500,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#4F4F4F",
      "@media (min-width:1900px)": {
        fontSize: myFontsSize.h6 * myFontsSize.width1900,
      },
    },
    body1: {
      fontSize: 12,
      lineHeight: 1.15,
      fontWeight: 400,
      fontStyle: "normal",
      color: "#4F4F4F",
      fontFamily: ["Ubuntu", "sans-serif"].join(","),
      "@media (min-width:1900px)": {
        fontSize: myFontsSize.body1 * myFontsSize.width1900,
      },
    },
    body2: {
      fontSize: 12,
      lineHeight: 1.15,
      fontWeight: 400,
      fontStyle: "normal",
      color: "#7C7C7C",
      fontFamily: ["Ubuntu", "sans-serif"].join(","),
      "@media (min-width:1900px)": {
        fontSize: myFontsSize.body2 * myFontsSize.width1900,
      },
    },
    subtitle1: {
      fontSize: 14,
      lineHeight: 1.15,
      fontWeight: 600,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#4F4F4F",
      fontFamily: ["Ubuntu", "sans-serif"].join(","),
      "@media (min-width:1900px)": {
        fontSize: myFontsSize.subtitle1 * myFontsSize.width1900,
      },
    },
    subtitle2: {
      fontSize: 14,
      lineHeight: 1.15,
      fontWeight: 600,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#333333",
      "@media (min-width:1900px)": {
        fontSize: myFontsSize.subtitle2 * myFontsSize.width1900,
      },
    },
    button: {
      fontSize: 14,
      lineHeight: 1.15,
      fontWeight: 500,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#333333",
      fontFamily: ["Ubuntu", "sans-serif"].join(","),
      "@media (min-width:1900px)": {
        fontSize: myFontsSize.button * myFontsSize.width1900,
      },
    },
    caption: {
      fontSize: 30,
      lineHeight: 1.15,
      fontWeight: 600,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#333333",
      "@media (min-width:1900px)": {
        fontSize: myFontsSize.caption * myFontsSize.width1900,
      },
    },
    srOnly: {},
  },

  overrides: {
    // Style sheet name ⚛️
    MuiButton: {},
  },
});
export default modularHouseTheme;
