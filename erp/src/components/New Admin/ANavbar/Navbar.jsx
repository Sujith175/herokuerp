import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const ANavbar = () => {

  const navigate = useNavigate();
  const logoutHandler = () =>{
    localStorage.removeItem("authToken");
    navigate('/login');
    };



  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </div>
        <div className="items">
          <div className="item">
            Support
          </div>
          <div className="item">
            dashBoard
          </div>
          <div className="item">
          <button className='navbtn' onClick={logoutHandler}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ANavbar