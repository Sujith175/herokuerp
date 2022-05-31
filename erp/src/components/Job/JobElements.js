import styled from 'styled-components';

export const PostDesign = styled.div`
width: 350px;
margin: 0px 25px 40px 25px;
display: flex;
flex-direction: column;
background-color: #dbdfe3;
height: 500px;
margin-top: 8%;
`;


export const PostInfo= styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Postcat = styled.span`
font-weight: 400;
font-size: 11px;
color: #be9656;
line-height: 19px;
margin-top: 15px;
margin-right: 10px;
cursor: pointer;
text-transform: uppercase;
`;


export const PostT = styled.h1`
font-size: 20px;
font-weight: 900;
margin-top: 15px;
cursor: pointer;
text-transform: uppercase;
color: #0C0763;
margin-bottom:5%;
margin-top: 5%;
margin-left:2%;
`;


export const PostDate = styled.span`
font-style: italic;
font-size: 13px;
color: #999;
font-weight: 400;
margin-top: 15px;
`;



export const PostDesc = styled.p`
font-size: 14px;
font-weight: 400;
color: #0C0763;
line-height: 24px;
margin-top: 15px;
overflow: hidden;
text-overflow: elipsis;
display: -webkit-box;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
margin-left:10%;
margin-right: 10%;
width: -moz-fit-content;
width: fit-content;
justify-content: center;
align-items: center;
`;

export const PostCats = styled.div`
font-weight: 400;
font-size: 11px;
color: #be9656;
line-height: 19px;
margin-top: 15px;
margin-right: 10px;
cursor: pointer;
`;

export const JobLocation = styled.p`
font-size: 14px;
font-weight: 400;
color: #0C0763;
line-height: 24px;
margin-top: 15px;
overflow: hidden;
text-overflow: elipsis;
`;
export const JobStatus = styled.h4`
margin-top: 10%;
margin-left: 5%;
color: #61188a;
`;