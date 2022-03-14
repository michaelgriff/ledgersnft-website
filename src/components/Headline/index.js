import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { HeadlineContainer } from "./HeadlineElements";
import airplane from "../../images/airplane.png";

const Headline = () => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(-90%,0)" },
    to: { transform: "translate(100%,0)" },
    config: { duration: 10000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <HeadlineContainer>
      <div key={key}>
        <animated.div style={scrolling}>
          <img src={airplane} alt={"airplane"} />
        </animated.div>
      </div>
    </HeadlineContainer>
  );
};

export default Headline;
