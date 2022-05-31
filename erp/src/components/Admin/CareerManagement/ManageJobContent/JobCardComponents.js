import styled from "styled-components";

export const EarningsCard = styled.div`
height: 100%;
  width: 14rem;
  background-color:#162349;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

export const Container = styled.div`

`;