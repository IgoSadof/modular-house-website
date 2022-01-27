import { createTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

export const customFontsSize = {
  xl: 2,
  widthMobile: 0.75,
  h1: 56,
  h2: 28,
  h3: 24,
  h4: 20,
  h5: 18,
  h6: 14,
  body1: 14,
  body2: 12,
  subtitle1: 14,
  subtitle2: 14,
  button: 14,
  caption: 30,
};


const modularHouseTheme = createTheme({
  palette: {
    primary: {
      // main: 'purple[500]',
      main: "#000000",
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
  //     xl: 1921,
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
      fontSize: customFontsSize.h1,
      color: "white",
      lineHeight: "1.1em",
      letterSpacing: "0.02em",
      fontWeight: 700,
      fontStyle: "normal",
      "@media (min-width:1921px)": {
        fontSize: customFontsSize.h1 * customFontsSize.xl,
      },
      "@media (max-width:1200px)": {
        // fontSize: customFontsSize.h1 * customFontsSize.widthMobile,
      },
    },
    h2: {
      fontSize: 28,
      lineHeight: 1,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.015em",
      fontStyle: "normal",
      color: "#4F4F4F",
      "@media (min-width:1921px)": {
        fontSize: customFontsSize.h3 * customFontsSize.xl,
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
      "@media (min-width:1921px)": {
        fontSize: customFontsSize.h3 * customFontsSize.xl,
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
      "@media (min-width:1921px)": {
        fontSize: customFontsSize.h4 * customFontsSize.xl,
      },
      "@media (max-width:600px)": {
        fontSize: "18px",
      },
    },

    h5: {
      fontSize: 18,
      lineHeight: 1.15,
      fontWeight: 500,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#4F4F4F",
      "@media (min-width:1921px)": {
        fontSize: customFontsSize.h5 * customFontsSize.xl,
      },
    },
    h6: {
      fontSize: 14,
      lineHeight: 1.4,
      fontWeight: 600,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#4F4F4F",
      "@media (min-width:1921px)": {
        fontSize: customFontsSize.h6 * customFontsSize.xl,
      },
    },
    body1: {
      fontSize: 14,
      lineHeight: 1.4,
      letterSpacing: "0.03em",
      fontWeight: 500,
      fontStyle: "normal",
      color: "#4F4F4F",
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      "@media (min-width:1921px)": {
        fontSize: customFontsSize.body1 * customFontsSize.xl,
      },
      "@media (max-width:350px)": {
        fontSize: customFontsSize.body1 * customFontsSize.widthMobile,
      },
    },
    body2: {
      fontSize: 12,
      lineHeight: 1.15,
      fontWeight: 400,
      fontStyle: "normal",
      color: "#7C7C7C",
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      "@media (min-width:1921px)": {
        fontSize: customFontsSize.body2 * customFontsSize.xl,
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
      "@media (min-width:1921px)": {
        fontSize: customFontsSize.subtitle1 * customFontsSize.xl,
      },
    },
    subtitle2: {
      fontSize: 14,
      lineHeight: 1.15,
      fontWeight: 600,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#333333",
      "@media (min-width:1921px)": {
        fontSize: customFontsSize.subtitle2 * customFontsSize.xl,
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
      "@media (min-width:1921px)": {
        fontSize: customFontsSize.button * customFontsSize.xl,
      },
    },
    caption: {
      fontSize: 30,
      lineHeight: 1.15,
      fontWeight: 600,
      fontStyle: "normal",
      textTransform: "uppercase",
      color: "#333333",
      "@media (min-width:1921px)": {
        fontSize: customFontsSize.caption * customFontsSize.xl,
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
