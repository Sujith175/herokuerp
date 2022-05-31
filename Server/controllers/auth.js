const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const User = require('../models/User');
const Joblist = require('../models/JobList');
const AppliedJobs = require('../models/AppliedJobs');
const bcrypt = require('bcryptjs');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const Location = require('../models/Locations');
const InternShip = require('../models/InternShip');
const InternShipBills = require('../models/internshipBills');

exports.register= async (req, res, next) => {
    try{
        console.log(req);
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            type: req.body.type,
            password: hashedPass,
        
        })
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(error){
        next(error);
        
    }
};

exports.getDetails = async(req,res,next) => {
    console.log(req.body);
    const useremail = req.body.email;
    let userDetails;
    try{
    userDetails = AppliedJobs.find({email:useremail},function(err,result){
        if(err){
            console.log(console.error)
        }
        else if(!result[0]){
            res.status(404).json({message:"Requested details not found"})
            
        }
        else{
            res.status(200).json(result[0]);

        }
    }).sort({updatedAt: -1});
    }catch(err){
        console.log(err);
        return next();
    }
};

exports.getJobsSearch = async(req, res, next) =>{

   let jobs = await Joblist.find();
    const {q} = req.query;
    const keys =["jobtitle","salary","location"]
    const search = (data) => {
        return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
        );
    };
    res.json(search(jobs));
};


exports.getJobs = async(req, res, next) =>{
    let jobs;
    try{
        jobs = await Joblist.find();
    }catch(err){
        console.log(err);
        return next();
    }
    if(!jobs){
        return res.status(404).json({message:'No Jobs Available'})
    }
    res.status(200).json({jobs: jobs});
};

exports.getIntern = async(req, res, next) =>{
    let intern;
    try{
        intern = await InternShip.find();
    }catch(err){
        console.log(err);
        return next();
    }
    if(!intern){
        return res.status(404).json({message:'No Interns Available'})
    }
    res.status(200).json({intern: intern});
};

