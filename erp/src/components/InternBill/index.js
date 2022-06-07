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
import './internBill.css';
import { useContext } from 'react';
import { ButtonWrapper } from './InternbillElements';
import { Context } from '../../Context/Context';


const InternBill = () => {
    const [isOpen, setIsOpen] = useState(false);

    const[billid, setBillid] = useState("");
    const[progname, setProgname] = useState("");
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[price, setPrice] = useState("");
    const[data,setData] = useState([]);
    

    const[generateddate, setGeneratedDate] = useState("");
        const toggle = () => {
        setIsOpen(!isOpen);
      };

      const location = useLocation();
      // const path = location.pathname.split("/")[2];
      const {user, dispatch} = useContext(Context);

     
      useEffect(()=>{
   
        const userid = user._id;

          const fetchBillData = async () =>{
            try{
                const res = await axios.get("http://localhost:5000/api/auth/getBillbyid/" + userid);
                // setBillid(res.data.Internbilllist._id);
                // setProgname(res.data.Internbilllist.programname);
                // setUsername(res.data.Internbilllist.username);
                // setEmail(res.data.Internbilllist.email);
                // setPrice(res.data.Internbilllist.price);
                // setGeneratedDate(res.data.Internbilllist.createdAt);
                setData(res.data.Internbilllist);
               
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

    { data.map((p)=> (
<Card style={{height:"500px", borderColor:"#6C63FF"}}>
  <P1>Bill Id : #{p.internshipid}</P1>
  <P>Name : {p.programname}</P>
  <P>Email ID : {p.email}</P>
  <P>Program Name : {p.programname}</P>
  <P>Bill Generated at:  {p.updatedAt}</P>
  <P >Payment Status:  <span style={{color:"green", textTransform:"uppercase", fontStyle:"bold"}}>SuccessFull</span></P>
  <P2>Total Amount:  Rs:{p.price}/-</P2>  
</Card>

    ))

}
</CardWrapper>
</div>
<MarginSetterNav/>
<Footer/>
    </>
  )
}

export default InternBill