import React from 'react'
import { Container,MainContainer } from '../AdminComponents';

import Sidebar from '../Sidebar';
import ManageJobContent from './ManageJobContent';

const ManageJobHome = () => {
  return (
    <>
    <MainContainer>
    <Container>
      <Sidebar/>  
    <ManageJobContent/>
    </Container>
    </MainContainer>
    </>
  )
}

export default ManageJobHome