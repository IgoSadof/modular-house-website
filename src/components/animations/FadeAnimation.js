import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const FadeAnimation = ({ index, className, children, timeout }) => {
  const [opacity] = useState(true);

  return (
    <TransitionGroup className={className?className:null}>
      <CSSTransition
        key={index}
        in={!!children}
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
