import React from "react";
import { TeamContainer, TeamWrapper, Member, MemberText } from "./TeamElements";
import mike from "../../images/mike.png";
import dez from "../../images/dezigns.png";
import theo from "../../images/theo.png";
import zach from "../../images/zach.png";
import diego from "../../images/diegopic.png";
import skott from "../../images/skottpic.png";
import ish from "../../images/ishpic.png";
import danny from "../../images/dannypic.png";
import edyy from "../../images/edyypic.png";
import edyytext from "../../images/edyytext.png";
import diegotext from "../../images/diegotext.png";
import skotttext from "../../images/skotttext.png";
import ishtext from "../../images/ishtext.png";
import dannytext from "../../images/introtext.png";
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
              src={thecryptokeed}
              alt={"thecryptokeed"}
              width={259.5}
              height={40}
            />
          </a>
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
        </Member>
      </TeamWrapper>
      <TeamWrapper>
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
          <MemberText>Director of Operations</MemberText>
        </Member>
        <Member>
          <img
            id="team-photo"
            src={danny}
            alt={"danny"}
            width={300}
            height={300}
          />
          <a href="https://twitter.com/Itgmiami">
            <img src={dannytext} alt={"danny"} width={293.15} height={40} />
          </a>
          <MemberText>Advisor / Strategic Partner</MemberText>
        </Member>
        <Member>
          <img
            id="team-photo"
            src={skott}
            alt={"skott"}
            width={300}
            height={300}
          />
          <a href="https://www.instagram.com/skottmarsi/">
            <img src={skotttext} alt={"skott"} width={188.55} height={40} />
          </a>
          <MemberText>Artist / Advisor</MemberText>
        </Member>
      </TeamWrapper>
      <TeamWrapper>
        <Member>
          <img
            id="team-photo"
            src={diego}
            alt={"diego"}
            width={300}
            height={300}
          />
          <a href="https://www.instagram.com/connectwithdiego/">
            <img src={diegotext} alt={"diego"} width={290.78} height={40} />
          </a>
          <MemberText>Marketing / Strategic Partner</MemberText>
        </Member>
        <Member>
          <img id="team-photo" src={ish} alt={"ish"} width={300} height={300} />
          <a href="https://www.instagram.com/ishmilly/">
            <img src={ishtext} alt={"ish"} width={133.94} height={40} />
          </a>
          <MemberText>Advisor</MemberText>
        </Member>
        <Member>
          <img
            id="team-photo"
            src={edyy}
            alt={"edyy"}
            width={300}
            height={300}
          />
          <a href="https://twitter.com/edyy982">
            <img src={edyytext} alt={"ish"} width={79.7} height={40} />
          </a>
          <MemberText>Community Manager</MemberText>
        </Member>
      </TeamWrapper>
    </TeamContainer>
  );
};

export default Team;
