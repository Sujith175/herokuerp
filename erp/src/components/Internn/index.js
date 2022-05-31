import React from 'react'
import { CardWrapper } from '../InternshipList/internshiplistElements';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import { useContext } from 'react';


const Internn = ({post}) => {
  const {user, dispatch} = useContext(Context);
  return (
    <>
    <CardWrapper>
    <Card border="primary" style={{ width: '20rem' }}>
    <Card.Header style={{color:"#5165cf",fontStyle:"bold"}}>{post.name}</Card.Header>
    <Card.Body>
      <Card.Text style={{color:"rgb(38, 59, 168)"}}>
        {post.description}
      </Card.Text>
      <Card.Text style={{color:"rgb(38, 59, 168)"}}>Rate: {post.rate}</Card.Text>
      <Card.Text style={{color:"rgb(38, 59, 168)"}}>Seats Available: {post.numberofopenings}</Card.Text>
      {user && <Button variant = "outline-primary"><Link style={{textDecoration: "none"}} to = {`/intern/${post._id}`}>Learn More</Link></Button>}
      {!user && <Button variant = "outline-primary"><Link style={{textDecoration: "none"}} to = {`/login`}>Login/Signup to Apply</Link></Button>}
    </Card.Body>
  </Card>
  </CardWrapper>
    </>
  )
}

export default Internn