import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavImage,
} from "./NavbarElements";
import ledgers_logo from "../../images/ledgers-text.png";
import twitter_logo from "../../images/twitter-logo.png";
import instagram_logo from "../../images/instagram-logo.png";
import discord_logo from "../../images/discord-logo.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img class="ledgers-logo" src={ledgers_logo} alt={"logo"} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks smooth={true} offset={-80} to="about">
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="designs" smooth={true} offset={-80}>
                Designs
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="rarity" smooth={true} offset={-80}>
                Rarity
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="team" smooth={true} offset={-80}>
                Team
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavImage href="https://twitter.com/ledgersnft">
              <img
                src={twitter_logo}
                alt={"twitter"}
                width={24.42}
                height={20}
              />
            </NavImage>
            <NavImage href="https://www.instagram.com/ledgersnft">
              <img src={instagram_logo} alt={"ig"} width={20} height={20} />
            </NavImage>
            <NavImage href="https://discord.gg/ledgersnft">
              <img
                src={discord_logo}
                alt={"discord"}
                width={25.8}
                height={20}
              />
            </NavImage>
            {/* <NavBtnLink href="https://mintledgersnft.xyz">MINT</NavBtnLink> */}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
