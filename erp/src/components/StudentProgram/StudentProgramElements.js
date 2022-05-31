import styled from "styled-components";
import BgImage from '../../images/bginage.jpg';
import BgImage2 from '../../images/internship.jpg';
import { Link } from "react-router-dom";


export const SearchCard = styled.div`
height: 130px;
margin-top: 80px;
object-fit: cover;
padding-left: 10%;
padding-right: 10%;
margin-left: 10%;
margin-right: 10%;
background-color: #f1efef;
margin-top: -1%;
`;

export const SearchInput = styled.input`
padding: 6px;
margin-top: 5%;
font-size: 17px;
border: none;
border-radius: 5px;
width: 200px;
`;

export const SearchButton = styled.button`

    border: none;
    text-align: center;
    width: 10%;
    height: 40px;
    margin-top: 1%
    padding: 14px;
    margin-left: 2%;
    background-color: #c0aae6;
    border-radius: 3px;
    &:hover{
        color:#7735e8;
    }
`;

export const ProgramCard = styled.div`
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
margin-left: 10%;
background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url(${BgImage});
`;
export const ProgramCard1 = styled.div`
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
margin-left: 2%;
background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url(${BgImage2});

`;

export const ApplybtnLink = styled(Link)`
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