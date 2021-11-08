import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const myFontsSize = {
  xl: 1.5,
  widthMobile: 0.75,
  h1: 56,
  h2: 28,
  h3: 24,
  h4: 20,
  h5: 18,
  h6: 14,
  body1: 14,
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
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 960,
  //     lg: 1280,
  //     xl: 1900,
  //   },
  // },
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
      lineHeight: "1.1em",
      letterSpacing:"0.02em",
      fontWeight: 700,
      fontStyle: "normal",
      "@media (min-width:1900px)": {
        // fontSize: myFontsSize.h1 * myFontsSize.xl,
      },
      "@media (max-width:1200px)": {
        // fontSize: myFontsSize.h1 * myFontsSize.widthMobile,
      },
    },
    h2: {
      fontSize: 28,
      lineHeight: 1,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing:"0.015em",
      fontStyle: "normal",
      color: "#4F4F4F",
      "@media (min-width:1900px)": {
        // fontSize: myFontsSize.h3 * myFontsSize.xl,
      },
      "@media (max-width:600px)": {
        fontSize: 24,
        textAlign: "end",
      },
    },
    h3: {
      fontSize: 24,
      lineHeight: 1.15,
      fontWeight: 400,
      fontStyle: "normal",
      color: "#4F4F4F",
      "@media (min-width:1900px)": {
        fontSize: myFontsSize.h3 * myFontsSize.xl,
      },
    },
    h4: {
      fontSize: 20,
      lineHeight: 1.15,
      fontWeight: 500,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#333333",
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      "@media (min-width:1900px)": {
        // fontSize: myFontsSize.h4 * myFontsSize.xl,
      },
      "@media (max-width:600px)": {
        fontSize: '18px',
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
        // fontSize: myFontsSize.h5 * myFontsSize.xl,
      },
    },
    h6: {
      fontSize: 14,
      lineHeight: 1.4,
      fontWeight: 600,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#4F4F4F",
      "@media (min-width:1900px)": {
        // fontSize: myFontsSize.h6 * myFontsSize.xl,
      },
    },
    body1: {
      fontSize: 14,
      lineHeight: 1.4,
      letterSpacing:"0.03em",
      fontWeight: 500,
      fontStyle: "normal",
      color: "#4F4F4F",
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      "@media (min-width:1900px)": {
        // fontSize: myFontsSize.body1 * myFontsSize.xl,
      },
      "@media (max-width:350px)": {
        fontSize: myFontsSize.body1 * myFontsSize.widthMobile,
      },
    },
    body2: {
      fontSize: 12,
      lineHeight: 1.15,
      fontWeight: 400,
      fontStyle: "normal",
      color: "#7C7C7C",
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      "@media (min-width:1900px)": {
        fontSize: myFontsSize.body2 * myFontsSize.xl,
      },
    },
    subtitle1: {
      fontSize: 14,
      lineHeight: 1.15,
      fontWeight: 600,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#4F4F4F",
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      "@media (min-width:1900px)": {
        fontSize: myFontsSize.subtitle1 * myFontsSize.xl,
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
        fontSize: myFontsSize.subtitle2 * myFontsSize.xl,
      },
    },
    button: {
      fontSize: 14,
      lineHeight: 1.15,
      fontWeight: 500,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#333333",
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      "@media (min-width:1900px)": {
        fontSize: myFontsSize.button * myFontsSize.xl,
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
        fontSize: myFontsSize.caption * myFontsSize.xl,
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
