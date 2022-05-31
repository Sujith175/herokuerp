import './Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';


const ASidebar = () => {
  return (
    <div className="sidebar">
    <div className="top">
    <span className="logo">Admin@intada.com</span>
    </div>


    <div className="center">
        <ul>
            
            <li>
            {/* <a><i className="icon" class="fa-solid fa-grid-horizontal"></i></a> */}
                <span><Link style={{textDecoration:"none"}} to="/adminhome" >Dashboard</Link></span>
            </li>
            <li>
            {/* <a><i className='icon' class="fa-solid fa-briefcase"></i></a> */}
                <span><Link style={{textDecoration:"none"}} to="/recruitement" >Manage Recruitement</Link></span>
                </li>
            <li>
            <FontAwesomeIcon icon="fa-solid fa-hand-holding-dollar" />
            <span><Link style={{textDecoration:"none"}} to="" >Manage Payroll</Link></span>
                </li>
            <li>
            <FontAwesomeIcon icon="fa-solid fa-diagram-project" />
                <span><Link style={{textDecoration:"none"}} to="" >Manage Project</Link></span>
                </li>
            
        </ul>
        </div>


    {/* <div className="bottom">
    {/* <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>

    </div> */}
    </div> 
    
  )
}

export default ASidebar