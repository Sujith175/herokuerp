import styled from "styled-components";


export const Wrapper = styled.div`
background-color: #cdc4c4;
height: 1400px;
width: 1200px;
margin-left:10%;
margin-right: 10%;
margin-top: 5%;
box-sizing: border-box;
margin-bottom:auto;
`;
export const Title = styled.div`
font-size: 30px;
margin-left: 40%;
`;

export const Name = styled.p`
font-size: 20px;
margin-left:10%;
margin-top:5%;
`;

export const AcceptButton = styled.button`
background-color: green;
border:none;
margin-left: 30%;
width:100px;
height:50px;
border-radius: 10px;
margin-top: 8%;
`;


export const RejectButton = styled.button`
background-color: red;
border: none;
margin-left: 10%;
width: 100px;
height: 50px;
border-radius: 10px;
`;


export const Column = styled.button`
float: left;
width: 50%;
padding: 10px;
height: 300px;
`;

export const Row = styled.button`
 after{
content: "";
display: table;
clear: both;
}
`;
export const Embed = styled.embed`
margin-top: 5%;
width:800px ;
height:350px;
margin-left:10%;
`;

export const TitleName = styled.h1`
font-size: 25px;
margin-left:10%;
margin-top:5%;
color: rgb(9, 11, 134) ;
`;