import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    height: '100%',
    color: "black important!"
  },
});

export default function VerticalSlider() {
  const classes = useStyles();
  function valuetext(value) {
  }

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Slider
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={30}
          track='inverted'
        />
      </div>
    </React.Fragment>
  );
}