import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const PrivateScreen =(history) =>{
    const [error, setError] = useState(""); 
    const [privateData, setPrivateData] = useState(""); 
    const navigate = useNavigate();
    useEffect (() =>{
        if(!localStorage.getItem("authToken")){
            navigate("/login");
        }


        const fetchPrivateData = async () => {
            const config = {
                headers : {
                    "Content-Type" : "application/json",
                    Authorization : `Bearer ${localStorage.getItem("authToken")}`
                }
            }

            try{
                const {data}  = await axios.get("/api/private",config);
                setPrivateData(data.data);
            }catch(error){
                localStorage.removeItem("authToken");
                setError("You Are Not Authorized Please Login");
            }
        }
        fetchPrivateData();
    },  [history]);

    const logoutHandler = () =>{
        localStorage.removeItem("authToken");
        history.push("/login");
    };



    return error ? (    
 <span className="error-message">{error}</span>
) : (
<>
<div style={{background: "green", color:"white"}}>{privateData}</div>
<button onClick={logoutHandler}>Logout</button>
</>
    );
};

export default PrivateScreen;