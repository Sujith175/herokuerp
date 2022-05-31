import React from 'react'
import { useState } from 'react';
import { MarginSetterNav } from '../Carrers/CarrerElements';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar for Pages';
import PageHeader from '../PageHeader';
import { SearchCard, SearchInput, SearchButton, ProgramCard, ProgramCard1 } from './StudentProgramElements';
import { Heading4,Jobdesc} from '../Carrers/CarrerElements';
import { ApplybtnLink } from './StudentProgramElements';
import Footer from '../Footer';


const StudentPrograme = () => {

    const[jobs, setJobs] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
      <>
    <MarginSetterNav/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
     <PageHeader/>
     <SearchCard>
         {/* <SearchInput 
         style= {{color:"black"}} type="search" placeholder="Search..."
         onChange={handleTextSearch}
         />
         <SearchButton><i class="fa fa-search"></i></SearchButton> */}
     </SearchCard>
     <MarginSetterNav/>
     <ProgramCard>
        <Heading4 style={{color:"white"}}>Jobs For Freshers</Heading4>
        <Jobdesc></Jobdesc> 
         <ApplybtnLink to="/joblists" style={{marginTop:"50%"}}>Learn More</ApplybtnLink>
      </ProgramCard> 
      <ProgramCard1>
        <Heading4 style= {{color:"white"}}>Checkout Our Paid Internship Program</Heading4>
        <Jobdesc></Jobdesc> 
         <ApplybtnLink to="/internshiplist" style={{marginTop:"35.5%"}}>Learn More</ApplybtnLink>
      </ProgramCard1> 
      <MarginSetterNav/>
    <Footer/>
      </>
  )
}

export default StudentPrograme;