import styled from "styled-components";
import { darkThemeColor } from "../utils";



export const Containerdiv = styled.div`
  width: 20%;
  height: 100% !important;
 position: relative;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

export const ProfileContainerdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Avathar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

export const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

export const LinksContainerdiv = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

export const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  height: 60%;
  width:40%;
`;

export const Link = styled.li`
  margin-left : 25%;
  margin-bottom : 2rem;
  display : flex;
  gap : 1rem;
  color : #e4e4e4;
  cursor : pointer;
  font-size : 1vw;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size : 1.1rem;
    margin-top : 3%;
  }
`;

export const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 20%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;