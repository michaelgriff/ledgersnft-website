import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarImage,
  SidebarRoute,
} from "./SidebarElements";
import twitter_logo from "../../images/twitter-logo.png";
import instagram_logo from "../../images/instagram-logo.png";
import discord_logo from "../../images/discord-logo.png";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle} smooth={true} offset={-80}>
            About
          </SidebarLink>
          <SidebarLink to="designs" onClick={toggle} smooth={true} offset={-80}>
            Designs
          </SidebarLink>
          <SidebarLink to="roadmap" onClick={toggle} smooth={true} offset={-80}>
            Roadmap
          </SidebarLink>
          <SidebarLink to="rarity" onClick={toggle} smooth={true} offset={-80}>
            Rarity
          </SidebarLink>
          <SidebarLink to="team" onClick={toggle} smooth={true} offset={-80}>
            Team
          </SidebarLink>
          <SidebarLink to="faq" onClick={toggle} smooth={true} offset={-80}>
            FAQ
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarImage href="https://twitter.com/ledgersnft">
            <img src={twitter_logo} alt={"twitter"} width={30.5} height={25} />
          </SidebarImage>
          <SidebarImage href="https://instragram.com/ledgersnft">
            <img src={instagram_logo} alt={"ig"} width={25} height={25} />
          </SidebarImage>
          <SidebarImage href="https://discord.gg/ledgersnft">
            <img src={discord_logo} alt={"discord"} width={32.5} height={25} />
          </SidebarImage>
        </SideBtnWrap>
        {/* <SideBtnWrap>
          <SidebarRoute href="https://mintledgersnft.xyz">MINT</SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
