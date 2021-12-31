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
            <MemberText class="bigger">Dezigns</MemberText>
            <MemberText>Founder / Artist</MemberText>
          </Member>
          <Member>
            <img
              id="team-photo"
              src={mike}
              alt={"mike"}
              width={300}
              height={300}
            />
            <MemberText class="bigger">TheCryptoKeed</MemberText>
            <MemberText>Founder / Developer</MemberText>
          </Member>
          <Member>
            <img
              id="team-photo"
              src={theo}
              alt={"theo"}
              width={300}
              height={300}
            />
            <MemberText class="bigger">BagerTeDesign</MemberText>
            <MemberText>3D Designer</MemberText>
          </Member>
          <Member>
            <img
              id="team-photo"
              src={beder}
              alt={"beder"}
              width={300}
              height={300}
            />
            <MemberText class="bigger">JBdr</MemberText>
            <MemberText>Community Manager</MemberText>
          </Member>
        </TeamWrapper>
      </TeamContainer>
    </>
  );
};

export default Team;
