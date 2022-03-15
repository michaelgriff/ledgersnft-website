import React, { useState } from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";
import Rarity from "../components/Rarity";
import Team from "../components/Team";
import Designs from "../components/Designs";
import Footer from "../components/Footer";
import Roadmap from "../components/Roadmap";
import Faq from "../components/Faq";
import Headline from "../components/Headline";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div>
        <Headline />
      </div>
      <Banner />
      <div id="about" class="scroll">
        <About />
      </div>
      <Designs />
      <Roadmap />
      <div id="rarity">
        <Rarity />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="faq">
        <>
          <Faq />
        </>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
