import React from "react";
import { TeamContainer, TeamWrapper, Member, MemberText } from "./TeamElements";
import mike from "../../images/mike.png";
import dez from "../../images/dezigns.png";
import theo from "../../images/theo.png";
import beder from "../../images/beder.png";
import team_text from "../../images/team-text.png";

const Team = () => {
  return (
    <>
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
            <img
              id="team-photo"
              src={dez}
              alt={"dez"}
              width={300}
              height={300}
            />
            <a class="name" href="twitter.com">
              <MemberText>Dezigns</MemberText>
            </a>
            <MemberText class="smaller">Founder / Artist</MemberText>
            <MemberText id="smaller" class="additional">
              A creative through and through. Tech, gaming and art lover. Web3
              has opened a new door for me. Crypto and NFT enthusiast for
              months. My passion for tech, gaming and creativity will all come
              to light on The Ledge.
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
            <a class="name" href="twitter.com">
              <MemberText>TheCryptoKeed</MemberText>
            </a>
            <MemberText class="smaller">Founder / Developer</MemberText>
            <MemberText id="smaller">
              Passionate developer. New to the crypto and NFT space but finding
              unique ways to apply my skills to build out The Ledge. A hard
              worker and quick learner, excited about the steps to come. Sports
              fanatic.
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
            <a class="name" href="twitter.com">
              <MemberText>BagerTeDesign</MemberText>
            </a>
            <MemberText class="smaller">3D Designer</MemberText>
            <MemberText id="smaller">
              Industrial designer turned 3D artist. Love to experiment and push
              the limits of creativity. Committed to satisfying the consumer and
              surprising people with things they have never seen before.
            </MemberText>
          </Member>
          <Member>
            <img
              id="team-photo"
              src={beder}
              alt={"beder"}
              width={300}
              height={300}
            />
            <a class="name" href="twitter.com">
              <MemberText>JBdr</MemberText>
            </a>
            <MemberText class="smaller">Strategic Partner</MemberText>
            <MemberText id="smaller">
              High-level background in all things business strategy. Motivated
              to make a real positive difference in the world. Fervent about
              leveraging the capabilities of crypto, NFTs and Web3 to do so
            </MemberText>
          </Member>
        </TeamWrapper>
      </TeamContainer>
    </>
  );
};

export default Team;