exports.postJob = async(req, res) => {
    const newPost = new Joblist(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(error){
        res.status(500).json(error);
    }
}
exports.postIntern = async(req, res) => {
    const newIntern = new InternShip(req.body);
    try{
        const savedIntern = await newIntern.save();
        res.status(200).json(savedIntern);
    }catch(error){
        res.status(500).json(error);
    }
}
exports.postInternBill = async(req, res) => {
    const newInternBill = new InternShipBills(req.body);
    try{
        const savedBill = await newInternBill.save();
        res.status(200).json(savedBill);
        // console.log(savedBill);
    }catch(error){
        res.status(500).json(error);
        console.log(error);
    }
}

exports.setNotification = async(req, res) => {
    const userid = req.body.userid;
    const notification =req.body.notification;
    try{
        User.updateOne({_id:userid},{notifications:notification},function(err){
            if(err){
                console.log(err);
                res.send({updateStatus:'fail'});
            }
            else{
                res.send({updateStatus:'success'});  
            }
        })
        
    }catch(error){
        res.status(500).json(error);
    }
}

exports.updateJobs = async(req, res, next) => {
    const jobId = req.params.id;
             
    const { jobtitle, jobdescription, location, enddate, requirements, salary, categories  } = req.body;
    let joblist;
    try{
        joblist = await Joblist.findByIdAndUpdate(jobId,{
            jobtitle,
            jobdescription,
            location,
            enddate,
            requirements,
            salary,
            categories,
        });
    }catch(err){
        console.log(err);
        return next();
}
try{
    joblist = await joblist.save();
}catch(err){
    console.log("saving Failed", err);
    return next();
}
res.status(200).json({joblist: joblist})
}

exports.getJobById = async(req,res,next) => {
    const jobId = req.params.id;
    let joblist;
    try{
        joblist = await Joblist.findById(jobId);
    }catch(err){
        console.log(err);
        return next();
    }

    if(!joblist){
        res.status(404).json({message:"Requested Job not found"})
    }
    res.status(200).json({joblist: joblist,
    });
};


exports.getInternShipById = async(req,res,next) => {
    const InternId = req.params.id;
    let Internlist;
    try{
        Internlist = await InternShip.findById(InternId);
    }catch(err){
        console.log(err);
        return next();
    }

    if(!Internlist){
        res.status(404).json({message:"Requested Internship not found"})
    }
    res.status(200).json({Internlist: Internlist,
    });
};


exports.getInternById = async(req,res,next) => {
    const internid = req.body.id;
    let Internlist
    try{
        Internlist = await InternShip.findById(internid);
    }catch(err){
        console.log(err);
        return next();
    }

    if(!Internlist){
        res.status(404).json({message:"Requested Job not found"})
    }
    res.status(200).json({Internlist: Internlist,
    });
};
exports.getBillById = async(req,res,next) => {
    const internbillid = req.body.id;
    let Internbilllist
    try{
        Internbilllist = await InternShipBills.findOne(internbillid);
        console.log(Internbilllist);
    }catch(err){
        console.log(err);
        return next();
    }

    if(!Internbilllist){
        res.status(404).json({message:"Requested Bill not found"})
    }
    res.status(200).json({Internbilllist: Internbilllist,
    });
};

exports.getBillByUserId = async(req,res,next) => {
    const userid = req.body.id;
    let Internbillbyid
    try{
        Internbillbyid = await InternShipBills.findOne(userid);
    }catch(err){
        console.log(err);
        return next();
    }

    if(!Internbillbyid){
        res.status(404).json({message:"Requested Bill with this user is not found"})
    }
    else{
    res.status(200).json({Internbillbyid: Internbillbyid,
    
    });
}
};

exports.getname = async(req,res,next) =>{
    //res.send("getname Route");
    const email = req.body.email; //extract information from body app.use extract.body
    try{
        const user1 = await User.findOne({email});
//console.log(user1.username);
res.send({name:user1.username}) ;
 }catch(error){
        next(error); // using middleware error
    }
};

exports.login = async(req, res) =>{ //databse request must be async function
try{
    // const {email, password, type} =req.body;
    
    const user = await User.findOne({email: req.body.email});
    console.log(user);
    !user && res.status(400).json("invalid Credentials");
    const validated = await bcrypt.compare( req.body.password, user.password);
    
    !validated && res.status(400).json("Invalid Credentials");
    
    // const {password, ...others} = user._doc;
    validated && res.status(200).json(user);
    }
   
catch(error){
    console.log(error);
    res.status(500).json(error);
}
};

exports.getapplicationByEmail = async(req, res) => {
    console.log(req.body);
    try{
        const email = req.body.email;
        console.log(email);
        const application = await AppliedJobs.find({email:email});
        console.log(application);
        // !application && res.status(400).json("Invalid Credentials");
        res.status(200).json(application);
    }catch(error){
        res.status(500).json(error);
    }
};

exports.forgotpassword = async (req,res,next) =>{``
    const {email} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return next(new ErrorResponse("Sorry Email Could not be sent",404));
        }
        const resetToken = user.getResetPasswordToken();

        await user.save();//save the token to the database

        //reset url
        const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;   // sending password to the frontend

        const message = `
        <h1>You have requested reset</h1>
        <p>Please go this link to reset your password</p>
        <a href = ${resetUrl} clicktracking=off>${resetUrl}</a>
        `
//sending email
       try{
            await sendEmail({
                to: user.email,
                subject: "requested to reset your password",
                text: message
            });

        res.status(200).json({ success: true, data: "Email send Successfully"});
       } catch(error){
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save();
        return next(new ErrorResponse("Sorry Email Could not be send",500));
       }

    }catch(error){
        next(error);
    }
};

exports.resetpassword =async (req,res,next) =>{
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");    //recreating the reset token, we pass from the link routes,auth.js

     try{
            const user = await User.findOne({
                resetPasswordToken,
                resetPasswordExpire:{$gt: Date.now()}   //greater than now date for valid
            })

            if(!user){
                return next(new ErrorResponse("Invalid reset Token", 400))
            }

            user.password = req.body.password; //sending password
            user.resetPasswordToken = undefined;    //already used it 
            user.resetPasswordToken = undefined;

            await user.save();

            res.status(201).json({
                success: true,
                data: "password Reset Successfully"
            });
     }  catch(error){
        next(error);
     }      
};

// exports. deleteJob = async(req, res, next)=> {
// const jobId = req.params.id;
// let joblist;
// try{
//     joblist = await Joblist.findByIdAndRemove(jobId);
// }catch(err){
//     console.log(err);
//     return next(err);
// }
// if(!joblist){
//     return res.status(400).json({message:"Requested job cannot be removed"});

// }
// res.status(200).json({message:"Job Deleted Successfully"});
// };

exports. deleteJob = async(req, res, next)=> {
    const jobId = req.params.id;
    const  status  = req.body.status;
    let joblist
    try{
        joblist = await Joblist.findByIdAndUpdate(jobId,{
            status:status,
        });
    }catch(err){
        console.log(err);
        return next(err);
    }
    if(!joblist){
        return res.status(400).json({message:"Requested job cannot be removed"});
    
    }
    else {
        try{
            joblist = await joblist.save();
        }catch(err){
            console.log("Delete Failed", err);
            return next();
        }
    }
    res.status(200).json({joblist: joblist});
    };

