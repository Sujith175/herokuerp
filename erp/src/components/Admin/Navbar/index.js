import React from 'react'
import { Icon, InputContainer, NavbarContainer, Text, Input } from './AdminNavComponent';
import {FiSearch} from 'react-icons/fi';
import { NavBtnBtn, NavBtn } from '../../Navbar/NavbarElements';
import { useNavigate } from 'react-router-dom';
const AdminNav = () => {



  const navigate = useNavigate();
  const logoutHandler = () =>{
    localStorage.removeItem("authToken");
    navigate('/login');
    };


  return (
    <>
    <NavbarContainer>
        <Text>
           Hello
           <span>Admin@Intada</span> 
        </Text>
        <InputContainer>
        <Icon>
            <FiSearch/>
        </Icon>
        <Input type="text" placeholder="Search"></Input>
        <NavBtn>
          <NavBtnBtn onClick={logoutHandler}>Logout</NavBtnBtn>
        </NavBtn>
        </InputContainer>
    </NavbarContainer>
    </>
  )
}

export default AdminNav;