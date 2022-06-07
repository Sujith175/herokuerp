import {  BrowserRouter, Route, Routes } from 'react-router-dom';


//routing

// import PrivateRoute from './components/routing/PrivateRoute';

//screens

import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './components/screens/ResetPassword';
import Home from './components/home/Home';
import Carrers from './components/Carrers/Carrers';
import AdminHome from './components/Admin';
import CareerManagement from './components/Admin/CareerManagement';
import ManageJobHome from './components/Admin/CareerManagement/ManageJobHome';
import ManageJobContent from './components/Admin/CareerManagement/ManageJobContent';
import AdminAddJob from './components/Admin/CareerManagement/AddJob';
import Jobupdate from './components/Admin/CareerManagement/ManageJobContent/Jobupdate';
import { useContext } from 'react';
import { Context } from './Context/Context';
import StudentPrograme from './components/StudentProgram';
import JobLists from './components/JobList';
import Single from './components/Single';
import JobRegistartion from './components/JobRegistration';
import DisplayApplication from './components/Admin/DisplayApplication';
import ViewSingle from './components/Admin/ViewSingleApplication';
import UserAppliedJob from './components/UserAppliedJobs';
import InternshipList from './components/InternshipList';
import Intern from './components/Intern';
import InternBill from './components/InternBill';
import Internn from './components/Internn';
import Singlei from './components/Singlei';
import AdminNewHome from './components/New Admin/Home/Home';
import Recruitement from './components/New Admin/Manage Recruitement/Recruitement';
import NewJob from './components/New Admin/Add Job/NewJob';
import ViewJob from './components/New Admin/Admin View Job/ViewJob';
import UpdateJob from './components/New Admin/UpdateJob/UpdateJob';
import ManageApplication from './components/New Admin/Manage Application/ManageApplication';
import ManageInternships from './components/New Admin/Manage Internship/ManageInternship';
import AddInternship from './components/New Admin/Add Internship/AddInternship';
import ViewInternship from './components/New Admin/View Internship/viewInternship';
import About from './components/AboutUs';
import OurServices from './components/OurServices';
import UpdateIntern from './components/New Admin/UpdateIntern/UpdateIntern';

const App = () => {
const {user} = useContext(Context);
  return (
   
<BrowserRouter>
  <div>
    <Routes>
   {/* <Route exact path="/private" element={<PrivateScreen/>}/> */}
<Route exact path="/forgotpassword" element={<ForgotPasswordScreen/>}/>
<Route exact path="/passwordreset/:resetToken" element={<ResetPasswordScreen/>}/>
{/* <Route exact path="/home" element={<HomeScreen/>}/> */}
<Route exact path="/register" element={user ? <Home/>: <RegisterScreen/>}/>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/login" element={user ? <Home/> : <LoginScreen/>}/>
<Route exact path="/getcarrers" element={<Carrers/>}/> 
<Route exact path="/admindash" element={<AdminHome/>}/>
<Route exact path="/adminviewjob" element={<CareerManagement/>}/>
<Route exact path="/managejobhome" element={<ManageJobHome/>}/>
<Route exact path="/managejobcontent" element={<ManageJobContent/>}/>
<Route exact path="/adminaddjob" element={<AdminAddJob/>}/>
<Route exact path="/jobupdate/:id" element={<Jobupdate/>}/>
<Route exact path="/sudentprogram" element={<StudentPrograme/>}/>
<Route exact path="/joblists" element={<JobLists/>}/>
<Route exact path="/job/:postId" element={<Single/>}/>
<Route exact path="/registerjob/:jobid" element={<JobRegistartion/>}/>
<Route exact path="/viewapplicatioins" element={<DisplayApplication/>}/>
<Route exact path="/viewfulldetails/:id" element={<ViewSingle/>}/>
<Route exact path="/userappliedjoblist" element={user ? <UserAppliedJob/>  :   <Home/>}/>
<Route exact path="/internshiplist" element={ <InternshipList/>}/>
<Route exact path="/intern/:internId" element={<Singlei/>}/>
<Route exact path="/viewbill/:id" element={ <InternBill/>}/>
{/* <Route exact path="/adminintern" element={ <ManageInternship/>}/> */}
<Route exact path="/adminhome" element={ <AdminNewHome/>}/>
<Route exact path="/recruitement" element={ <Recruitement/>}/>
<Route exact path="/addnewjob" element={ <NewJob/>}/>
<Route exact path="/admindisplayjob" element={ <ViewJob/>}/>
<Route exact path="/updatejob/:id" element={ <UpdateJob/>}/>
<Route exact path="/updateintern/:id" element={ <UpdateIntern/>}/>
<Route exact path="/displayapplication" element={ <ManageApplication/>}/>
<Route exact path="/manageinternship" element={ <ManageInternships/>}/>
<Route exact path="/addinternship" element={ <AddInternship/>}/>
<Route exact path="/viewInternship" element={ <ViewInternship/>}/>
<Route exact path="/aboutus" element={ <About/>}/>
<Route exact path="/services" element={ <OurServices/>}/>

{/* <Route exact path="/userspecificapplication" element={<DisplayCurrent/>}/> */}

    </Routes>

  </div>
</BrowserRouter>
   
  );
}

export default App;
