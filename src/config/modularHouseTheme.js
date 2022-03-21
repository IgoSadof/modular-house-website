import { createTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

export const customFontsSize = {
  xl: 2,
  widthMobile: 0.75,
  h1: { regular: 56, adaptiv: '2.91vw' },
  h2: { regular: 28, adaptiv: '1.45vw' },
  h3: { regular: 24, adaptiv: '1.25vw' },
  h4: { regular: 20, adaptiv: '1.04vw' },
  h5: { regular: 18, adaptiv: '0.94vw' },
  h6: { regular: 14, adaptiv: '0.73vw' },
  body1: { regular: 14, adaptiv: '0.73vw' },
  body2: { regular: 12, adaptiv: '0.63vw' },
  subtitle1: { regular: 14, adaptiv: '0.73vw' },
  subtitle2: { regular: 14, adaptiv: '0.73vw' },
  button: { regular: 14, adaptiv: '0.73vw' },
  caption: { regular: 30, adaptiv: '1.56vw' },
};

const modularHouseTheme = createTheme({
  palette: {
    primary: {
      // main: 'purple[500]',
      main: '#000000',
      fon: '#D1D1D1',
    },
    secondary: {
      main: green[500],
    },
    textPrimary: {
      main: '#333333',
    },
    textSecondary: {
      main: '#4F4F4F',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),

    h1: {
      fontSize: customFontsSize.h1.regular,
      color: 'white',
      lineHeight: '1.1em',
      letterSpacing: '0.02em',
      fontWeight: 700,
      fontStyle: 'normal',
      '@media (min-width:1921px)': {
        fontSize: customFontsSize.h1.adaptiv,
      },
      '@media (max-width:1200px)': {
        // fontSize: customFontsSize.h1 * customFontsSize.widthMobile,
      },
    },
    h2: {
      fontSize: customFontsSize.h2.regular,
      lineHeight: 1.2,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.015em',
      fontStyle: 'normal',
      color: '#4F4F4F',
      '@media (min-width:1921px)': {
        fontSize: customFontsSize.h2.adaptiv,
      },
      '@media (max-width:600px)': {
        fontSize: 24,
        textAlign: 'end',
      },
    },
    h3: {
      fontSize: customFontsSize.h3.regular,
      lineHeight: 1.15,
      fontWeight: 400,
      fontStyle: 'normal',
      color: '#4F4F4F',
      '@media (min-width:1921px)': {
        fontSize: customFontsSize.h3.adaptiv,
      },
    },
    h4: {
      fontSize: customFontsSize.h4.regular,
      lineHeight: 1.15,
      fontWeight: 500,
      fontStyle: 'normal',
      textTransform: 'uppercase',
      color: '#333333',
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      '@media (min-width:1921px)': {
        fontSize: customFontsSize.h4.adaptiv,
      },
      '@media (max-width:600px)': {
        fontSize: '18px',
      },
    },

    h5: {
      fontSize: customFontsSize.h5.regular,
      lineHeight: 1.15,
      fontWeight: 500,
      fontStyle: 'normal',
      textTransform: 'uppercase',
      color: '#4F4F4F',
      '@media (min-width:1921px)': {
        fontSize: customFontsSize.h5.adaptiv,
      },
    },
    h6: {
      fontSize: customFontsSize.h6.regular,
      lineHeight: 1.4,
      fontWeight: 600,
      fontStyle: 'normal',
      textTransform: 'uppercase',
      color: '#4F4F4F',
      scrollbarWidth: 'none',
      '@media (min-width:1921px)': {
        fontSize: customFontsSize.h6.adaptiv,
      },
    },
    body1: {
      fontSize: customFontsSize.body1.regular,
      lineHeight: 1.4,
      letterSpacing: '0.03em',
      fontWeight: 500,
      fontStyle: 'normal',
      color: '#4F4F4F',
      scrollbarWidth: 'none',
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      '@media (min-width:1921px)': {
        fontSize: customFontsSize.body1.adaptiv,
      },
      '@media (max-width:350px)': {
        fontSize: customFontsSize.body1.regular * customFontsSize.widthMobile,
      },
    },
    body2: {
      fontSize: customFontsSize.body2.regular,
      lineHeight: 1.15,
      fontWeight: 400,
      fontStyle: 'normal',
      color: '#7C7C7C',
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      '@media (min-width:1921px)': {
        fontSize: customFontsSize.body2.adaptiv,
      },
    },
    subtitle1: {
      fontSize: customFontsSize.subtitle1.regular,
      lineHeight: 1.15,
      fontWeight: 600,
      fontStyle: 'normal',
      textTransform: 'uppercase',
      color: '#4F4F4F',
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      '@media (min-width:1921px)': {
        fontSize: customFontsSize.subtitle1.adaptiv,
      },
    },
    subtitle2: {
      fontSize: customFontsSize.subtitle2.regular,
      lineHeight: 1.15,
      fontWeight: 600,
      fontStyle: 'normal',
      textTransform: 'uppercase',
      color: '#333333',
      '@media (min-width:1921px)': {
        fontSize: customFontsSize.subtitle2.adaptiv,
      },
    },
    button: {
      fontSize: customFontsSize.button.regular,
      lineHeight: 1.15,
      fontWeight: 500,
      fontStyle: 'normal',
      textTransform: 'uppercase',
      color: '#333333',
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      '@media (min-width:1921px)': {
        fontSize: customFontsSize.button.adaptiv,
      },
    },
    caption: {
      fontSize: customFontsSize.caption.regular,
      lineHeight: 1.15,
      fontWeight: 600,
      fontStyle: 'normal',
      textTransform: 'uppercase',
      color: '#333333',
      '@media (min-width:1921px)': {
        fontSize: customFontsSize.caption.adaptiv,
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
