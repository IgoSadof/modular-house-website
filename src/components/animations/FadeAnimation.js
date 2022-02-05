import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const FadeAnimation = ({ inProp, index, className, children, timeout }) => {
  console.log(inProp)

  return (
    <TransitionGroup className={className?className:null}>
      <CSSTransition
        key={index}
        in={inProp}
        appear={true}
        timeout={timeout?timeout:500}
        classNames='fade'
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default FadeAnimation;
