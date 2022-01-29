import React from "react";
import roadmap from "../../images/roadmap.png";
import roadmaptext from "../../images/roadmap-text.png";
import { RoadmapContainer } from "./RoadmapElements";

const Roadmap = () => {
  return (
    <>
      <RoadmapContainer>
        <img
          id="roadmap"
          class="centered"
          src={roadmaptext}
          alt={"roadmaptext"}
          width={214.2}
          height={60}
        />
      </RoadmapContainer>
      <img id="roadmap-photo" src={roadmap} alt={"roadmap"} />
    </>
  );
};

export default Roadmap;
