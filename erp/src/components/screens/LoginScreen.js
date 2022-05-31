import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import './assets/css/login.css'
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import { useRef } from 'react';
import { useForkRef } from '@mui/material';

const LoginScreen = ({ }) =>{
    const navigate = useNavigate();

const {dispatch, isFetching} = useContext(Context) ;   
const[email, setEmail] = useState("");
const[password, setPassword] = useState("");
const [deal, setDeal] = useState('');


// useeffect is used to check wheather a user is logged in or not
// once logged in the user need not go to login page again

useEffect( () =>{
    if(localStorage.getItem("authToken")){
      navigate('/home');
    }
});


const LoginHandler = async (e) =>{

e.preventDefault();
console.log(email);
console.log(password);
dispatch({type: "LOGIN_START"});
  
    try{
         axios.post("/api/auth/login",{
            email : email,
            password: password,
        }).then((res)=>
        {
            console.log(res);
        
        console.log(res);
        if(res.data.type === 'user'){
         dispatch({type: "LOGIN_SUCCESS", payload: res.data});
        }
        else if(res.data.type === 'admin'){
            localStorage.setItem("user", res.data.type);
            navigate('/adminhome');
        }
        else{
            console.log("error");
        }
    });
    }catch (error){
        console.log(error);
        setDeal(String(error));


    //    console.log(error.response.data)
    //     console.log(deal);
        setTimeout( () =>{      //resetting the error
            setDeal("");
        }, 5000);
        
    }
    console.log(deal);
};


return (
    <div className="main_div">
    <div className="box">
        <div className="form">
				<h2>Login</h2>
                 <p className="error-message">{deal}<br></br></p> 
                
					<form name="r_form" onSubmit={LoginHandler}>
						<div className="inputBx"> 
                        <input 
                        onChange={(e)=>{setEmail((e.target.value))}}
                        type="text" 
                        name="email" 
                        id="email"
                        placeholder="Email-Id" 
                        tabIndex={1}
                        required>

                        </input>
							<img src={require("./assets/images/email.png")} width="20px" height="20px" alt=""></img>
						</div>
                        <div className="inputBx">
							<input 
                            id="password"
                            onChange={(e)=>{setPassword((e.target.value))}}
                            type="password" 
                            name="password" 
                            placeholder="Enter password" 
                            tabIndex={2}
                            required
                            >
                                  
                            </input>
							<img src={require("./assets/images/lock.png")} width="20px" height="20px" alt=""></img>
						</div>
                        <div className="inputBx">
							<input type="submit" tabIndex={3} value="Login" name="login"></input>
						</div>

                        </form>	
                        <p>Forget Password<Link to="/forgotpassword" tabIndex={4}>Forgot Password</Link></p>		
				<p>Don't Have an Account?<Link to="/register">Register</Link></p>	
			</div>			
		</div>  
        </div>       
)
}

export default LoginScreen;
