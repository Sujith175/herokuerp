import React from 'react'
import { Container, MainContainer } from './AdminComponents';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

const AdminHome = () => {
  const navigate = useNavigate();


  useEffect (() =>{
    if(!localStorage.getItem("user")){
        navigate("/login");
    }
  })


//   useEffect( () =>{
//     if(localStorage.getItem("authToken")){
//       navigate('/admindash');
//     }
// });
  return (
    <>
    <MainContainer>
    <Container>
      <Sidebar/>  
    <MainContent/>
    </Container>
    </MainContainer>
    </>
  )
}

export default AdminHome;