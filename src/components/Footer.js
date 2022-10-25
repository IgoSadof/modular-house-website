import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { customFontsSize } from '../config/modularHouseTheme';

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#4F4F4F',
    alignItems: 'center',
    height: '50px',
    '@media (min-width:1921px)': {
      height: '3.5vw',
    },
    [theme.breakpoints.down('md')]: {
      padding: '10px',
    },
  },
  text: {
    color: theme.palette.primary.fon,
    fontSize: '15px',
    lineHeight: '1.4',
    '@media (min-width:1921px)': {
      fontSize: customFontsSize.h6.adaptiv,
    },
  },
}));

const Footer = ({lang}) => {
  const classes = useStyles();

  return (
    <Box component='footer' className={classes.root}>
      <Typography className={classes.text}>
      {`© ${new Date().getUTCFullYear()} | ${lang === 'EN' ? 'LLC "Art-studio "Zrobim"' : 'ООО "Арт-студия "Зробим"'} ` 
      `<script type="text/javascript" >
      (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
   
      ym(57371404, "init", {
           clickmap:true,
           trackLinks:true,
           accurateTrackBounce:true
      });
   </script>
   <noscript><div><img src="https://mc.yandex.ru/watch/57371404" style="position:absolute; left:-9999px;" alt="" /></div></noscript>`}
      </Typography>
    </Box>
  );
};
export default Footer;
