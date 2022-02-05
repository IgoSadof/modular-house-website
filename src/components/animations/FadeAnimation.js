import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
