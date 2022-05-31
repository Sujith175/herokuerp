const express = require('express')
const router = express.Router();
const {register, getname, getJobs, getJobById, updateJobs, deleteJob, postJob, getApplications, 
getApplicationsById, addLocation, getLocation,setNotification, getDetails, updateStatus,
 getapplicationByEmail, postIntern, getIntern, postInternBill, getBillById, getBillByUserId, updateCount, getJobsSearch, getInternShipById} = require("../controllers/auth");
const {login,forgotpassword,resetpassword, registerJob} = require("../controllers/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/getname").post(getname);
router.route("/getjoblist").get(getJobs);
router.route("/getjoblist/:id").get(getJobById);
router.route("/updatejob/:id").patch(updateJobs);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:resetToken").put(resetpassword);
router.route("/deletejob/:id").patch(deleteJob);
router.route("/postjob").post(postJob);
router.route("/registerjob").post(registerJob);
router.route("/getapplication").get(getApplications);
router.route("/getapplication/:id").get(getApplicationsById);
router.route("/addlocation").post(addLocation);
router.route("/getlocation").get(getLocation);
router.route("/setNotification").post(setNotification);
router.route("/getDetails").post(getDetails);
router.route("/updatestatus/:id").patch(updateStatus);
router.route("/getapplicationbyemail").post(getapplicationByEmail);
router.route("/addinternship").post(postIntern);
router.route("/getinternship").get(getIntern);
router.route("/postBill").post(postInternBill);
router.route("/getBillbyuserid/:id").get(getBillByUserId);
router.route("/getBillbyid/:id").get(getBillById);
router.route("/getjobsearch").get(getJobsSearch);
router.route("/admingetinternbyid/:id").get(getInternShipById);
// router.route("/updatecount/:id").patch(updateCount);







module.exports = router;