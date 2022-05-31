import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import './widgets.scss';
import { Link } from 'react-router-dom';

const Widgets = () => {


  return (
      <>
    <div className="widget">
        <div className="left">
            
            <span className="counter">Manage Recruitement</span>
            <span className="title">Add, View, Edit, Delete Jobs</span>
            <span className="link"><Link style={{textDecoration:"none", color:"white"}} to="/recruitement">Click Here</Link></span>
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
            
            <span className="counter">Manage Payroll</span>
            <span className="title">Manage Payroll</span>
            <span className="link"></span>
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
            
            <span className="counter">Manage Project</span>
            <span className="title">Manage Project</span>
            <span className="link"></span>
        </div>
        <div className="right">
            <div className="percentage positive">
            <FontAwesomeIcon icon="fa-solid fa-turn-down-left" />
            
            <a className="icon"><i class="fa-solid fa-user"></i></a>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default Widgets