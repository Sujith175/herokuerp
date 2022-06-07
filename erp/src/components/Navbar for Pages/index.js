import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';


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
   NavBtnBtn,
   ProfileName,
   } from './NavbarElements';
import { Context } from '../../Context/Context';



const Navbar = ({toggle}) => {
const {user, dispatch} = useContext(Context);


  const[ScrollNav, SetScrollNav] = useState(false)
  const navigate = useNavigate();


  const changeNav = () => {
    if (window.scrollY >= 80 ){
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
          <NavLinks to='/'>Home</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to='/aboutus'>About</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to='/getcarrers'>Careers</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to='/services'>Services</NavLinks>
        </NavItem>
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