import React from "react";
import { TeamContainer, TeamWrapper, Member, MemberText } from "./TeamElements";
import mike from "../../images/mike.png";
import dez from "../../images/dezigns.png";
import theo from "../../images/theo.png";
import beder from "../../images/beder.png";
import team_text from "../../images/team-text.png";
import dezigns from "../../images/dezigns-text.png";
import thecryptokeed from "../../images/thecryptokeed-text.png";
import bagertedesign from "../../images/bagertedesign-text.png";
import jbdr from "../../images/jbdr-text.png";

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
      </TeamWrapper>
    </TeamContainer>
  );
};

export default Team;
