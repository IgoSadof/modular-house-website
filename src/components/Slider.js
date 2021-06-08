import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    // position:"absolute",
    height: '100%',
    // left:"38%",
    color: "black important!"
  },
});

export default function VerticalSlider() {
  const classes = useStyles();
  function valuetext(value) {
      // console.log(value)
    // return `${value}°C`;
  }

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Slider
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={30}
          track='inverted'
        //   color={palette.text.primary}
        //   aria-labelledby="vertical-slider"
        />
      </div>
    </React.Fragment>
  );
}