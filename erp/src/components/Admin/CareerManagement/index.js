import React from 'react'
import {Container, MainContainer } from '../AdminComponents'
import Sidebar from '../Sidebar'
import CareerContent from './CareerContent'
import { MarginSetter } from './CareerComponent';


const CareerManagement = () => {
  return (
      <>
    <MainContainer>
    <Container>
      <Sidebar/>  
      <MarginSetter>
    <CareerContent/>
    </MarginSetter>
    </Container>
    </MainContainer>
    </>
  )
}

export default CareerManagement;