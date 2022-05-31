import React, {useRef} from 'react'
import Navbar from '../Navbar for Pages';
import Sidebar from '../Sidebar';
import { MarginSetterNav } from '../Carrers/CarrerElements';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { CardWrapper } from '../Intern/InternElements';
import Footer from '../Footer';
import { Billhead, P, P1, P2, ButtonLink} from './InternbillElements';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import jsPDF from "jspdf";
import './internBill.css'

import { ButtonWrapper } from './InternbillElements';


const InternBill = () => {
    const [isOpen, setIsOpen] = useState(false);

    const[billid, setBillid] = useState("");
    const[progname, setProgname] = useState("");
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[price, setPrice] = useState("");
    const[generateddate, setGeneratedDate] = useState("");
        const toggle = () => {
        setIsOpen(!isOpen);
      };

      const location = useLocation();
      const path = location.pathname.split("/")[2];
      useEffect(()=>{
   
        console.log(path);
          const fetchBillData = async () =>{
            try{
                const res = await axios.get("http://localhost:5000/api/auth/getBillbyid/" + path);
                setBillid(res.data.Internbilllist._id);
                setProgname(res.data.Internbilllist.programname);
                setUsername(res.data.Internbilllist.username);
                setEmail(res.data.Internbilllist.email);
                setPrice(res.data.Internbilllist.price);
                setGeneratedDate(res.data.Internbilllist.createdAt);
            }catch(error){
              console.log(error);
            }
          }
          fetchBillData();
      })

   const generatepdf = () => {
        var doc = new jsPDF("landscape","px", [1500, 1500] );
        doc.html(document.querySelector("#content"),{
            callback: function(pdf){
                pdf.save("IntadaBill.pdf");
            }
        })
   };
  return (
    <>
    <MarginSetterNav/>
<Sidebar isOpen={isOpen} toggle={toggle}/>
<Navbar toggle={toggle} />

<MarginSetterNav/>

    <ButtonLink to = "/internshiplist"> --Go to Internship</ButtonLink>
    <ButtonWrapper>
    <Button  onClick={generatepdf} style={{width:"140px"  ,marginLeft:"80%"}}>Download Bill</Button>
    </ButtonWrapper>

<div id="content" style={{}}>
<CardWrapper>
<Card style={{backgroundColor:"#6C63FF"}}>
  <Card.Body style={{color: "white"}}>Intada</Card.Body>
  <Billhead>payment bill</Billhead>
</Card>

    
<Card style={{height:"500px", borderColor:"#6C63FF"}}>

  <P1>Bill Id : #{billid}</P1>
  <P>Name : {username}</P>
  <P>Email ID : {email}</P>
  <P>Program Name : {progname}</P>
  <P>Bill Generated at:  {generateddate}</P>
  <P >Payment Status:  <span style={{color:"green", textTransform:"uppercase", fontStyle:"bold"}}>SuccessFull</span></P>
  <P2>Total Amount:  Rs:{price}/-</P2>
  
    
</Card>
</CardWrapper>
</div>
<MarginSetterNav/>
<Footer/>
    </>
  )
}

export default InternBill