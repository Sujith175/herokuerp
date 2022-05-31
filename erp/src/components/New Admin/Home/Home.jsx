import React from 'react';
import "./Home.scss";
import ANavbar from '../ANavbar/Navbar';
import ASidebar from '../ASidebar/Sidebar';
import Widgets from '../Widgets/Widgets';

const AdminNewHome = () => {
  return (

    
    <div className="home">
    <ASidebar/>
    <div className="homeContainer">
      <ANavbar/>
      <div className="widgets">
        <Widgets/>
      </div>
    </div>
    </div>
    
  )
}

export default AdminNewHome