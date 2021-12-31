import styled from "styled-components";

export const RarityContainer = styled.div`
  background-color: #9abfd8;
  margin: 0;
`;

export const RarityText = styled.div`
  padding: 25px 80px;

  @media screen and (max-width: 1121px) {
    padding: 25px 30px;
  }
`;

export const RarityImage = styled.div`
  margin: 105px 50px;

  @media screen and (max-width: 1121px) {
    margin: 40px 50px;
  }
`;

export const RarityWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 1121px) {
    flex-direction: column;
    align-items: center;
  }
`;
