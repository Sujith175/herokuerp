import React from 'react'
import { Container, SubContainer, SectionOne, SectionTwo, ColumnOne2, ColumnTwo2, ColumnOne1, ColumnTwo1 } from './MainContentComponents';
import AdminNav from '../Navbar';
import Card from '../Card';


const MainContent = () => {
  return (
    <Container>
      <AdminNav/>
      <SubContainer>
        <SectionOne>
        <ColumnOne1><Card/></ColumnOne1>
        <ColumnTwo1></ColumnTwo1>
        </SectionOne>


        <SectionTwo>
          <ColumnOne2></ColumnOne2>
          <ColumnTwo2></ColumnTwo2>
        </SectionTwo>

      </SubContainer> 
    </Container>
  );
};

export default MainContent;