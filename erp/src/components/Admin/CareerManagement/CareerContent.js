import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Heading, TableMarginSetter } from './CareerComponent';
import { Heading4,Jobdesc,Location, Enddate, Card, ApplyLink  } from '../../Carrers/CarrerElements';
import { Link } from 'react-router-dom';
import { NavLinksRoute } from '../../Navbar/NavbarElements';
import { Table } from 'react-bootstrap';


const CareerContent = () => {
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
    <Heading>MANAGE JOBS</Heading>
       
      {/* // <Card>
        
      //   <Heading4>{p.jobtitle}</Heading4>
        
      //   <Jobdesc>{p.jobdescription}</Jobdesc>
      //   <Location>Location: {p.location}</Location>
      //   <Enddate>Expires: {p.enddate}</Enddate>
      //   {/* <Applybtn 
      //   to = {`/jobupdate/${p._id}`} 
      //   varient="contained" >Edit</Applybtn>
      //   <Applybtn>Delete</Applybtn> */}
      {/* //   <ApplyLink to={`/jobupdate/${p._id}`}>Edit / Delete</ApplyLink>
      // </Card> */}


<TableMarginSetter>
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
      <td><ApplyLink to={`/jobupdate/${p._id}`}>Edit/Delete</ApplyLink></td>
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
</TableMarginSetter>
     
    </>
  )
}

export default CareerContent;