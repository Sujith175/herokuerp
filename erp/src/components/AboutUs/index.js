import React from 'react'
import Navbar from '../Navbar for Pages'
import Sidebar from '../Sidebar';
import { useState } from 'react';
import { MarginSetterNav } from '../Carrers/CarrerElements';
import Footer from '../Footer';
import {Header, Aboutpara, AboutImg, Wrapper, Left, FooterMargin} from './Aboutelements';
import image from '../../images/about.jpg';

const About = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
      };
      
  return (
    <> <MarginSetterNav/>
     <Sidebar isOpen={isOpen} toggle={toggle}/>
   <Navbar toggle={toggle} />
    <Header>Who is Intada?</Header>
   <Wrapper>
     <Left>
    <Aboutpara>
    INTADA is a Canadian born company which patterns with
businesses and community to address their key huddles
and unleash their true potentials that leads to success.
Our growth is valued by the level of involvement we
undertake in our clients betterment. We believe in diverse
work culture and true leadership sprit will bring a clear
identity to our work and contribute to build a better
society where we are involved.
At INTADA, our motive is to provide a better solutions for
every venture we undertake. Our leadership is passion
driven in providing integrated solutions in the area of
electronic security systems, Brand designs, strategic and
operations management consulting. The core notion of
our novel strategies comprise of a blend of both
traditional and modern management principles and
practices, which make our client’s enterprise stand out in
the market. We love to undertake challenges and being
challenged for the best.
    </Aboutpara>
    </Left>
    <AboutImg src={image} alt=""/>
    </Wrapper>
    
  <FooterMargin>
   <Footer/>
   </FooterMargin>
    </>
  )
}

export default About