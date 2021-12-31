import React from "react";
import { NavBtn, NavImage } from "../Navbar/NavbarElements";
import { FooterContainer, FooterWrapper, FooterLogo } from "./FooterElements";
import twitter_logo from "../../images/twitter-logo.png";
import instagram_logo from "../../images/instagram-logo.png";
import discord_logo from "../../images/discord-logo.png";

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterWrapper>
          <FooterLogo>LEDGERS NFT</FooterLogo>
        </FooterWrapper>
      </FooterContainer>
    </div>
  );
};

export default Footer;
