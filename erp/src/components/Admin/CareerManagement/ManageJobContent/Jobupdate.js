import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Heading4, UpdateCard, Jobdesc, Location, Enddate, Applybtn, FrmContainer,FloatContainer,FloatChild } from '../../../Carrers/CarrerElements';
import { ClassNames } from '@emotion/react';
import Box from '@mui/material/Box';
import { Form } from 'react-bootstrap';
import { Button, Container } from 'react-bootstrap';
import { useReducer } from 'react'
import Sidebar from '../../Sidebar';




//action
// const reducer = (state,{type, payload }) =>{
//   switch (type) {
//     case 'jobtitle':
//       return {...state, jobtitle:{value:payload} };
//     case 'jobdescription': 
//       return {...state, jobdescription:{value:payload} } ;
//     case 'location': 
//       return {...state, location:{value:payload} } ;
//     case 'enddate': 
//       return {...state, enddate:{value:payload} } ;
//       default: 
//       return {state}
//   }
// };
 
// const initailState = {
//   jobtitle: {
//   value:'' 
//   },
//   jobdescription:{
//     value:''
//   },
//   location:{
//     value:''
//   },
//   enddate: {
//     value:''
//   },
//   requiredskills:{
//     value:''
//   },
//   salary:{
//     value:''
//   },
//   JobType:{
//     value:''
//   },
//   requirements:{
//     value:''
//   },
//   categories:{
//     value:''
//   }
// };


