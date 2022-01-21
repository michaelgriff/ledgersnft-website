import React from "react";
import { TeamContainer, TeamWrapper, Member, MemberText } from "./TeamElements";
import mike from "../../images/mike.png";
import dez from "../../images/dezigns.png";
import theo from "../../images/theo.png";
import zach from "../../images/zach.png";
import team_text from "../../images/team-text.png";
import dezigns from "../../images/dezigns-text.png";
import thecryptokeed from "../../images/thecryptokeed-text.png";
import bagertedesign from "../../images/bagertedesign-text.png";
import zdiggity from "../../images/zach-text.png";

const Team = () => {
  return (
    <TeamContainer>
      <img
        id="team-text"
        class="centered"
        src={team_text}
        alt={"team"}
        width={124.3}
        height={60}
      />
      <TeamWrapper>
        <Member>
          <img id="team-photo" src={dez} alt={"dez"} width={300} height={300} />
          <a href="https://twitter.com/JM00YY">
            <img
              class="dezigns"
              src={dezigns}
              alt={"dezigns"}
              width={129.75}
              height={40}
            />
          </a>
          <MemberText>Founder / Artist</MemberText>
          <MemberText id="smaller">
            A creative through and through. Tech, gaming and art lover. Web3,
            Crypto and NFTs have opened a new door for me. My passion for tech,
            gaming and creativity will all come to light on The Ledge.
          </MemberText>
        </Member>
        <Member>
          <img
            id="team-photo"
            src={mike}
            alt={"mike"}
            width={300}
            height={300}
          />
          <a href="https://twitter.com/TheCryptoKeed">
            <img
              class="thecryptokeed"
              src={thecryptokeed}
              alt={"thecryptokeed"}
              width={259.5}
              height={40}
            />
          </a>
          <MemberText>Founder / Developer</MemberText>
          <MemberText id="smaller">
            Passionate developer. New to the crypto and NFT space but finding
            unique ways to apply my skills to build out The Ledge. A hard worker
            and quick learner, excited about the steps to come. Sports fanatic.
          </MemberText>
        </Member>
        <Member>
          <img
            id="team-photo"
            src={theo}
            alt={"theo"}
            width={300}
            height={300}
          />
          <a href="https://twitter.com/BagerTheo">
            <img
              class="bagertedisgn"
              src={bagertedesign}
              alt={"bagertedesign"}
              width={238.5}
              height={40}
            />
          </a>
          <MemberText>3D Designer</MemberText>
          <MemberText id="smaller">
            Industrial designer turned 3D artist. Love to experiment and push
            the limits of creativity. Committed to satisfying the consumer and
            surprising people with things they have never seen before.
          </MemberText>
        </Member>
        <Member>
          <img
            id="team-photo"
            src={zach}
            alt={"zach"}
            width={300}
            height={300}
          />
          <a href="https://twitter.com/Zdiggity_">
            <img
              class="bagertedisgn"
              src={zdiggity}
              alt={"bagertedesign"}
              width={149.21}
              height={40}
            />
          </a>
          <MemberText>Creative Strategist</MemberText>
          <MemberText id="smaller">
            I want to have an impact on the world and change lives. As a high
            level athlete, dedication, focus, and drive are no stranger to me.
            I'm a creative mind, ready to join the great hands working to change
            lives together.
          </MemberText>
        </Member>
      </TeamWrapper>
    </TeamContainer>
  );
};

export default Team;
