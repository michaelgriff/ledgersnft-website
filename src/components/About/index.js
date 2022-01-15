import React from "react";
import {
  AboutContainer,
  AboutText,
  AboutWrapper,
  ImageWrapper,
} from "./AboutElements";
import about from "../../images/about-ledgers.png";
import robot from "../../images/blue-robot.png";

const About = () => {
  return (
    <AboutContainer>
      <AboutWrapper>
        <AboutText>
          <img
            class="centered"
            src={about}
            alt={"about"}
            width={236.3}
            height={40}
          />
          <p>
            A ledge has mysteriously appeared on the Ethereum blockchain, and
            Ledgers NFT has found its seat. Coming in all shapes and sizes, each
            character has been randomly generated to create a new and unique
            collection of avatars.
          </p>
          <p>
            Although groovy on their own, Ledgers NFT goes beyond what can be
            seen in the screen. Unsatisfied with the utility of the mysterious
            ledge that appeared, Ledgers NFT is building their own stoop, a
            metaverse arena to house everything entertainment, and are calling
            it “The Ledge”.
          </p>
          <p>
            Our goal for The Ledge is to connect consumers with creators, and we
            think NFTs and the connectivity of Web3 are the perfect tools to
            build that connection. Being a holder of Ledgers NFT is your ticket
            to The Ledge and all of its amenities. Come play with us, come watch
            with us, come learn with us, come sit with us, there’s a spot with
            your name on it!
          </p>
        </AboutText>
        <ImageWrapper>
          <img class="responsive" src={robot} alt={"robot"} />
        </ImageWrapper>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
