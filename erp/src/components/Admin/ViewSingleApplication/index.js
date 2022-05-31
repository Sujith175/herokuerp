import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import AdminNav from '../Navbar';
import { useState, useEffect } from 'react';
import { Wrapper ,Title, Name, AcceptButton, RejectButton, Embed, TitleName} from './ViewSingleApplicationElement';
import axios from 'axios';


const ViewSingle = () => {

    const id = useParams().id;
    const[status, setStatus] = useState("Accepted")
    const [application, setApplication] = useState("");
    const[rejstatus, SetRejStatus] = useState("Sorry Your Skills Doesn,t Match Our Requirements");
    const navigate = useNavigate();
    function jobaccept(userid)
    {

      const notification ="Your Application is Accepted";
      axios.post('http://localhost:5000/api/auth/setNotification',{userid:userid,notification:notification}).then((response)=>{
        if(response.data.updateStatus==='success'){
          alert("Job Accepted");

        }
        else if(response.data.updateStatus==='fail'){
          alert("Job not accepted");
        }
      });
    }
    useEffect(() => {

        const fetchHandler =  async () =>{
          await fetch(`http://localhost:5000/api/auth/getapplication/${id}`)
          .then((res)=> res.json())
          .then((res)=> setApplication(res))
          .catch((err)=> console.log(err));
        };
        fetchHandler();
        
      }, [id]);


    
      const onAccepthandler = async() => {
        await fetch(`http://localhost:5000/api/auth/updatestatus/${id}`,{
          method:'PATCH',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({
            status: status,
            
          })
        })
        alert("Are You sure You Want to Accept this Application");
        navigate("/viewapplicatioins")
      };

      const onRejecthandler = async() => {
        await fetch(`http://localhost:5000/api/auth/updatestatus/${id}`,{
          method:'PATCH',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({
            status: rejstatus,
            
          })
        })
        alert("Are You Sure You want to Reject this Application");
        navigate("/viewapplicatioins")
      };
      // onAccepthandler();
    

  return (
      <>
    <AdminNav/>
    <Wrapper>
       
        <Title>Application Details</Title> 
        <TitleName> <span style={{color:"#090b86", fontSize:"20px"}}></span>{application.jobtitle}</TitleName>
        <Embed src={application.photo} />
       <Name> <span style={{color:"#090b86", fontSize:"20px"}}>Applicant Name:  </span>{application.fullname}</Name>
       <Name> <span style={{color:"#090b86", fontSize:"20px"}}>Mobile Number:  </span>{application.mobilenumber}</Name>
       <Name> <span style={{color:"#090b86", fontSize:"20px"}}>Qualification:  </span>{application.qualification}</Name>
       <Name> <span style={{color:"#090b86", fontSize:"20px"}}>Degree:  </span>{application.degree}</Name>
       <Name> <span style={{color:"#090b86", fontSize:"20px"}}>CGPA:  </span>{application.mark}</Name>
       <Name> <span style={{color:"#090b86", fontSize:"20px"}}>Date of Application:  </span>{application.createdAt}</Name>
       <Name> <span style={{color:"#090b86", fontSize:"20px"}}>Current Status Of Application:  </span>{application.status}</Name>
        
       {/* <AcceptButton onClick={()=>{jobaccept(application.userid)}}>Accept</AcceptButton> */}
        <AcceptButton onClick={onAccepthandler} >Accept</AcceptButton> 
       <RejectButton onClick={onRejecthandler}>Reject</RejectButton>
      
    </Wrapper>
    </>
  )
}


export default ViewSingle;
