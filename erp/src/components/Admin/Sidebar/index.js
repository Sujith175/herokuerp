import React from 'react';
import {RiHomeLine, RiFileCopyLine} from 'react-icons/ri'
import {FaWallet} from "react-icons/fa";
import {AiOutlinePieChart} from 'react-icons/ai'
import AvatharImage from '../assets/avatharimage.png';
import { darkThemeColor } from '../utils';
import { Avathar, Name, Containerdiv, ProfileContainerdiv, Links, Link, LinksContainerdiv, ContactContainer
 } from './SidebarComponents';
 import { NavLinksRoute } from '../../Navbar/NavbarElements';
const Sidebar = () => {
  return (
    <>
    <Containerdiv>
      <ProfileContainerdiv>
        <Avathar src={AvatharImage}/>
        <Name>Admin@intada</Name>
        
      </ProfileContainerdiv>
      <LinksContainerdiv>
      <Links>
      <Link><RiHomeLine/><h3><NavLinksRoute to='/admindash'>DashBoard</NavLinksRoute></h3></Link>
      <Link><AiOutlinePieChart/><h3><NavLinksRoute to='/managejobhome'>Manage Careers</NavLinksRoute></h3></Link>
      <Link><RiFileCopyLine/><h3>Projects</h3></Link>
      <Link><FaWallet/><h3>Invoices</h3></Link>
      </Links>
      <ContactContainer>
        <span>Having Trouble? Feel Free to Contact Us</span>
      </ContactContainer>
      </LinksContainerdiv>
    </Containerdiv>
    </>
  )
}

export default Sidebar;