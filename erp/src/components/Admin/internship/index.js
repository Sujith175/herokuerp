import React from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormWrapper } from './InternshipElements';
import { useState } from 'react';
import axios from 'axios';


const ManageInternship = () => {
const [programname, setProgramname] = useState("");
const [description, setDescription] = useState("");
const [rate, setRate] = useState("");
const [requiredskills, setRequiredSkills] = useState("");
const [timeperiod, setTimeperiod] = useState("");
const [openings, setOpenings] = useState("");


const submitHandler = async(e) =>{
    e.preventDefault();
    const config = {
        header: {
            "Content-Type" : "application/json"
        }
    }

    axios.post("/api/auth/addinternship",{
        name:programname,
        rate:rate,
        description:description,
        requiredskills:requiredskills,
        timeperiod:timeperiod,
        numberofopenings:openings
        
    
    }).then((response)=>{
        console.log(response.data);
        if(response.data)
        {
            alert ("Internship Program added sucessfully");
            // navigate("/adminviewjob");
        }
        else{
            alert("Something Went Wrong");
            // Navigate("/adminaddjob");
        }
})



}


  return (
    <>
    <FormWrapper>
  <Form onSubmit={submitHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name Of Program</Form.Label>
    <Form.Control type="text" 
    placeholder="Name Of Program" 
    onChange={ (e) => setProgramname(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control 
    type="text"
     placeholder="Program Description" 
     onChange={ (e) => setDescription(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Rate</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Fees For Program" 
    onChange={ (e) => setRate(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Required Skills</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Required Skills" 
    onChange={ (e) => setRequiredSkills(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Time Period</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Time Period Of Program in Months" 
    onChange={ (e) => setTimeperiod(e.target.value)}
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Number oF Openeings</Form.Label>
    <Form.Control
    type="number" 
    placeholder="Number of Available Slots" 
    onChange={ (e) => setOpenings(e.target.value)}
    />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</FormWrapper>
    </>
  )
}

export default ManageInternship