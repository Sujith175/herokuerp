import styled from "styled-components";
import { Link } from "react-router-dom";

export const Billhead = styled.h1`
font-size: 40px;
text-transform: uppercase;
margin-left: 35%;
color: white;
`;

export const P = styled.p`
font-size: 20px;
margin-left: 2%;
`;

export const P1 = styled.p`
font-size: 20px;
margin-top: 5%;
margin-left: 2%;
`;

export const P2 = styled.p`
font-size: 20px;
margin-top: 5%;
margin-left: 69%;
`;
export const ButtonLink = styled(Link)`
width:100px;
margin-left:22%;
margin-top:12%;
text-decoration: none;
@media print{
    color:red
}
`;

export const ButtonWrapper = styled.div`
margin-bottom: 1%;
`;

