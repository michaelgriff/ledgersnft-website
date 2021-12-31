import styled from "styled-components";

export const TeamContainer = styled.div`
  margin: 0;
  background-color: #1a5d82;
  padding-bottom: 60px;
`;

export const TeamWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 1121px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Member = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MemberText = styled.div`
  color: white;
`;
