import React from 'react'
import { PostDesign, PostInfo, Postcat, PostDate,
   PostCats, PostDesc, PostT, JobLocation, JobStatus } from './JobElements';
import { ApplybtnLink } from '../StudentProgram/StudentProgramElements';
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import Footer from '../Footer';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';




const Job = ({post}) => {

  const {user, dispatch} = useContext(Context);

  return (
    <>
    {/* {  post.status === "active" &&

    <PostDesign>
    <PostInfo>
      
      
      <PostT>{post.jobtitle}</PostT>
     
      <hr></hr>
      <PostDate>{new Date(post.createdAt).toDateString()}</PostDate> 
      <PostDesc>
      {post.jobdescription}
      </PostDesc>
      <JobLocation>{post.location}</JobLocation>
      <ApplybtnLink style = {{ color : "#A6A3D5" , marginTop : "20%", borderRadius : "10px", color : "black"}} to = {`/job/${post._id}`} >
        Learn More About this Job
      </ApplybtnLink>
    </PostInfo>
    </PostDesign>

} */}
{ post.status ==="active" &&
<Card style={{ width: '20rem', margin:'1rem' , marginLeft: '10%'}}>
  <Card.Body>
    <Card.Title>{post.jobtitle}</Card.Title>
    <Card.Text>{post.location}</Card.Text>
    <Card.Text style={{display: '-webkit-box' , webkitLineClamp: '4', webkitBoxOrient: 'horizontal'}}>
      {post.jobdescription}
    </Card.Text>
    {user && <ApplybtnLink style = {{ color : "#A6A3D5" , marginTop : "20%", borderRadius : "10px", color : "black"}} to = {`/job/${post._id}`} >Learn More About This Post</ApplybtnLink>}
    {!user && <ApplybtnLink style = {{ color : "#A6A3D5" , marginTop : "20%", borderRadius : "10px", color : "black"}} to = {'/login'} >Login/Signup to Apply</ApplybtnLink>}
  </Card.Body>
</Card>
}
    </>
  )
}
export default Job;
