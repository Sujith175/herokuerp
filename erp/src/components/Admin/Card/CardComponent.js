import styled from "styled-components";
import { Link } from 'react-router-dom';

export const EarningsCard = styled.div`
height: 100%;
  width: 14rem;
  background-color:#6100d4;
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
export const CardContent = styled.div`
margin: 1rem;
`;
export const Chart = styled.div`
display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;
export const EarningsText = styled.h3`
text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;
export const Earning = styled.div`
text-align: center;
`;
export const EarningsIncrease = styled.div`
text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;

`;
export const NavBtnLink = styled(Link)`
border-radius: 50px;

white-space: nowrap;
padding-left:2%;
color:#010606;
font-size:16px;
outline:none;
border:none;
color: white;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;
align-items: center;

&:hover {
    transition: all 0.2s ease-in-out;
    background: black;
    color:white;
}
`;