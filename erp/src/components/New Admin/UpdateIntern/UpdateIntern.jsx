import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import '../Home/Home.scss';
import '../ASidebar/Sidebar';
import '../ANavbar/Navbar';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './UpdateIntern.scss';
import ASidebar from '../ASidebar/Sidebar';
import ANavbar from '../ANavbar/Navbar';

const UpdateIntern = () => {

  const[intern,setIntern] = useState("");
const[name,setName] = useState("");
const[description, setDescription] = useState("");
const[rate, setRate] = useState("");
const[requiredskills, setRequiredskills] = useState("");
const[timeperiod, setTimeperiod] = useState("");
const[numberofopeninings, setNumberofopenings] = useState("");
const[showForm, setShowForm] = useState(false);
const[status,setStatus] = useState("inactive")
  const id =useParams().id;


  const navigate = useNavigate();
  useEffect(() => {

    const fetchHandler =  async () =>{
      await fetch(`http://localhost:5000/api/auth/admingetinternbyid/${id}`)
      .then(async(res)=>await res.json())
      .then((d)=>setIntern(d.Internlist))
      .then((d)=>console.log(d.Internlist))
      .catch((err)=> console.log(err));
     
    };
    fetchHandler();
   setName(intern.name);
   setDescription(intern.description);
   setRate(intern.rate);
   setRequiredskills(intern.requiredskills);
   setTimeperiod(intern.timeperiod);
   setNumberofopenings(intern.numberofopenings); 
  }, [id]);



  const deleteHandler =() =>{
    const deleteRequest = async () =>{
      await fetch(`http://localhost:5000/api/auth/deleteintern/${id}`,{
        method:'PATCH',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({
          status: status,
        })
      }) 
}
alert('Removed Successfully You can take backup of deleted job in the Backup Section');
    deleteRequest().then(() => navigate('/viewInternship'));
}

const editHandler = () =>{
  setShowForm(e => !e);
}

const sumbitHandler = (e) =>{
  e.preventDefault();
  const updateRequest = async() => {
      await fetch(`http://localhost:5000/api/auth/updateintern/${id}`,{
        method:'PATCH',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({

          name,
          description,
          rate,
          requiredskills,
          timeperiod,
          numberofopeninings
        })

      }
      ).then(res=> res.json())
      .then(() => alert(`Updated Successfully Click Ok to Proceed`))
      .catch(err => console.log(err))
  }
  
  updateRequest().then(() => navigate('/viewInternship'));
  setShowForm(e => !e);
}

  return (
    <>
<div className="home">
    <ASidebar/>
    <div className="homeContainer">
      <ANavbar/>
      <div className="floatcontainer">

        <div className="floatchild">
        {intern && (
            <div className="updatecard">
        <h4 className="heading4">{intern.name}</h4>
        <p className='jobdesc'>{intern.description}</p>
        <p className='location'>Price: {intern.rate}</p>
        <p className="enddate">Requirements: {intern.requiredskills}</p>
        <p className="enddate">TimeSpan:{intern.timeperiod}</p>
        <p className="enddate">Number of Slots:{intern.numberofopenings}</p>
       <button className= "applybutton" onClick={editHandler}>Edit</button>
       <p></p>
       <button className= "applybutton" onClick={deleteHandler}>Delete</button>
            </div>
             ) }
        </div>

        <div className="floatchild">


        { showForm && (
  <div className="frmcontainer">

     <Form onSubmit={sumbitHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Internship Name</Form.Label>
    <Form.Control type="text" value={name}
    onChange={(e)=>setName(e.target.value)}
    placeholder={intern.name} 
    
    />

  </Form.Group>

 

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Internship Description</Form.Label>
<Form.Control as="textarea"
value={description}
onChange={(e)=>setDescription(e.target.value)}
    type="textarea" 
    name="job_desc" 
    id="desc" 
    placeholder={intern.description}
rows={3} />
</Form.Group>

  

<Form.Group className="mb-3" controlId="formBasicSalary">
<Form.Label>Rate</Form.Label>
<Form.Control 
value={rate}
    type="text" 
    onChange={(e)=>setRate(e.target.value)}
    name="salary" 
    id="email"
    placeholder={intern.rate} 
    >
</Form.Control>
</Form.Group>


 


<Form.Group className="mb-3" controlId="formBasicJobType">
<Form.Label>Required Skills</Form.Label>
<Form.Control 
value={requiredskills}
    type="text" 
    onChange={(e)=>setRequiredskills(e.target.value)}
    name="jobtype" 
    id="email"
    placeholder={intern.requiredskills} 
    >
</Form.Control>
 </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicrequirements">
    <Form.Label>Time Period</Form.Label>
    <Form.Control type="text" value={timeperiod}
    onChange={(e)=>setTimeperiod(e.target.value)}
    name="requiredskill"
    placeholder={intern.timeperiod}/>
  </Form.Group> 


  <Form.Group className="mb-3" controlId="formBasicrequirements">
    <Form.Label>Number of Openings</Form.Label>
    <Form.Control type="text" value={numberofopeninings}
    onChange={(e)=>setNumberofopenings(e.target.value)}
    name="requiredskill"
    placeholder={intern.numberofopenings}/>
  </Form.Group> 

  {/* <Form.Group className="mb-3" controlId="formBasicLocation">
<Form.Label>Status</Form.Label>
<Form.Select aria-label="Default select example"
onChange={(e)=>setUstatus(e.target.value)}
value={ustatus}
>
  <option value="" disabled>Select Status</option>
  <option value="active">Active</option>
  <option value="inactive">Inactive</option>
</Form.Select> 
</Form.Group> */}

  <Button variant="primary" type="submit">
    Update
  </Button>
</Form>
</div>
)}
        </div>

    </div>
    </div>
    </div>
    </>
  )
}

export default UpdateIntern