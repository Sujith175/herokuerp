import {React, useEffect} from 'react'
import View from './View';
import {Container, MainContainer } from '../../AdminComponents'
import Sidebar from '../../Sidebar'
import { MarginSetter } from '../CareerComponent';
import { useNavigate } from "react-router-dom";


const AdminAddJob = () => {
  const navigate = useNavigate();

  


  return (
    <>
<MainContainer>
    <Container>
      <Sidebar/>  
      <MarginSetter>
    <View/>
    </MarginSetter>
    </Container>
    </MainContainer>
    </>
  )
}

export default AdminAddJob;