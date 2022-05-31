import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Table, Thead, Th, TableWrapper, Tr, Td } from './DisplayApplicationElements';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import AdminNav from '../Navbar';
import { ColumnOne1, ColumnTwo1, SectionOne, SubContainer } from '../MainContent/MainContentComponents';
import { Container } from '../AdminComponents';
import { Column1 } from '../../InfoSection/InfoElements';
import { MarginSetterNav } from '../../Carrers/CarrerElements';


const  DisplayApplication= () => {
    const[application, setApplication] = useState();
    
    useEffect(() =>{
        const fetchHandler = async() =>{
           const file = await fetch("http://localhost:5000/api/auth/getapplication")
            .then((res) => res.json())
            .then((res) => setApplication(res))
            .catch((err) => console.log(err));
        };
        fetchHandler(); 
    },{});



  return (
   <>
<AdminNav/>
   <Container>
 <SubContainer>
    <TableWrapper>
   <Table>
   <Thead>
    <Tr>
      <Th>Name</Th>
      <Th>Mobile Number</Th>
      <Th>Qualification</Th>
      <Th>Mark</Th>
      <Th>Status</Th>
      <Th>View Details</Th>
      


    </Tr>
    {application && application.map(p =>
    <Tr>
        <Td>{p.fullname}</Td>
        <Td>{p.mobilenumber}</Td>
        <Td>{p.degree}</Td>
        <Td>{p.mark}</Td>
        <Td>{p.status}</Td>
        <Td><Link to={`/viewfulldetails/${p._id}`}>View</Link></Td>
        
    </Tr>
    )}
  </Thead>
   </Table>
   </TableWrapper>
   </SubContainer>
   </Container>
   </>
  )
}

export default DisplayApplication;