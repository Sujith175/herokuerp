import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ASidebar from '../ASidebar/Sidebar';
import ANavbar from '../ANavbar/Navbar';

const[name, setName] = useState("");
const[description, setDescription] = useState("");
const[rate, setRate] = useState("");
const[requiredskills, setRequiredskills] = useState("");
const[timeperiod, setTimeperiod] = useState("");
const[numberofopenings, setOpenings] = useState("");

const navigate = useNavigate();

const id = useParams().id;


const UpdateIntern = () => {

    useEffect(() => {

        const fetchHandler =  async () =>{
          await fetch(`http://localhost:5000/api/auth/admingetinternbyid/:id/${id}`)
          .then(async(res)=>await res.json())
          .then((d)=>setJobs(d.internlist))
          .then((d)=>console.log(d.internlist))
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

  return (
    <>
    
    </>
  )
}

export default UpdateIntern