import styled from "styled-components";
import {Link} from 'react-router-dom';

export const SinglePostDesign = styled.div`
background-color: #dcd9d9;
margin-top: 70px;
margin-right:20%;
margin-left:20%;
margin-bottom: auto;
`;

export const SinglePostWrapper = styled.div`
padding: 30px;
`;

export const SinglepostImg = styled.img`
width: 100%;
height: 300px;
border-radius: 5px;
object-fit: cover;
`;

export const SinglePostTitle = styled.h1`
text-align: center;
margin: 10px;
font-size: 28px;
text-transform: uppercase;
margin-bottom:5%;
`;

export const SinglePostEdit = styled.div`
float: right;
font-size: 16px;
`;

export const SinglePostIcon = styled.i`
margin-left: 10px;
cursor: pointer;
&:first-child{
   color: teal; 
};
&:last-child{
    color: tomato;
}
`;

export const SinglePostInfo = styled.div`

display: flex;
justify-content: space-between;
font-size: 16px;
color: #b39656;
margin-top: 20%;
`;

export const SinglePostDesc = styled.p`
color: #888809;
font-size: 18px;
line-height: 25px;
margin-top: 5%;
margin-left: 10%;
margin-right: 10%;


`;

export const SinglePostDate = styled.span`
font-size: 15px;
font-style: bold;
align-items: center;
color: #888809;
margin-left: 20%;
justify-content: center;
margin-top:10%;
`;


export const Button = styled.button`
border-radius: 50px;
background: ${({primary})=> (primary ? '#6C63FF' : '#010606')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
font-size:${({fontBig})=>(fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor:pointer;
display:flex;
justify-content: center;
transition: all 0.2s ease-in-out;
text-decoration:none;
margin-top: 8%;
margin-left: 40%;
&:hover{
    transition: all 0.2s ease-in-out;
    background:${({primary})=> (primary ? '#fff' : '#6C63FF')};
}
`;

export const ButtonLink = styled(Link)`
border-radius: 50px;
background: ${({primary})=> (primary ? '#6C63FF' : '#010606')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
font-size:${({fontBig})=>(fontBig ? '20px' : '16px')};
outline: none;
border: none;
text-decoration: none;
cursor:pointer;
display:flex;
justify-content: center;
transition: all 0.2s ease-in-out;
text-decoration:none;
margin-top: 8%;
margin-left: 40%;
&:hover{
    transition: all 0.2s ease-in-out;
    background:${({primary})=> (primary ? '#fff' : '#6C63FF')};
}
`;

export const SingleP = styled.p`
color: #888809;
font-size: 18px;
line-height: 25px;
margin-top: 5%;
margin-left: 10%;
margin-right: 10%;
`;

export const SingleSalary = styled.p`
color: #888809;
font-size: 18px;
line-height: 25px;
margin-top: 5%;
margin-left: 10%;
margin-right: 10%;
`;

export const SingleJobType = styled.p`
color: #888809;
font-size: 18px;
line-height: 25px;
margin-top: 5%;
margin-left: 10%;
margin-right: 10%;
`;
export const SingleJobCategory = styled.p`
color: #888809;
font-size: 18px;
line-height: 25px;
margin-top: 5%;
margin-left: 10%;
margin-right: 10%;
`;
export const SingleJobRequirements = styled.p`
color: #888809;
font-size: 18px;
line-height: 25px;
margin-top: 5%;
margin-left: 10%;
margin-right: 10%;
`;