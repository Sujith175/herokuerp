import React from 'react'
import AdminNav from '../../Navbar';
import JobCard from './JobCard';
import { Container, SubContainer, SectionOne, SectionTwo, ColumnOne2, ColumnTwo2, ColumnOne1, ColumnTwo1 } from '../../MainContent/MainContentComponents'
const ManageJobContent = () => {
  return (
    <>
     <Container>
      <AdminNav/>
      <SubContainer>
        <SectionOne>
        <ColumnOne1><JobCard/></ColumnOne1>
        <ColumnTwo1></ColumnTwo1>
        </SectionOne>


        <SectionTwo>
          <ColumnOne2></ColumnOne2>
          <ColumnTwo2></ColumnTwo2>
        </SectionTwo>

      </SubContainer> 
    </Container>
    
    </>
  )
}

export default ManageJobContent;