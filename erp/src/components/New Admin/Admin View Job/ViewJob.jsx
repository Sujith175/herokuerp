import React from 'react';
import './AdminView.scss';
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Home/Home.scss';
import '../ASidebar/Sidebar';
import '../ANavbar/Navbar';
import ASidebar from '../ASidebar/Sidebar';
import ANavbar from '../ANavbar/Navbar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';







const ViewJob = () => {

    const id = useParams().id;
    const[jobs, setJob] = useState();

    useEffect(() => {
    const fetchHandler =  async() =>{
        await fetch("http://localhost:5000/api/auth/getjoblist")
        .then((res) => res.json())
        .then((d) => setJob(d.jobs))
        .catch((err) => console.log(err));
      };
      fetchHandler();
    }, []);

  return (
    <>
    <div className="home">
    <ASidebar/>
    <div className="homeContainer">
      <ANavbar/>
      <h1 className="heading">MANAGE JOBS</h1>
     
<div className="tablemaginsetter">
<div className="tablewrapper">
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>Job Title</th>
      <th>Description</th>
      <th>Location</th>
      <th>Expire Date</th>
      <th>Manage</th>

    </tr>
  </thead>
  { jobs &&  jobs.map(p =>
  <tbody>
    { p.status == "active" &&
    <tr>
      <td>{p.jobtitle}</td>
      <td>{p.jobdescription}</td>
      <td>{p.location}</td>
      <td>{p.enddate}</td>
      <td><Link className="applylink" to={`/updatejob/${p._id}`}>Edit/Delete</Link></td>
    </tr>
  }
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
    </div>
    </>
  )
}

export default ViewJob