import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #1d254e;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  margin-left: 24px;
  justify-self: flex-start;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 895px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -10px;

  @media screen and (max-width: 895px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  margin-top: 51px;
`;

export const NavLinks = styled(LinkS)`
    @import url("https://fonts.googleapis.com/css2?family=Dosis:wght@300&display=swap");
    font-family: Dosis;
    font-size: 20px;
    color: #fff;
    diplay: flex;
    align-items; center;
    text-decoration: none;
    padding: 0px 1rem;
    margin: auto;
    height: 100%;
    cursor: pointer;

    &:active {
        border-bottom: 3px solid #9abfd8
    }

    &:hover {
      color: #9abfd8;
      transition: 0.2s ease-in-out;
    }
`;

export const NavImage = styled.a`
    diplay: flex;
    align-items; center;
    padding: 0px 1rem;
   margin: auto;
//    height: 100%;
   cursor: pointer;
`;

export const NavBtn = styled.nav`
  diplay: flex;
  align-items: center;
  margin-top: 30px;

  @media screen and (max-width: 895px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 50px;
  background: #9abfd8;
  white-space: nowrap;
  padding 10px 22px;
  margin-left: 50px;
  margin-bottom: 10px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
      transition: all 0.2s ease-in-out;
      background: #fff;
      color: #010606;
  }
`;
