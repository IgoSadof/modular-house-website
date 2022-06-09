import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    padding: '12px 30px',
    fontSize: '14px',
    fontWeight: '400',
    borderRadius: '0',
    lineHeight: '1',
    letterSpacing: '0.015em',
    minWidth: '152px',
    height: '38px',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    border:'1px solid',
    cursor:'pointer',
    pointerEvents:'visible',
    color: (param)=>param.color,
    borderColor: (param)=>param.bdColor,
    backgroundColor: (param)=>param.bgColor,
    boxShadow: 'none',
    '&:hover': {
      filter: 'brightness(1.2)',
      backgroundColor: (param)=>param.bgColor,
    },
    '@media (min-width:1921px)': {
      minWidth: '8.6vw',
      height: '2.4vw',
      fontSize: '0.8vw',
      // padding: '0.8vw 2.1vw',
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '140px',
      height: '38px',
    },
  },
}));

export default function RegularButton({
  children,
  click,
  variant,
  bgColor = '#4F4F4F',
  bdColor = '#4F4F4F',
  color = '#F2F2F2',
  leftNone,
  submit,
  lowerCase,
}) {
  const param = { color, leftNone, lowerCase, bgColor, bdColor };
  const classes = useStyles(param);

  return (
    <Button
      onClick={click}
      className={classes.button}
      variant={variant}
      color='inherit'
      value='check'
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </Button>
  );
}
