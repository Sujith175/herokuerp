import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar';
import { useState, useEffect } from 'react'
import HeroSection from '../HeroSection/index';
import InfoSection from '../InfoSection';
import Services from '../Services';
import { homeObjOne,homeObjTwo,homeObjThree,homeObjFour } from '../InfoSection/Data';
import Footer from '../Footer';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Context } from '../../Context/Context';
import { useContext } from 'react';



const Home = () => {
 
  const {user, dispatch} = useContext(Context);

  const navigate = useNavigate();
  const [error, setError] = useState(""); 
  const [privateData, setPrivateData] = useState(""); 
  // const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  console.log(user);
  // useEffect (() =>{
  //   if(!localStorage.getItem("authToken")){
  //       navigate("/");
  //   }
  // })


    // const fetchPrivateData = async () => {
    //   const config = {
    //       headers : {
    //           "Content-Type" : "application/json",
    //           Authorization : `Bearer ${localStorage.getItem("authToken")}`
    //       }
    //   }



//       try{
//         const {data}  = await axios.get("/api/private",config);
//         setPrivateData(data.data);
//     }catch(error){
//         localStorage.removeItem("authToken");
//         setError("You Are Not Authorized Please Login");
//     }
// }
// fetchPrivateData();
// },  [history]);

const toggle = () => {
  setIsOpen(!isOpen);
};

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
   <Navbar toggle={toggle} />
   <HeroSection/>
   <InfoSection {...homeObjOne}/>
   <InfoSection {...homeObjTwo}/>
   <InfoSection {...homeObjThree}/>
   <Services/>
   <Footer/>
   
   </>
  );
};

export default Home;
