import styled from "styled-components";

export const NavbarContainer = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
height: 10%;
@media screen and (min-width: 320px) and (max-width: 1080px) {
  flex-direction: column;
  margin-bottom: 1rem;
}
`;


export const Text = styled.h1`
span {
    font-weight: 500;
    color: #484258;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
`;


export const InputContainer = styled.div`
display: flex;
`;

export const Icon = styled.div`
height: 3rem;
  width: 3rem;
  background-color: #dce4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  svg {
    color: #555555;
  }
`;

export const Input = styled.input`
border: none;
background-color: #dce4ff;
border-top-right-radius: 0.5rem;
border-bottom-right-radius: 0.5rem;
color: #464646;
&:focus {
  border: none;
  outline: none;
}
`;