exports. registerJob = async(req, res, next) => {
try{
    
  const newFile = new AppliedJobs({
      fullname: req.body.fullname,
      photo: req.body.photo,
      mobilenumber: req.body.mobilenumber,
      qualification: req.body.qualification,
      degree: req.body.degree,
      mark: req.body.mark,
      country: req.body.country,
      state: req.body.state,
      email: req.body.email,
      jobtitle: req.body.jobtitle,
      status: req.body.status,
      dateofbirth: req.body.dateofbirth
      
  });
//   console.log(req.body);



   await newFile.save(function(err,docs){
      if(err){
          console.log(err); 
    }
    else{ res.status(200).json(docs);  

        }
})
}catch(err){
    console.log(err);
}
};


exports.addLocation = async(req, res, next) =>{
    try{
        const newLoc = new Location(req.body);
        const loc = await newLoc.save();
        res.status(200).json(loc);

    }catch(err){
        res.status(500).json(err);
    }
}



exports.getLocation = async(req, res, next) =>{
    let location;
    try{
        location = await Location.find();
        res.status(200).json(location);
    }catch(err){
        console.log(err);
        return next();
    }
}

exports. getApplications =async(req, res, next) =>{
    let application;
    try{
        application = await AppliedJobs.find();
    }catch(err){
        console.log(err);
        return next();
    }
    if(!application){
        return res.status(404).json({message:'No Applications Found'})
    }
    res.status(200).json(application);
};



exports. getApplicationsById = async (req, res) => {
    try{
        const application = await AppliedJobs.findById(req.params.id);
        res.status(200).json(application);
    }catch(err){
        res.status(500).json("Requested application not found");
    }
}


exports.updateStatus = async(req, res, next) => {
    const applicationid = req.params.id;
    const  status  = req.body.status;
    let applicationlist;
    try{
        applicationlist = await AppliedJobs.findByIdAndUpdate(applicationid,{
            status:status
        });
    }catch(err){
        console.log(err);
        return next();
}
try{
    applicationlist = await applicationlist.save();
}catch(err){
    console.log("saving Failed", err);
    return next();
}
const CLIENT_ID = '1031686616057-8eb8b8beps5dr49jkjc5p5sq5u3ag8ij.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04TOBS-w59GhfCgYIARAAGAQSNwF-L9IrnsQSq6qmkyqR-m5XZh46cnPFMkY91wLY3yHbOTkamABEEPn32CzjokIeG7KEW0gqPWA';

if(applicationlist.status === "Accepted"){
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
  );
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'sujithkumar.sk175@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'SENDER NAME <sujithkumar.sk175@gmail.com>',
      to: String(applicationlist.email),
      subject: 'Notfication from Intada',
      text: 'Congratulations',
      html: `<h1>Regrads from HR Team Intada, Congratulations, You have been shortlisted For ${applicationlist.jobtitle} post, You will receive an Interview Schedule soon from our HR Team 
      , Thank you</h1>`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log(error.message));
res.status(200).json({applicationlist: applicationlist})
}
else if(applicationlist.status === "Sorry Your Skills Doesn,t Match Our Requirements"){
    const oAuth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLEINT_SECRET,
        REDIRECT_URI
        );
      oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
      
      async function sendMail() {
        try {
          const accessToken = await oAuth2Client.getAccessToken();
      
          const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: 'sujithkumar.sk175@gmail.com',
              clientId: CLIENT_ID,
              clientSecret: CLEINT_SECRET,
              refreshToken: REFRESH_TOKEN,
              accessToken: accessToken,
            },
          });
      
          const mailOptions = {
            from: 'SENDER NAME <sujithkumar.sk175@gmail.com>',
            to: String(applicationlist.email),
            subject: 'Notfication from Intada',
            text: 'Congratulations',
            html: `<h1>Regrads from HR Team Intada, We have Checked Your Application for  ${ applicationlist.jobtitle} , Our Requirements didn,t Match your Skill set, Best of Luck</h1>`,
          };
      
          const result = await transport.sendMail(mailOptions);
          return result;
        } catch (error) {
          return error;
        }
      }
      
      sendMail()
        .then((result) => console.log('Email sent...', result))
        .catch((error) => console.log(error.message));
      res.status(200).json({applicationlist: applicationlist})

}
}
// exports.updateCount = async(req, res, next) => {
//     const internid = req.params.id;
//     const  status  = req.body.status;
//     let count;
//     try{
//         count = await InternShip.findByIdAndUpdate(internid,{
//             status:status
//         });
//     }catch(err){
//         console.log(err);
//         return next();
// }
// try{
//     applicationlist = await applicationlist.save();
// }catch(err){
//     console.log("saving Failed", err);
//     return next();
// }
// res.status(200).json({applicationlist: applicationlist})
// }


//both the res,status are same except status code to refactor it this function is used

const sendToken = (user, statusCode, res, type) =>{
    const token = user.getSignedToken();
    res.status(statusCode).json({ success: true, token, type })
};