import React from 'react';
import '../Home/Home.scss';
import '../ASidebar/Sidebar';
import '../ANavbar/Navbar';
import './Recruitement.scss'
import ASidebar from '../ASidebar/Sidebar';
import ANavbar from '../ANavbar/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Recruitement = () => {
  return (

    <>
     <div className="home">
    <ASidebar/>
    <div className="homeContainer">
      <ANavbar/>

      <div className="widgets">
      <div className="widget">
        <div className="left">
            
            <span className="counter">Add New Job</span>
            <span className="title">Add, View, Edit, Delete Jobs</span>
            <span className="link"><Link style={{textDecoration:"none", color:"white"}} to="/addnewjob">Click Here</Link></span>
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
            
            <span className="counter">Edit Existing Job</span>
            <span className="title">Manage Payroll</span>
            <span className="link"><Link style={{textDecoration:"none", color:"white"}} to="/admindisplayjob">Click Here</Link></span>
            
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
            
            <span className="counter">Manage Application</span>
            <span className="title">Manage Project</span>
            <span className="link"><Link style={{textDecoration:"none", color:"white"}} to="/displayapplication">Click Here</Link></span>
            
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
            
            <span className="counter">Manage Internship</span>
            <span className="title">Manage Internship</span>
            <span className="link"><Link style={{textDecoration:"none", color:"white"}} to="/manageinternship">Click Here</Link></span>
            
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
    </div>
    </>
  )
}

export default Recruitement