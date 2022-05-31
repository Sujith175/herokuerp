import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Navbar from '../Navbar for Pages';
import Sidebar from '../Sidebar';
import { MarginSetterNav } from '../Carrers/CarrerElements';
import { CardWrapper, InternHead, Icon, ButtonWrapper, LinkR } from './InternElements';
import { useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Footer from '../Footer';
import GooglePayButton from '@google-pay/button-react';
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

const Intern = () => {
  const id =useParams().internId;

    const {search} = useLocation();
    console.log(search);
  
    const[inte, setInte] = useState([]);
    const {user, dispatch} = useContext(Context);
    const[error, setError] = useState("");
    const[programname, setProgramname] = useState("");
    const[internshipid, setInternshipid] = useState("");
    const[username, setUsername] = useState("");
    const[price, setPrice] = useState("");
    const[userid, setUserid] = useState("");
    const[email, setEmail] = useState("");
    const[billid,setBillId] = useState("");
    const[billuserid, setBilluserid] = useState("");
    const navigate = useNavigate();



    useEffect(() =>{
      //console.log(path);
        const fetchIntern = async () => {
          try {
            const res = await axios.get("/api/auth/getinternship/"+ search);
            
            setInte(res.data.intern);
            setInternshipid(res.data.intern[0]._id);
            setPrice(res.data.intern[0].rate);
            setUserid(user._id);
            setEmail(user.email);
            setUsername(user.firstname);
            setProgramname(res.data.intern[0].name);
            
          }catch(err){
    console.log(err);
          }
        }
        fetchIntern();
      }, [search])
     
useEffect(() =>{

  const fetchId = async () =>{
    try{
        const res = await axios.get("http://localhost:5000/api/auth/getBillbyuserid/" + path);
            setBilluserid(res.data.Internbillbyid.userid);
            setBillId(res.data.Internbillbyid.internshipid);
         
          //console.log(billid);
    }catch(error){
      console.log(error);
    }
  }
  fetchId();
},[])


    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [intern, setIntern] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
      };

      async function  getPayment (){
        console.log(billid);
        
    const config = {
        header: {
            "Content-Type" : "application/json"
        }
    }
    console.log("BIll ID "+billuserid);
    try{
        const{data} = await axios.post("http://localhost:5000/api/auth/postBill",
        {
            internshipid,
            programname,
            username,
            price,
            userid,
            email
            }, config);
            
            if(data)
              {
                
            alert("Registration is Successfull")
            navigate(`/viewbill/${billid}`);
            }else{
              alert("Sorry, something went wrong, Try Again Later")
            }


    }catch(error){
            setError(error.response.data.error);
            setTimeout( () => {
                setError("")
            },5000);  
          }
 }




  return (
      
      
    <>
<MarginSetterNav/>
<Sidebar isOpen={isOpen} toggle={toggle}/>
<Navbar toggle={toggle} />
<MarginSetterNav/>
<CardWrapper>
    {inte.map((p)=>{
      if(p._id === path){
        return(
          <div>   
                
        
<Card>
<InternHead>{p.name}</InternHead><Icon><i style={{fontSize:"30px", color:"#040488"}}class="fa-solid fa-heart"></i></Icon>
  <Card.Body style={{marginLeft:"5%", marginRight:"5%"}}>Description: {p.description}</Card.Body>
  <Card.Body style={{marginLeft:"5%", marginRight:"5%"}}>Fees: {p.rate}</Card.Body>
  <Card.Body style={{marginLeft:"5%", marginRight:"5%"}}>Required Skills: {p.requiredskills}</Card.Body>
  <Card.Body style={{marginLeft:"5%", marginRight:"5%"}}>Time Period: {p.timeperiod}</Card.Body>
  <Card.Body style={{marginLeft:"5%", marginRight:"5%"}}>Available Slots: {p.numberofopenings}</Card.Body>
  <Card.Body style={{marginLeft:"76%", marginRight:"4%", color:"#040488", fontSize:"20px", fontStyle:"bold"}}>Rs: {p.rate}/-</Card.Body>
  {/* <Button style={{width:"200px", marginLeft:"70%", marginBottom:"10%"}} variant="outline-primary"><Link style={{textDecoration: "none"}} to = {""}>Apply Now</Link></Button> */}
  {user._id != billuserid && <ButtonWrapper>
          <GooglePayButton
  
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: String(p.rate),
            currencyCode: 'INR',
            countryCode: 'IN',
          },
          callbackIntents: [ 'PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Success', paymentRequest);
          getPayment();
        }}
        onPaymentAuthorized={paymentData => {
            console.log('Payment Authorised Success', paymentData)
            return { transactionState: 'SUCCESS'}
          }
        }
        
        existingPaymentMethodRequired='false'
        buttonColor='black'
        buttonType='pay'
      />
      </ButtonWrapper>
}
{user._id == billuserid && 
 <Button  style={{width:"200px", marginLeft:"73%", marginBottom:"10%"}} variant="outline-primary"><LinkR to = {"/internshiplist"}>You Already Applied For this Program go back to Internships</LinkR></Button> }
</Card>
</div>
        )
      }
        
 } )
}

</CardWrapper>
<MarginSetterNav/>
<Footer/>
    </>
  );
}

export default Intern