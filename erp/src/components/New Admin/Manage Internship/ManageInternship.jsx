import React from 'react'
import ANavbar from '../ANavbar/Navbar';
import ASidebar from '../ASidebar/Sidebar';
import { Link } from 'react-router-dom';
import '../ASidebar/Sidebar';
import '../ANavbar/Navbar';
import '../Home/Home.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ManageInternships = () => {
  

  return (
    <>
     <div className="home">
    <ASidebar/>
    <div className="homeContainer">
      <ANavbar/>
      <div className="widgets"></div>

      <div className="widget">
        <div className="left">
            
            <span className="counter">Add InternShip</span>
            <span className="title">Add InternShip</span>
            <span className="link"><Link style={{textDecoration:"none", color:"white"}} to="/addinternship">Click Here</Link></span>
            
        </div>
        <div className="right">
            <div className="percentage positive">
            <FontAwesomeIcon icon="fa-solid fa-turn-down-left" />
            
            <a className="icon"><i class="fa-solid fa-user"></i></a>
            </div>
        </div>
    </div>


      <div className="widget">
        <div className="left">
            
            <span className="counter">View InternShip</span>
            <span className="title">View InternShip</span>
            <span className="link"><Link style={{textDecoration:"none", color:"white"}} to="/viewInternship">Click Here</Link></span>
            
        </div>
        <div className="right">
            <div className="percentage positive">
            <FontAwesomeIcon icon="fa-solid fa-turn-down-left" />
            
            <a className="icon"><i class="fa-solid fa-user"></i></a>
            </div>
        </div>
    </div>



    </div>
    </div>
    </>
  )
}

export default ManageInternships