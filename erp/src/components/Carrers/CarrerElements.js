import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div`
display: inline-flex;
position: relative;
flex-direction: column;
margin: 10px;
padding: 20px;
background: #9682DE;
width: 350px;
height: 400px;
box-shadow: 5px 5px 10px #ccc;
align-content:center;
align-items:center;
`;


export const MarginSetter = styled.div`
margin-top: 100px;
margin-left:10%;
margin-right:10%;
margin-bottom:200px;
`;
export const MarginSetterNav = styled.div`
margin-top:100px;
margin-left:5%;
margin-right:5%;
`;


export const Heading4 = styled.div`
padding-bottom:30px;
font-weight:bold;
font-size: 30px;
text-transform: uppercase;
`;

export const Jobdesc = styled.p`
padding-bottom:15px;
magin-left:2%;
margin-right:2%;
`;

export const Location = styled.p`
padding-bottom : 5px;
`;

export const Enddate = styled.p`
padding-bottom:10px;
`;

export const Applybtn = styled.button`
border-radius: 50px;
background: #6C63FF;
white-space: nowrap;
padding: 10px 22px;
color:#010606;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;


&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color:#010606;
}

`;

export const ApplyLink = styled(Link)`
border-radius: 50px;
background: #6C63FF;
white-space: nowrap;
padding: 10px 22px;
color:#010606;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;


&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color:#010606;
}

`;


export const Heading = styled.h2`
font-size:2vw;
padding-bottom: 3%;
color:#6C63FF;
`;


export const FrmContainer = styled.div`
margin-left:20%;
margin-right:20%;
margin-top: 10%;
`;


export const UpdateCard = styled.div`
display: inline-flex;
position: relative;
flex-direction: column;
margin: 10px;
padding: 20px;
background: grey;
width: 400px;
height: 100%;
box-shadow: 5px 5px 10px #ccc;
align-content: center;
align-items: center;
margin-left: 50%;
margin-right: 10%;
margin-top: 5%;
`;

export const FloatContainer = styled.div`
border: 3px solid #fff;
padding: 20px;
`;

export const FloatChild = styled.div`
width: 50%;
float: left;
padding: 20px;

`;