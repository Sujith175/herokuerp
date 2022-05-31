import styled from 'styled-components';

export  const Form = styled.form`
    width:clamp(320px,30%,430px);
    margin:0 auto;
    border:1px solid #ccc;
    border-radius:0.35rem;
    padding:1rem;
    height: 650px;
`;

export  const TextCenter = styled.h1`
text-align: center; 
`;

export  const FormStep = styled.div`
display: block;  
`;

export  const EmbedWrapper = styled.div`
margin-top: 0%;
`;


export  const FormGroup = styled.h1`
margin: 4rem 0;
padding-top: -90px; 
`;
export  const Select = styled.select`
padding: 10px;
border:none;
font-size: 15px; 
margin-bottom: 2%;
`;


export  const FormInput = styled.input`
width: 70%;
height: 30px;
font-size: 20px;
display: space-in-between;
&::placeholder{
font-size:20px;
size: 10;
}
background-color: grey ;
`;


export  const FileInput = styled.input`

font-size:20px;
`;

export const FileButton = styled.button`
font-size:20px;


`;
export const Submit = styled.input`
font-size:20px;
padding-top: 2px;
margin-top: 5px;
margin-left: 35%;
width: 80px;
`;



export  const Label = styled.label`
  font-size: 20px; 
`;

export  const Embed = styled.embed`
  height: 200px;
  width: 300px;
  margin-top : 2%;
  margin-left: 50%;
`;

export  const Wrapper = styled.div`
 
  
`;
export  const Splitright = styled.div`
 height: 30%;
  width: 40%;
  position: absolute;
  z-index: 1;
  overflow-y: hidden;
  overflow-x: hidden;
  padding-top: 60px;
  margin-top:20%;
  right: 0;
  top:0;
  background-color: transparent;
  margin-left:10%;
  margin-right: 3%;
 
  
`;