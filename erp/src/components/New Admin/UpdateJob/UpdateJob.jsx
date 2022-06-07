import React from 'react'
import './UpdateJob.scss'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ASidebar from '../ASidebar/Sidebar';
import ANavbar from '../ANavbar/Navbar';
import '../Home/Home.scss';
import '../ASidebar/Sidebar';
import '../ANavbar/Navbar';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const UpdateJob = () => {



    const id =useParams().id;
    // const [state, dispatch] =  useReducer(reducer, initailState);
    const [jobs, setJobs] = useState("");
    const[showForm, setShowForm] = useState(false);
    const[jobtitle, setjobtitle] = useState("");
   
    const[ustatus, setUstatus] = useState("");
    const[status, setStatus] = useState("Inactive");
    const[jobdescription, setJobdescription] = useState("");
    const[location, setLoctaion] = useState("");
    const[enddate, setEnddate] = useState("");
    const[salary, setSalary] = useState("");
    const[requirements, setRequirements] = useState("");
    const[categories, setCategories] = useState("");

   console.log(ustatus);

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


    const sumbitHandler = (e) =>{
        e.preventDefault();
        console.log(ustatus);
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
                categories:categories,
                status:ustatus
              })
  
            }
            ).then(res=> res.json())
            .then(() => alert(`Updated Successfully Click Ok to Proceed`))
            .catch(err => console.log(err))
        }
        
        updateRequest().then(() => navigate('/admindisplayjob'));
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
        {jobs && (
            <div className="updatecard">
        <h4 className="heading4">{jobs.jobtitle}</h4>
        <p className='jobdesc'>{jobs.jobdescription}</p>
        <p className='location'>Location: {jobs.location}</p>
        <p className="enddate">Expires: {jobs.enddate}</p>
        <p className="enddate">Salary:{jobs.salary}</p>
        <p className="enddate">Requirements:{jobs.requirements}</p>
        <p className="enddate">Category:{jobs.categories}</p>
        <p className="enddate">Status:{jobs.status}</p>
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

  <Form.Group className="mb-3" controlId="formBasicLocation">
<Form.Label>Status</Form.Label>
<Form.Select aria-label="Default select example"
onChange={(e)=>setUstatus(e.target.value)}
value={ustatus}
>
  <option value="" disabled>Select Status</option>
  <option value="active">Active</option>
  <option value="inactive">Inactive</option>
</Form.Select> 
</Form.Group>

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

export default UpdateJob;