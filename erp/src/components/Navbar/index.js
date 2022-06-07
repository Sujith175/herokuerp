import { blue } from '@mui/material/colors';
import React, {useState, useEffect} from 'react'
import { useContext } from 'react';
import {FaBars} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/Context';
import { 
  Nav,
  NavbarContainer,
  NavLogo, 
  MobileIcon,
   NavMenu, 
   NavItem, 
   NavLinks,
   NavBtn,
   NavBtnLink,
   NavLinksRoute,
   NavBtnBtn,
   TopImage,
   ProfileName
   } from './NavbarElements';


const Navbar = ({toggle}) => {

const {user, dispatch} = useContext(Context);


  const navigate = useNavigate();
  const[ScrollNav, SetScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >=80 ){
      SetScrollNav(true);
    }
      else{
        SetScrollNav(false);
      } 
  }

  useEffect(() =>{
    window.addEventListener('scroll', changeNav)
  }, [])


  const logoutHandler = () =>{
    localStorage.clear();
    dispatch({type: "LOGOUT"});
    navigate('/');
    };

  return (
  <>
  <Nav ScrollNav={ScrollNav}>
    <NavbarContainer>
      <NavLogo to='/'>Intada</NavLogo>
      <MobileIcon onClick={toggle}>
        <FaBars/>
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks to='home'>Home</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to='about'>About</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinksRoute to='/getcarrers'>Careers</NavLinksRoute>
        </NavItem>
        <NavItem>
          <NavLinks to='/services'>Services</NavLinks>
        </NavItem>
        {/* {user &&  <NavItem>
          <NavLinks to=''><span>{user.notifications}</span>
</NavLinks>
        </NavItem>} */}
        <NavBtn>
         
          {!user && 
            <NavBtnLink to="/login">Sign In</NavBtnLink>
          }
         
         
        </NavBtn>
        {user&& <ProfileName><b>{user.firstname}</b></ProfileName>}
         {user && <NavBtnBtn onClick={logoutHandler}>Logout</NavBtnBtn>}
        
      </NavMenu>
    </NavbarContainer>
  </Nav>
  
  </>
  );
};

export default Navbar;