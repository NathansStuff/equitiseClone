import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

// How to use
//<CountUp className="count" end={21} suffix="M+" />

const CountUpTicker = ({ className, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }) => {
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
            <h4 className={className} ref={countUpRef} />
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};

export default CountUpTicker;