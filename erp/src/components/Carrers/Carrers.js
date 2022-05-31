import React,{ useState, useEffect} from 'react'
import Navbar from '../Navbar for Pages';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
// import Sidebar from '../Sidebar';
 import { MarginSetter, Card, Heading4, Jobdesc, Location,
   Enddate, Applybtn,MarginSetterNav, Heading } from './CarrerElements';
import Header from '../Header';

  
function Carrers() {
  const [jobs, setJob] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

useEffect(() => {

  const fetchHandler =  async() =>{
    await fetch("http://localhost:5000/api/auth/getjoblist")
    .then((res) => res.json())
    .then((d) => setJob(d.jobs))
    .catch((err) => console.log(err));
  };
  fetchHandler();
}, []);

  return (
  <>
  <MarginSetterNav/>
  <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Header/>
      <MarginSetter>
        
      
      
      {/* <Card>
        <Heading4>Our Students Programe</Heading4>
        <Jobdesc>Internship With Offer Letter</Jobdesc>
        {/* <Location>Location: {p.location}</Location>
        <Enddate>Expires: {p.enddate}</Enddate> */}
        {/* <Applybtn>Apply</Applybtn>
      </Card> */} 
   
     </MarginSetter>
     <Footer/>
  </> 
  );
};


export default Carrers

