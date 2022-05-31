import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardWrapper = styled.div`
margin-left: 20%;
margin-right: 10%;
`;
export const InternHead = styled.h1`
margin-top: 5%;
margin-left: 10%;
font-size:30px;
margin-bottom: 5%;

`;
export const Icon = styled.i`
margin-left: 80%;

`;
export const ButtonWrapper = styled.div`
margin-left: 70%;
margin-bottom: 5%;

`;
export const LinkR = styled(Link)`
text-decoration: none;
&:hover{
    color: white;
}

`;