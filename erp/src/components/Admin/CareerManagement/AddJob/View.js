import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { Navigate , useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { CardMargin } from './AddJobElements';
import { FormControl } from 'react-bootstrap';
import { useEffect } from 'react';

const View = () => {
    const navigate = useNavigate();

    const [jobtitle, setTitle] = useState("");
    const [jobdescription, setDescription] = useState("");
    const [enddate, setEnddate] = useState("");
    const [requiredskills, setRequiredSkills] = useState("");
    const [salary, setSalary] = useState("");
    const [jobType, setJobType] = useState("");
    const [requirements, setRequirements] = useState("");
    const [categories, setCategories] = useState("");
    const [location, setLocation] = useState("");
    const [status, setStatus] = useState("active");

    
    const registerHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type" : "application/json"
            }
        }


        axios.post("http://localhost:5000/api/auth/postJob",{
            jobtitle:jobtitle,
            jobdescription:jobdescription,
            location:location,
            enddate:enddate,
            requiredSkills:requiredskills,
            salary:salary,
            jobType:jobType,
            requirements:requirements,
            categories:categories,
            status:status
            
        
        }).then((response)=>{
            console.log(response.data);

            if(response.data)
            {
                alert ("Jobs added sucessfully");
                navigate("/adminviewjob");
            }
            else{
                alert("Something Went Wrong");
                Navigate("/adminaddjob");
            }
    })

}  
const[locationvalue, setLocationvalue] = useState("");
useEffect(() =>{
    const fetchLocation = async () =>{
        const res = await axios.get("/api/auth/getlocation");
            console.log(res.data);
            // setLocationvalue(res.data);
    
    }
    fetchLocation();
})


  return (
    <>
    <Form name="r_form" onSubmit={registerHandler}>
        <CardMargin>
        <Card style={{width: '50rem', height: '35rem', justifyContent:'center', paddingTop:'15%'}}>
            <Card.Body>
<Card.Title>Add Jobs</Card.Title>   

<FormControl 
value={jobtitle}
    type="text" 
    onChange={ (e) => setTitle(e.target.value)}
    name="Job_title" 
    id="jobtitle"
    placeholder="Job Title" 
    required>
</FormControl>


{/* <textarea name="massage" id="massage" cols="26" rows="5" placeholder="Message"></textarea> */}
{/* <FormControl 
value={jobdescription}
onChange={ (e) => setDescription(e.target.value)}
    type="textarea" 
    name="job_desc" 
    id="desc"
    placeholder="Job Description" 
    required>
</FormControl> */}


<Form.Control as="textarea"
value={jobdescription}
onChange={ (e) => setDescription(e.target.value)}
    type="textarea" 
    name="job_desc" 
    id="desc"
    placeholder="Job Description" 
rows={3} />


<Form.Select aria-label="Default select example"
onChange={(e) => setLocation(e.target.value)}
>
  <option value="" disabled>Select Location</option>
  <option value="Banglore">Banglore</option>
  <option value="Delhi">Delhi</option>
  <option value="Canada">Canada</option>
  <option value="Kerala">Kerala</option>
</Form.Select> 

<FormControl 
value={requiredskills}
    type="text" 
    onChange={ (e) => setRequiredSkills(e.target.value)}
    name="required_skills" 
    id="email"
    placeholder="Required Skills" 
    required>
</FormControl>  

<FormControl 
value={salary}
    type="text" 
    onChange={ (e) => setSalary(e.target.value)}
    name="salary" 
    id="email"
    placeholder="Salary For Job" 
    required>
</FormControl>

<FormControl 
value={jobType}
    type="text" 
    onChange={ (e) => setJobType(e.target.value)}
    name="jobtype" 
    id="email"
    placeholder="Job Type" 
    required>
</FormControl>

<FormControl 
value={requirements}
    type="text" 
    onChange={ (e) => setRequirements(e.target.value)}
    name="requirements" 
    id="email"
    placeholder="Job Requirements" 
    required>
</FormControl>  

<FormControl 
value={categories}
    type="text" 
    onChange={ (e) => setCategories(e.target.value)}
    name="categories" 
    id="email"
    placeholder="Job Category" 
    required>
</FormControl>  

<FormControl 
value={enddate}
onChange={ (e) => setEnddate(e.target.value)}
onFocus={ (e) => e.target.type='date'}
onBlur = { (e) => e.target.type='text'}
    type="text" 
    name="end_date" 
    id="date"
    placeholder="Expire Date" 
    required>
</FormControl> 

<input type="submit" style={{backgroundColor:"grey", width:"150px", marginLeft:"40%"}} value="Submit" name="submit"></input>
</Card.Body>
</Card>
</CardMargin>
        </Form>
    </>
  )
}

export default View;