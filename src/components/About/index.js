import React from "react";
import {
  AboutContainer,
  AboutText,
  AboutWrapper,
  ImageWrapper,
} from "./AboutElements";
import about from "../../images/about-ledgers.png";
import robot from "../../images/blue-robot.png";
import venom from "../../images/venom.png";
import story from "../../images/storytext.png";

const About = () => {
  return (
    <AboutContainer>
      <AboutWrapper>
        <ImageWrapper>
          <img id="venom" class="responsive" src={venom} alt={"venom"} />
        </ImageWrapper>
        <AboutText>
          <img
            class="centered"
            src={story}
            alt={"story"}
            width={101.2}
            height={40}
          />
          <p>
            On July 30th, 2015, the day the Ethereum blockchain was created, a
            mysterious structure rose from the ground: The Ledge was formed.
            Players and viewers from across the universe began their conquest to
            earth to witness it and its glory, and to start the development of a
            new age of technology and entertainment.
          </p>
          <p>
            The Ledge created harmony amongst humankind, connecting all walks of
            life as one unified community. People who sit are called Ledgers.
            They don the TV to pay homage to The Ledge unifying players and
            viewers, both who use a screen as their gateway to consumption.
          </p>
          <p>
            There are those who have found their seat, who have bought into Web
            3.0 and its breadth of connectivity, and there are those who will
            find their seat. Which one are you?
          </p>
        </AboutText>
      </AboutWrapper>
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
            The Ledge has been formed, and Ledgers NFT has found its seat.
            Coming in all shapes and sizes, each character has been randomly
            generated to create a new and unique collection of avatars.
          </p>
          <p>
            Although groovy on their own, Ledgers NFT goes beyond what can be
            seen in the screen. Ledgers NFT is using The Ledge as a platform to
            build a metaverse arena to house everything entertainment, a home
            for players and viewers.
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
