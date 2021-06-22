import React from "react";
import { Transition } from "react-transition-group";
import Box from "@material-ui/core/Box";

// const duration = 500;

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Fade = ({ inProp, children, clas, duration }) => {
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  return (
    <Box className={clas ? clas : null}>
      <Transition in={inProp} timeout={duration ? duration : 300}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {children}
          </div>
        )}
      </Transition>
    </Box>
  );
};

export default Fade;
