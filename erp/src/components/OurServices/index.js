import React from 'react'
import Navbar from '../Navbar for Pages'
import Sidebar from '../Sidebar';
import { useState } from 'react';
import { MarginSetterNav } from '../Carrers/CarrerElements';
import Header from '../Header';

const OurServices = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
      };
      
  return ( 
    <>
    <MarginSetterNav/>
     <Sidebar isOpen={isOpen} toggle={toggle}/>
   <Navbar toggle={toggle} />
    <Header/>
    </>
  )
}

export default OurServices