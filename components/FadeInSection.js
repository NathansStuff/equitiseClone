import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

export default function FadeInSection(props, className) {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <VisibilitySensor
      active={!viewPortEntered}
      onChange={isVisible => {
        if (isVisible) {
          setViewPortEntered(true);
        }
      }}
      delayedCall
    >
      <div
        className={`${props.className} ${viewPortEntered ? 'is-visible' : ''}`}
        onChange={isVisible => {
          if (isVisible) {
            setViewPortEntered(true);
          }
        }}
      >
        {props.children}
      </div>
    </VisibilitySensor>
  );
}
