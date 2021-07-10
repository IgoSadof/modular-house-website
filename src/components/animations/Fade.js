import React from "react";
import { Transition } from "react-transition-group";

// const duration = 500;

const transitionStyles = {
  entering: {
    opacity: 1,
  },
  entered: {
    opacity: 1,
  },
  exiting: {
    opacity: 0,
  },
  exited: {
    opacity: 0,
  },
};

const Fade = ({ inProp, children, duration }) => {
  const defaultStyle = {
    transition: `opacity ${duration ? duration : 500}ms ease-in-out`,
    opacity: 0,
  };

  return (
    <Transition in={inProp} timeout={duration ? duration : 500}>
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
  );
};

export default Fade;
