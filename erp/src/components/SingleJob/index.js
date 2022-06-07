import React, { useEffect, useState } from 'react'
import { SinglePostDesign, SinglePostEdit, SinglePostIcon,
SinglePostTitle, SinglePostWrapper, SinglepostImg, SinglePostInfo, SingleSalary,SingleJobType, SingleJobCategory,
SingleJobRequirements
, SinglePostDate,SinglePostDesc, SingleP, ButtonLink } from './SingleJobElements'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { MarginSetterNav } from '../Carrers/CarrerElements';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar for Pages';
import { ApplybtnLink } from '../StudentProgram/StudentProgramElements';
import { Button } from './SingleJobElements';
import Footer from '../Footer';
import { useContext } from 'react';
import { Context } from '../../Context/Context';


const SinglePost = () => {

  const {user, dispatch} = useContext(Context);

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const[post, SetPost] = useState({}); 
  const [isOpen, setIsOpen] = useState(false);
 const[application, setApplication] = useState([]);

  useEffect(() => {
    const getPost = async () =>  {
      try{
      const res = await axios.get("http://localhost:5000/api/auth/getjoblist/" + path);
      SetPost(res.data.joblist);
      }catch(err){
        console.log(err);
      }
    };
    getPost()
  }, [path]);



  useEffect(() =>{
    console.log("inside useeffect");
    //const email = localStorage.getitem('uemail');
    axios.post("http://localhost:5000/api/auth/getapplicationbyemail",{
      email:user.email })
    .then((res,err) =>{if(err){console.log(err)}else{console.log("suceess")}setApplication(res.data);})
  },[])


  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
   <div>
   <MarginSetterNav/>
   <Sidebar isOpen={isOpen} toggle={toggle}/>
   <Navbar toggle={toggle}/>
   <SinglePostDesign>
    <SinglePostWrapper>
      {/* //{new Date().toString()} */}
        <SinglePostTitle>{post.jobtitle}
          </SinglePostTitle>
           <SinglePostDate><p style={{color:"black"}}>Posted At: </p> {post.createdAt}</SinglePostDate><br></br>
           <SinglePostDate><p style={{color:"black"}}>Validity: </p> {post.enddate}</SinglePostDate>
           <SingleP><p style={{color:"black"}}>Job Location:</p>{post.location}</SingleP>
           <SingleSalary><p style={{color:"black"}}>Expected Salary:</p>{post.salary}</SingleSalary>
           <SingleJobType><p style={{color:"black"}}>Job Type: </p>{post.categories}</SingleJobType>
          
          <SinglePostDesc>
            <p style={{color:"black"}}>Job Description: </p>
             {post.jobdescription}
            </SinglePostDesc>
            <SingleJobRequirements><p style={{color:"black"}}>Requirements For This Job: </p>{post.requirements}</SingleJobRequirements>
           <SingleJobCategory><p style={{color:"black"}}>Category: </p>{post.categories}</SingleJobCategory>
                   
                    <ButtonLink to = {`/registerjob/${path}`}>Apply This Job</ButtonLink>

        
          <SinglePostInfo> 
          </SinglePostInfo>

    </SinglePostWrapper>
   </SinglePostDesign>
   <br></br>
 <Footer/>
   </div>
  )
};
export default SinglePost;