import React from 'react'
import { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import ASidebar from '../ASidebar/Sidebar';
import ANavbar from '../ANavbar/Navbar';
import '../ASidebar/Sidebar';
import '../ANavbar/Navbar';
import { Navigate, useNavigate } from 'react-router-dom';



const AddInternship = () => {
const navigate = useNavigate();
const[name, setName] = useState("");
const[description, setDescription] = useState("");
const[rate, setRate] = useState("");
const[requiredskills, setRequiredSkills] = useState("");
const[timeperiod, setTimeperiod] = useState("");
const[numberofopenings, setNumberofOpenings] = useState("");

const internHandler = async (e) => {
    e.preventDefault();

     const config = {
          header: {
             "Content-Type" : "application/json"
         }
      }
      axios.post("http://localhost:5000/api/auth/addinternship",{
          
         name:name,
         description: description,
         rate:rate,
         requiredskills:requiredskills,
         timeperiod:timeperiod,
         numberofopenings:numberofopenings,

     
      }).then((response)=>{
          console.log(response.data);

          if(response.data)
          {
              alert ("InternShip added sucessfully");
              navigate("/manageinternship");
          }
          else{
              alert("Something Went Wrong");
              Navigate("/manageinternship");
          }
  })
 }
  return (

    <>
    <div className="home">
    <ASidebar/>
    <div className="homeContainer">
      <ANavbar/>
    


      <Form name="r_form" onSubmit={internHandler}>
        <div className="cardmargin">
        <Card style={{width: '50rem', height: '35rem', justifyContent:'center', paddingTop:'15%'}}>
            <Card.Body>
<Card.Title>Add New Internship</Card.Title>   

<FormControl 
value={name}
    type="text" 
    onChange={ (e) => setName(e.target.value)}
    name="Job_title" 
    id="Name"
    placeholder="Program Name" 
    required>
</FormControl>


<Form.Control as="textarea"
value={description}
onChange={ (e) => setDescription(e.target.value)}
    type="textarea" 
    name="desc" 
    id="prog Description"
    placeholder="Program Description" 
rows={3} />

<FormControl 
value={rate}
    type="text" 
    onChange={ (e) => setRate(e.target.value)}
    name="rate" 
    id="rate"
    placeholder="Total Fees" 
    required>
</FormControl>  

<FormControl 
value={requiredskills}
    type="text" 
    onChange={ (e) => setRequiredSkills(e.target.value)}
    name="requiredskills" 
    id="skills"
    placeholder="Required Skills" 
    required>
</FormControl>

<FormControl 
value={timeperiod}
    type="text" 
    onChange={ (e) => setTimeperiod(e.target.value)}
    name="time" 
    id="time"
    placeholder="Time Period" 
    required>
</FormControl>

<FormControl 
value={numberofopenings}
    type="number" 
    onChange={ (e) => setNumberofOpenings(e.target.value)}
    name="openings" 
    id="openings"
    placeholder="Number of Slots" 
    required>
</FormControl>  

<input type="submit" style={{backgroundColor:"grey", width:"150px", marginLeft:"40%"}} value="Submit" name="submit"></input>
</Card.Body>
</Card>
</div>
        </Form>
      </div>
      </div>
    </>
  )
}

export default AddInternship;