const Jobupdate = () => {
    const id =useParams().id;
    // const [state, dispatch] =  useReducer(reducer, initailState);
    const [jobs, setJobs] = useState("");
    const[showForm, setShowForm] = useState(false);
    const[jobtitle, setjobtitle] = useState("");
   
    const[status, setStatus] = useState("Inactive");
    const[jobdescription, setJobdescription] = useState("");
    const[location, setLoctaion] = useState("");
    const[enddate, setEnddate] = useState("");
    const[salary, setSalary] = useState("");
    const[requirements, setRequirements] = useState("");
    const[categories, setCategories] = useState("");
   

    const navigate = useNavigate();
        useEffect(() => {

        const fetchHandler =  async () =>{
          await fetch(`http://localhost:5000/api/auth/getjoblist/${id}`)
          .then(async(res)=>await res.json())
          .then((d)=>setJobs(d.joblist))
          .then((d)=>console.log(d.joblist))
          .catch((err)=> console.log(err));
         
        };
        fetchHandler();
        setjobtitle(jobs.jobtitle);
        setJobdescription(jobs.jobdescription);
        setLoctaion(jobs.location);
        setSalary(jobs.salary);
        setEnddate(jobs.enddate);
        setRequirements(jobs.requirements);
        setCategories(jobs.categories);
        
      }, [id]);

    

      const deleteHandler =() =>{
        const deleteRequest = async () =>{
          await fetch(`http://localhost:5000/api/auth/deletejob/${id}`,{
            method:'PATCH',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
              status: status,
              
            })
          }) 
  }
  alert('Removed Successfully You can take backup of deleted job in the Backup Section');
        deleteRequest().then(() => navigate('/adminviewjob'));
}
    
    const editHandler = () =>{
        setShowForm(e => !e);
    }

    // const inputChangeHandler = (e,name) =>{
    //   switch(name){
    //     case 'jobtitle' :
    //       dispatch({type:'jobtitle', payload:e.target.value});
    //       break;

    //     case 'jobdescription' :
    //       dispatch({type:'jobdescription', payload:e.target.value});
    //       break;

    //     case 'location' :
    //       dispatch({type:'location', payload:e.target.value});
    //       break;

    //     case 'enddate' :
    //       dispatch({type:'enddate', payload:e.target.value});
    //       break;

    //     case 'requiredskills' :
    //       dispatch({type:'requiredskills', payload:e.target.value});
    //       break;

    //     case 'requiredskills' :
    //       dispatch({type:'requiredskills', payload:e.target.value});
    //       break;

    //     case 'salary' :
    //       dispatch({type:'salary', payload:e.target.value});
    //       break;


    //     default:
    //       break;  
    //   }
    // }

    const sumbitHandler = (e) =>{
      e.preventDefault();
      
      const updateRequest = async() => {
          await fetch(`http://localhost:5000/api/auth/updatejob/${id}`,{
            method:'PATCH',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({

              jobtitle:jobtitle,
              jobdescription:jobdescription,
              location:location,
              enddate:enddate,
              requirements:requirements,
              salary:salary,
              categories:categories
            })

          }
          ).then(res=> res.json())
          .then(() => alert(`Updated Successfully Click Ok to Proceed`))
          .catch(err => console.log(err))
      }
      updateRequest().then(() => navigate('/adminviewjob'));
      setShowForm(e => !e);
    }
  return (
    <>
    {/* <Sidebar/> */}
  <FloatContainer>
  
    <FloatChild>
    
    {jobs && (
        <UpdateCard>
        <Heading4>{jobs.jobtitle}</Heading4>
        <Jobdesc>{jobs.jobdescription}</Jobdesc>
        <Location>Location: {jobs.location}</Location>
        <Enddate>Expires: {jobs.enddate}</Enddate>
        <Location>{jobs.requiredskills}</Location>
        <Location>{jobs.salary}</Location>
        <Location>{jobs.JobType}</Location>
        <Location>{jobs.requirements}</Location>
        <Location>{jobs.categories}</Location>
       <Applybtn onClick={editHandler}>Edit</Applybtn>
       <p></p>
       <Applybtn onClick={deleteHandler}>Delete</Applybtn>
     </UpdateCard>
     ) }
</FloatChild>

<FloatChild>
{ showForm && (
  <FrmContainer>
     <Form onSubmit={sumbitHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Job Title</Form.Label>
    <Form.Control type="text" value={jobtitle}
    onChange={(e)=>setjobtitle(e.target.value)}
    placeholder={jobs.jobtitle} 
    
    />

  </Form.Group>

 

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Job Description</Form.Label>
<Form.Control as="textarea"
value={jobdescription}
onChange={(e)=>setJobdescription(e.target.value)}
    type="textarea" 
    name="job_desc" 
    id="desc" 
    placeholder={jobs.jobdescription}
rows={3} />
</Form.Group>

  


<Form.Group className="mb-3" controlId="formBasicLocation">
<Form.Label>Location</Form.Label>
<Form.Select aria-label="Default select example"
onChange={(e)=>setLoctaion(e.target.value)}
value={location}
>
  <option value="" disabled>Select Location</option>
  <option value="Banglore">Banglore</option>
  <option value="Delhi">Delhi</option>
  <option value="Canada">Canada</option>
  <option value="Kerala">Kerala</option>
</Form.Select> 
</Form.Group>

  


<Form.Group className="mb-3" controlId="formBasicSalary">
<Form.Label>Salary</Form.Label>
<Form.Control 
value={salary}
    type="text" 
    onChange={(e)=>setSalary(e.target.value)}
    name="salary" 
    id="email"
    placeholder={jobs.salary} 
    >
</Form.Control>
</Form.Group>


 


<Form.Group className="mb-3" controlId="formBasicJobType">
<Form.Label>Job Type</Form.Label>
<Form.Control 
value={categories}
    type="text" 
    onChange={(e)=>setCategories(e.target.value)}
    name="jobtype" 
    id="email"
    placeholder={jobs.categories} 
    >
</Form.Control>
 </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicrequirements">
    <Form.Label>Job Requirements</Form.Label>
    <Form.Control type="text" value={requirements}
    onChange={(e)=>setRequirements(e.target.value)}
    name="requiredskill"
    placeholder={jobs.requirements}/>
  </Form.Group> 

 


<Form.Group className="mb-3" controlId="formBasicrequirements">
<Form.Label>End Date</Form.Label>
  <Form.Group  className="mb-3" controlId="formBasicend Date">
   <input style={{color:"black"}} type="text" 
   onFocus = {(e) => e.target.type = 'date'}
   onBlur = {(e) => e.target.type = 'text'}
   onChange={(e) => setEnddate(e.target.value)}
   value={enddate}
    placeholder={jobs.enddate}
    required
    />
  </Form.Group>
  </Form.Group>

  <Button variant="primary" type="submit">
    Update
  </Button>
</Form>
</FrmContainer>
)}
</FloatChild>
</FloatContainer>
    </>
  );
      }

export default Jobupdate;