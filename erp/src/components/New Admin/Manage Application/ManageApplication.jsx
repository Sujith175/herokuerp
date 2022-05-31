import React from 'react'
import ASidebar from '../ASidebar/Sidebar';
import ANavbar from '../ANavbar/Navbar';
import { Link } from 'react-router-dom';
import '../Home/Home.scss';
import '../ASidebar/Sidebar';
import '../ANavbar/Navbar';
import './ManageApplication.scss'
import { useState } from 'react';
import { useEffect } from 'react';

const ManageApplication = () => {
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
     <div className="home">
    <ASidebar/>
    <div className="homeContainer">
      <ANavbar/>
      <div className="tablewrapper">
          <table className='Table'>
          <th className='Thead'>
    <tr className='TR'>
      <th className='TH'>Name</th>
      <th className='TH'>Mobile Number</th>
      <th className='TH'>Qualification</th>
      <th className='TH'>Mark</th>
      <th className='TH'>Status</th>
      <th className='TH'>View Details</th>
    </tr>
    {application && application.map(p =>
    <tr className='TR'>
        <td className='Td'>{p.fullname}</td>
        <td className='Td'>{p.mobilenumber}</td>
        <td className='Td'>{p.degree}</td>
        <td className='Td'>{p.mark}</td>
        <td className='Td'>{p.status}</td>
        <td className='Td'><Link to={`/viewfulldetails/${p._id}`}>View</Link></td>
        
    </tr>
    )}
  </th>
          </table>
      </div>
      </div>
      </div>
    </>
  )
}

export default ManageApplication