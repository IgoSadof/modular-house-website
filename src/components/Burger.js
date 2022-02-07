import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/images/newlogo.png';
import cros from '../assets/images/cros.png';
import Box from '@material-ui/core/Box';
import { Link } from 'gatsby';

const useStyles = makeStyles((theme) => ({
  logoBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: "40px",
    position: (param) => (param.position ? param.position : 'relative'),
    width: '100%',
    // height: '40px',
    paddingLeft: (param) =>
      param.position === 'absolute' ||
      param.page === 'main' ||
      param.page === 'contacts'
        ? '10%'
        : '0',
    paddingRight: (param) =>
      param.position === 'absolute' ||
      param.page === 'main' ||
      param.page === 'contacts'
        ? '10%'
        : '0',
    zIndex: '3',
    filter: (param) => (param.color === 'white' ? 'invert(1)' : null),
  },
  logo: {
    width: '50px',
    height: '50px',
    objectFit: 'contain',
  },
  burgerBox: {
    cursor: 'pointer',
  },
  bar: {
    width: '42px',
    height: '2px',
    backgroundColor: '#333',
    margin: '7px 0',
    transition: '0.4s',
  },
}));

export default function Burger({ color, click, isOpen, position, page }) {
  const param = { color, isOpen, position, page };
  const classes = useStyles(param);

  return (
    <Box className={classes.logoBox}>
      <Link to={'/'}>
        <Box className={classes.logo}>
          <img className={classes.logo} src={logo} alt='logo'></img>
        </Box>
      </Link>
      <Box className={classes.burgerBox} onClick={click}>
        {isOpen ? (
          <img className={classes.cros} src={cros} alt='cros'></img>
        ) : (
          <div className={classes.burger}>
            <div className={classes.bar}></div>
            <div className={classes.bar}></div>
            <div className={classes.bar}></div>
          </div>
        )}
      </Box>
    </Box>
  );
}
