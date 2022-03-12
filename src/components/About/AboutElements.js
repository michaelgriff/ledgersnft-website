import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #3c5971;
  margin: 0;
  padding: 0;
`;

export const AboutText = styled.div`
  padding: 70px 80px;

  @media screen and (max-width: 1121px) {
    padding: 10px 30px;
    margin: auto;
  }
`;

export const ImageWrapper = styled.div`
  margin: 65px 50px;

  @media screen and (max-width: 1121px) {
    margin-bottom: 50px;
    margin-top: 0px;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 1121px) {
    flex-direction: column;
    align-items: center;
  }
`;
