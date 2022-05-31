import React from 'react'
import { MarginSetterNav } from '../Carrers/CarrerElements';
import Navbar from '../Navbar for Pages';
import { useState } from 'react';
import Sidebar from '../Sidebar';
import { Title, TbaleWrapper } from './UserAppliedJobElements';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Footer from '../Footer'
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import * as axios from 'axios';


const UserAppliedJob = () => {
  
  const {user, dispatch} = useContext(Context);
  localStorage.setItem('uemail',user.email);
  console.log(localStorage.getItem('uemail'));
    const[application, setApplication] = useState([]);
    console.log(application);
    // useEffect(() =>{
    //     const fetchHandler = async() =>{
    //        const file = await fetch("http://localhost:5000/api/auth/getapplication")
    //         .then((res) => res.json())
    //         .then((res) => setApplication(res))
    //         .catch((err) => console.log(err));
    //     };
    //     fetchHandler();
      
    // },{});
    useEffect(() =>{
      console.log("inside useeffect");
      //const email = localStorage.getitem('uemail');
      axios.post("http://localhost:5000/api/auth/getapplicationbyemail",{
        email:user.email })
      .then((res,err) =>{if(err){console.log(err)}else{console.log("suceess")}setApplication(res.data);})
    },[])


   
      
const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
    setIsOpen(!isOpen);
    };

  return (
      <>
      
<Sidebar isOpen={isOpen} toggle={toggle}/>
<MarginSetterNav/>
<Navbar toggle={toggle}/>
<MarginSetterNav/>
<Title>Applied Jobs</Title>
<TbaleWrapper>
 
 
<Table striped bordered hover>
  <thead>
    <tr>
   
      <th>Job Title</th>
      <th>Status</th>
      <th>Applied On</th>
      
    </tr>
  </thead>
  <tbody>
  {application.map((p)=>(
    <tr>
    
      <td>{p.jobtitle}</td> 
      <td>{p.status}</td>
      <td>{p.createdAt.toString()}</td>
  
    </tr>
   ))}
  </tbody>
</Table>




    </TbaleWrapper>
    <MarginSetterNav/>
    <MarginSetterNav/>
    <br></br>
    <Footer/>
</>
  )
}

export default UserAppliedJob;
