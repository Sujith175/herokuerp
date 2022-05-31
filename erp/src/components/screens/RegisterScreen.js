import { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import './assets/css/login.css';
import FormInput from "./FormInput";


const RegisterScreen = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
   const [type, setUser] = useState("user");
   const [error, setError] = useState("");
console.log(firstname);
    const navigate = useNavigate();


    const registerHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type" : "application/json"
            }
        }

        if(password !== confirmPassword){
            setPassword("");
            setConfirmPassword("");
            setTimeout( () => {
                setError("")
            },5000);
            return setError("Passwords Do Not Match");
        }
try{
    const{data} = await axios.post("/api/auth/register",{
        
        firstname,
        lastname,
        email,
        type, 
        password,}, config);


        alert("Registration is Successfully")
navigate("/login");
}catch(error){
        setError(error.response.data.error);
        setTimeout( () => {
            setError("")
        },5000);  
        }
    };

    return (
    <div className="main_div">
    <div className="box">
        <div className="form" name="rform">
				<h2>Register</h2>
                {error && <span className="error-message">{error}</span> }
			<form onSubmit={registerHandler}>
                <div className="inputBx">
                <input 
                        value={firstname}
                        onChange={ (e) => setFirstname(e.target.value)}
                        type="text" 
                        name="firstname" 
                        id="username"
                        placeholder="First Name" 
                        required
                       
                        />
                        <img src={require("./assets/images/email.png")} width="20px" height="20px" alt=""></img>
                        </div>

                     <div className="inputBx"> 
                        <input 
                        value={lastname}
                        onChange={ (e) => setLastname(e.target.value)}
                        type="text" 
                        name="username" 
                        id="username"
                        placeholder="Last Name" 
                        required>
                        </input>
							<img src={require("./assets/images/email.png")} width="20px" height="20px" alt=""></img>
					</div>

                    <div className="inputBx"> 
                        <input 
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                        type="text" 
                        name="email" 
                        id="email"
                        placeholder="Email-Id" 
                        required>
                        </input>
							<img src={require("./assets/images/email.png")} width="20px" height="20px" alt=""></img>
						</div>

                    <div className="inputBx">
							<input 
                            id="password"
                            value={password}
                            onChange={ (e) => setPassword(e.target.value)}
                            type="password" 
                            name="password" 
                            placeholder="Enter new Password" 
                            required
                            >
                            </input>
							<img src={require("./assets/images/lock.png")} width="20px" height="20px" alt=""></img>
						</div>

                    <div className="inputBx">
							<input 
                            value={confirmPassword}
                            onChange={ (e) => setConfirmPassword(e.target.value)}
                            id="confirmpassword"
                            type="password" 
                            name="password2" 
                            placeholder="Confirm Password" 
                            required>
                            </input>
							<img src={require("./assets/images/lock.png")} width="20px" height="20px" alt=""></img>
						</div>
                        


                        <div className="inputBx">
							<input type="submit" value="Signup" name="signup"></input>
						</div>

            </form>	
				<p>Already Have an Account?<Link to="/login">Login</Link></p>	
			</div>			
		</div>  
        </div>    
    );  
};

export default RegisterScreen;