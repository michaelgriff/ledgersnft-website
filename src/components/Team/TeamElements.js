import styled from "styled-components";

export const TeamContainer = styled.div`
  margin: 0;
  background-color: #1a5d82;
  padding-bottom: 60px;
`;

export const TeamWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media screen and (max-width: 1338px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Member = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MemberText = styled.div`
  color: white;
`;
