import styled from "styled-components";
import { Link } from "react-router-dom";
import banner from "../../images/roadmap-banner.png";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
  background-image: url(${banner});
  height: 100%; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;

export const RowFlex = styled.div`
  margin: 30px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 1137px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80%;
  }
`;
export const ElementContainer = styled.div`
  @media screen and (max-width: 1137px) {
    display: none;
  }
`;

export const ColumnFlex = styled.div`
  background: #1e1e1e;
  border: 15px solid #fff;
  border-radius: 30px;
  padding: 30px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 420px;

  @media screen and (max-width: 571px) {
    width: 80%;
    height: 100%;
    margin: 0;
    padding: 0;
    flex-direction: space-between;
  }
`;

export const Icon = styled(Link)``;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  font-weight: bold;
  color: #000000;
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 0 10px;
  border-radius: 100%;
  border: none;
  background-color: #ffffff;
  font-weight: bold;
  font-size: 15px;
  color: #000000;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const SpacerLarge = styled.div`
  height: 50px;
  width: 50px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 300px;
  height: 200px;
  @media screen and (max-width: 571px) {
    margin-top: 100px;
    width: 80%;
    height: auto;
  }
}
`;
