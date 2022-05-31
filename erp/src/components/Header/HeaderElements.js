import styled from "styled-components";
import { Link } from "react-router-dom";


export const HeaderStyle = styled.div`
margin-top: -4%;
`;

export const HeaderTitles = styled.div`
display: flex;
flex-direction: column;
color: #444;
`;

export const Small = styled.p`
position: absolute;
margin-top: 10px;
font-size: 20px;
color: #160F82;


`;
export const HeaderTitleLg = styled.span`
position: absolute;
top: 20%;
font-size: 40px;
color: #160F82;
margin-left: 45%;
margin-top:2%;
`;

export const HeaderTitleL1g = styled.span`
position: absolute;
top: 30%;
left: 10%;
font-size: 30px;
color: #2A20C6;
`;

export const HeaderTitleL2g = styled.span`
position: absolute;
top: 27%;
left: 10%;
font-size: 15px;
color: #2A20C6;
`;

export const HeaderImage = styled.img`
width: 100%;
height: 450px;
margin-top: 80px;
object-fit: cover;
`;

export const HeaderBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items:center;

`;

export const HeaderButton = styled(Link)`
border-radius: 5px;
background: ${({primary})=> (primary ? '#6C63FF' : '#010606')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
font-size:${({fontBig})=>(fontBig ? '20px' : '16px')};
outline: none;
position : absolute;
border: none;
cursor:pointer;
display:flex;
top: 40%;
left: 10%;
justify-content: center;
transition: all 0.2s ease-in-out;
text-decoration:none;
`;

export const HeaderButton1 = styled(Link)`
border-radius: 5px;
background: ${({primary})=> (primary ? '#6C63FF' : '#010606')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
font-size:${({fontBig})=>(fontBig ? '20px' : '16px')};
outline: none;
position : absolute;
border: none;
cursor:pointer;
display:flex;
top: 40%;
left: 25%;
justify-content: center;
transition: all 0.2s ease-in-out;
text-decoration:none;
`;