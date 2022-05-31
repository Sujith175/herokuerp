import React from 'react'
import { useState,useEffect } from 'react';
import Navbar from '../Navbar for Pages';
import Sidebar from '../Sidebar';
import { MarginSetterNav } from '../Carrers/CarrerElements';
import {Form, FormGroup, FormStep, TextCenter, FormInput, FileInput, FileButton, Splitright ,Wrapper, Embed, Label,Submit,Select, EmbedWrapper } from './JobregistrationElements';
import Footer from '../Footer';
import { Context } from '../../Context/Context';
import { useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Grid,Paper,Avatar } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SelectUnstyled } from '@mui/base';
import { useLocation } from 'react-router-dom';
import { Input } from '@mui/material';
import { RiContactsBookLine } from 'react-icons/ri';


const JobRegistartion = () => {


const countryData = [
    {
        country:"India",
        state:["Mumbai", "Banglore","Delhi","Kerala","Hyderabad","Andhra Pradesh","Haryana","Manipur","Sikkim","Arunachal Pradesh","Himachal Pradesh",
    "Chhattisgarh","Goa","Gujarat","Punjab","TamilNadu","Telangana","Odisha" ]
    },
    {
        country:"USA",
        state:["ohio","California","Texas","Florida","Washington","Alaska","Virginia","Georgia","Montana","Arizona","North California", "New Jersey","Colorado","Michigan","New York"]
    },
    {
        country:"Canada",
        state:["Alberta", "British Columbia", "Manitoba", "New Brunswick", "NewFoundland","Nova Scotia","Prince Edward Island"]
    },
    {
        country:"Japan",
        state:["Hokkaidō Hokkaidō","Tōhoku. Aomori","Iwate. Miyagi","Akita","Kantō Ibaraki","Tochigi","Gunma","Saitama","Chiba"]
    }
]

const qualificationData = [
    {
        qualification:"Masters",
        degree:["MCA", "MBA", "MTECH","MSC"]
    },
    {
        qualification:"Under Graduate",
        degree:["BCA", "BBA", "Btech" ,"BSC Computer Science","BBM", "BSC Mathematics"]
    },
    {
        qualification:"Diploma",
        degree:["Computer Science", "Commerce", "Electrical & Electronics"]
    },

]




// console.log(country);

const paperStyle ={padding: 20, height: '100vh', width: 400, margin:"20px auto"}
const Navigate = useNavigate();

const {jobid} = useParams();
    // console.log(jobid);
const {user, dispatch} = useContext(Context);

const [isOpen, setIsOpen] = useState(false);

const[dateofbirth, setDateofBirth] = useState("");
const[fullname, setFullname] = useState("");
const[file, setFile] = useState("");
const[url,setUrl] = useState("");
const[mobilenumber,setMobileNumber] = useState("");
// const[qualification,setQualification] = useState("");
// const[degree,setDegree] = useState("");
const[mark,setMark] = useState("");
const[userid,setUserId] = useState("");
const[email,setEmail] = useState("");
const[status,setStatus] = useState("pending");
const [{country, state}, setCountry] = useState({
    country:"",
    state:""
});

const [{qualification, degree}, setQualification] =useState({
    qualification:"",
    degree:""
});



const location = useLocation();
const[post , setPost] = useState();
const[jobtitle, setJobtitle] = useState("");
const path = location.pathname.split("/")[2];





useEffect(() => {
    const getPost = async () =>  {
      try{
      const res = await axios.get("/api/auth/getjoblist/" + path);
      const datas = res.data.joblist.jobtitle;
      
     setJobtitle(datas);

      }catch(err){
        console.log(err);
      }
    };
    getPost();
    setUserId( user._id);
   setFullname(user.firstname + "" + user.lastname);
   setEmail(user.email);
  }, [path]);



const loadDetails=()=>{
    axios.post('/api/auth/getDetails',{email:user.email}).then((response)=>{
        // console.log(response.data);
        if(response.data){
            setMobileNumber(response.data.mobilenumber);
            setMark(response.data.mark);
            setUrl(response.data.photo);
            setFullname(response.data.fullname);
            setUserId(response.data.userid);
            setCountry(response.data.country);
            setCountry(response.data.state);
            setQualification(response.data.qualification);
            setQualification(response.data.degree);
            // setStatus("pending");
            // setState(response.data.state);
        }
});

}

const postDetails = () =>{
    const data = new FormData();
    data.append("file",file)
    data.append("upload_preset", "intadaErp")
    data.append("cloud_name", "codemd");

    fetch("https://api.cloudinary.com/v1_1/codemd/image/upload/",{
        method:'POST',
        body: data
    })
    .then(res=>res.json())
    .then(data=>{
        setUrl(data.secure_url);
    })
    .catch(err=>{
        console.log(err)
    });
console.log(url);
}
// const submitHandler = async (e) =>{
    
   
 
//     e.preventDefault();
  
//     const stat = await fetch("http://localhost:5000/api/auth/registerjob",{
//         method: "post",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             fullname,
//             photo : url,
//             mobilenumber,
//             qualification,
//             degree,
//             mark,
//             userid,
//             country,
//             state,
//             email,
//             jobtitle,
//             status:"pending",
//             dateofbirth,
//         })

//     }).then(res=>res.json())
//     .then(data=>{
//        if(stat){
//            console.log(data);
//          alert("Applied Successfully");}
//        Navigate("/joblists");
//     }).catch(err=>{
//         // if(err.status === 401){console.log("already applied");}
//         // console.log("error");
//         console.log(err)
//     })
    
// }


const submitHandler = async (e) => {
    e.preventDefault();

    const config = {
        header: {
            "Content-Type" : "application/json"
        }
    }


    await axios.post("/api/auth/registerjob",{
        fullname,
            photo : url,
             mobilenumber,
            qualification,
            degree,
            mark,
            userid,
            country,
             state,
             email,
            jobtitle,
            status:"pending",
            dateofbirth,
        
    
    }).then((response)=>{
        console.log(response.data);

        if(response.data)
        {
            alert ("Applied Successfully");
            Navigate("/joblists");
        }
        else{
            // alert("Something Went Wrong");
            // Navigate("/adminaddjob");
            console.log("failed")
        }
})

}  




    const toggle = () => {
        setIsOpen(!isOpen);
      };
     
      const count = countryData.map((country) =>
            (<option key={country.country} value={country.country}>{country.country}</option>)
      );
      const stat = countryData.find(item => item.country === country)?.state.map((state) =>(
            <option key={state} value={state}>{state}</option>
      ));

      function handleCountryChange(event){
          setCountry(data=>({state: "", country:event.target.value}));
      }
      function handlestateChange(event){
          setCountry(data=>({...data, state:event.target.value}));
      }
    
      const quali = qualificationData.map((qualification) =>
      (<option key={qualification.qualification} value={qualification.qualification}>{qualification.qualification}</option>)
);

      const degr = qualificationData.find(item => item.qualification === qualification)?.degree.map((degree) =>(
        <option key={degree} value={degree}>{degree}</option>
  ));

  function handlequalificationChange(event){
    setQualification(data=>({degree: "", qualification:event.target.value}));
}
function handledegreeChange(event){
    setQualification(data => ({...data, degree:event.target.value}));
}
  return (
//     <>
//     <MarginSetterNav/>
//     <Sidebar isOpen={isOpen} toggle={toggle}/>
//    <Navbar toggle={toggle} />
//    <MarginSetterNav/>
//    <button onClick={loadDetails}>load</button>

//    <Form enctype='multipart/form-data' onSubmit={submitHandler}> 
//     <TextCenter>Details</TextCenter>
//     <FormStep>
//         <FormGroup>
           
//             {/* <FormInput type="text"   name="fullName" onChange={(e) => setFullname(e.target.value)} placeholder="Full Name"/> */}
//             <FormInput type="text" value={mobilenumber} name="Mobile Number" onChange={(e) => setMobileNumber(e.target.value)} placeholder="Mobile Number" required/>
//             <Select onChange={(e) => setQualification(e.target.value)} value={qualification} required>
//                 <option value="">Select Your Qualification</option>
//                 <option value="Diploma">Diploma</option>
//                 <option value="UnderGraduate">UnderGraduate</option>
//                 <option value="Masters">Masters</option>
//             </Select>
//             <br></br>
//             <Select onChange={(e) => setDegree(e.target.value)} required value={degree}>
//                 <option value="">Select Your Degree</option>
//                 <option value="BCA">BCA</option>
//                 <option value="BSC">BSC</option>
//                 <option value="MCA">MCA</option>
//             </Select>
//             <FormInput type="text"  name="mark" value = {mark} onChange={(e) => setMark(e.target.value)} placeholder="Your CGPA" required/>
//            <Label>Upload Your resume</Label> <FileInput  type="file" name="file" onChange={(e) =>setFile(e.target.files[0])}/>
          
//             <FileButton type="button" onClick = {()=>postDetails()}>Upload</FileButton>
            
//         </FormGroup>
        
//     </FormStep>
//     <Submit type="submit" value="submit"/>
//     </Form>
//     { url && <Embed src={url}/>}
//     <MarginSetterNav/>
//     <Footer/>
//     </>


<>

<MarginSetterNav/>
<Sidebar isOpen={isOpen} toggle={toggle}/>
<Navbar toggle={toggle} />
<MarginSetterNav/>
<Splitright>
<EmbedWrapper>
        { url && 
        <Embed width= "300px" height="300px" src={url}/> 
        }
         { url && 
        <p style={{
        marginLeft: "70%"}}>Your resume</p>
        }
        </EmbedWrapper>
        </Splitright>
       
<Wrapper>
<Grid>
    
    <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
            
            <h2>Application</h2>
        </Grid>
        <Grid style={{marginTop:"10%"}}>
       <span style={{fontSize:"10px"}}> Seems like you Applied Before,AutoFill your details </span> <Button onClick={loadDetails} style={{marginBottom:"5%", backgroundColor:"#cfd4e5"}}>AutoFill</Button>
        <form encType='multipart/form-data' onSubmit={submitHandler} >  

        <TextField label="Mobile Number"
        placeholder="Enter Mobile Number" 
         fullWidth value={mobilenumber} 
         name="Mobile Number" 
         onChange={(e) => setMobileNumber(e.target.value)} 
         required />
        <Wrapper>

        <Select onChange={ handleCountryChange} 
        value={country} 
        required
        >
        <option disabled value="">Select Country</option>
        {
          count
        }
              
        </Select>

        <Select onChange={handlestateChange} value={state} required>
        <option disabled value="">Select State</option>
        {
        stat
            }
        </Select>

        </Wrapper>
        <Wrapper>
        <Select onChange={handlequalificationChange} value={qualification} required>
            <option disabled value="">Select Your Qualification</option>
            {
                quali
            }
                     
        </Select>
   
        <Select onChange={handledegreeChange} value={degree} required>                
        <option disabled value="">Select Your Degree</option>                
            {
                degr
            }
        </Select>
        </Wrapper>

        <TextField label="Degree CGPA"
         placeholder="Enter Your CGPA"
          fullWidth name="mark" 
          value = {mark}
        onChange={(e) => setMark(e.target.value)} 
        required/>

        <Input style={{paddingTop:"5%"}} type="date" label="Date of Birth"
          fullWidth name="dateofbirth" 
          value = {dateofbirth}
        onChange={(e) => setDateofBirth(e.target.value)} 
        required/>

        <Label style={{marginTop:"5%"}}>Upload Your resume</Label> 
        <FileInput style={{backgroundColor:"white", color:"black"}} 
        type="file" 
        name="file" 
        onChange={(e) =>setFile(e.target.files[0])}
        />

        <Button style={{marginTop:"5%", marginLeft:"2%"}} variant="outlined" onClick = {()=>postDetails()}>Upload</Button>
        <Grid>
        {/* <Submit type="submit" value="submit"/> */}
        <Button type="submit" style={{marginTop:"10%", marginLeft:"30%"}} variant="outlined">Submit</Button>
        
        </Grid>
        </form>
        </Grid>   
     

      
    </Paper>
</Grid>
</Wrapper>
 <MarginSetterNav/>
<Footer/>
</>
  )
}

export default JobRegistartion;