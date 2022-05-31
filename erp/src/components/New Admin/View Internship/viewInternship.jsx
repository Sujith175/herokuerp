import React from 'react'
import ASidebar from '../ASidebar/Sidebar';
import ANavbar from '../ANavbar/Navbar';
import '../Home/Home.scss';
import { useEffect } from 'react';
import { MdSettingsEthernet } from 'react-icons/md';
import { useState } from 'react';
import '../Admin View Job/AdminView.scss';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ViewInternship = () => {

    const[intern, setIntern] = useState();
console.log(intern);
useEffect(() => {
    const viewIntern = async() =>{
        await fetch("http://localhost:5000/api/auth/getinternship")
        .then((res)=> res.json())
        .then((d) => setIntern(d.intern))
        .catch((err) => console.log(err));
    }
    viewIntern();
},[]);


  return (
   <>
    <div className="home">
    <ASidebar/>
    <div className="homeContainer">
      <ANavbar/>



      <h2 className="heading">View InternShips</h2>
     
     
     <div style={{marginLeft:"2%", marginRight:"2%"}}>
     <Table striped bordered hover variant="dark">
       <thead>
         <tr>
           
           <th>Internship Title</th>
           <th>Description</th>
           <th>Price</th>
           <th>Required Skills</th>
           <th>Time Period</th>
           <th>Number of Slots</th>
           <th></th>
     
         </tr>
       </thead>
       { intern &&  intern.map(p =>
       <tbody>
         
         <tr>
           <td>{p.name}</td>
           <td>{p.description}</td>
           <td>{p.rate}</td>
           <td>{p.requiredskills}</td>
           <td>{p.timeperiod}</td>
           <td>{p.numberofopenings}</td>
           <td><Link className="applylink" to={`/updateintern/${p._id}`}>Edit/Delete</Link></td>
         </tr>
  
       {
         p.status == "Inactive" &&
         <tr>
           <td></td>
           <td></td>
           <td>No Jobs Available </td>
           <td></td>
           <td></td>
         </tr>
       }
       </tbody>
        )}
     </Table>
     </div>
     </div>

     </div>
      
      
   </>
  )
}

export default ViewInternship