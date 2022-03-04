import React, { useState } from "react";
import { Data } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import faqtxt from "../../images/faq.png";

const FaqSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  background: #9abfd8;
  padding: 40px 0px;
`;

const Container = styled.div`
  top: 3%;
  margin: 0px 100px;
  width: 70%;
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
`;

const RoundedWrap = styled.div`
  background: #fff;
  colour: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 20px 20px 20px 20px;
  border-style: solid;
  border-color: #000;
  border-width: medium;

  h1 {
    padding: 1.5rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    h1 {
      padding: 1.8rem;
      font-size: 0.9rem;
    }

    span {
      margin-right: 0rem;
    }
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Wrap = styled.div`
  background: #fff;
  colour: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 20px 20px 0px 0px;
  border-style: solid;
  border-color: #000;
  border-width: medium;

  h1 {
    padding: 1.5rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    h1 {
      padding: 1.8rem;
      font-size: 0.9rem;
    }
    span {
      margin-right: 0rem;
    }
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1d254e;
  color: #fff;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 20px 20px;
  border-style: solid;
  border-color: #000;
  border-width: 0px medium medium;
  //   margin: 0px 40px;

  p {
    font-size: 1.2rem;
    padding: 20px;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 0.7rem;
      padding: 20px;
    }
  }
`;

const faq = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "000", size: "25px" }}>
      <FaqSection>
        <Container>
          <img id="faqtxt" src={faqtxt} alt={"faq"} />
          {Data.map((item, index) => {
            return (
              <>
                {clicked === index ? (
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <h1 class="black-text">{item.question}</h1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                ) : (
                  <RoundedWrap onClick={() => toggle(index)} key={index}>
                    <h1 class="black-text">{item.question}</h1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </RoundedWrap>
                )}
                {/* <Wrap onClick={() => toggle(index)} key={index}>
                  <h1 class="black-text">{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap> */}
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </FaqSection>
    </IconContext.Provider>
  );
};

export default faq;
