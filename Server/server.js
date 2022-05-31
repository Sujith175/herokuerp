require('dotenv').config({path:"./config.env"});
const express= require('express');
const connectDB = require('./config/db');
const errorHandler = require("./middleware/error");
const cors = require('cors');
const multer = require("multer");
const bodyParser = require('body-parser');
const cron = require('node-cron');
const JobList = require('./models/JobList');
//connect Database
connectDB();


const app = express();

app.use(express.json()); //middleware to get data from the body


app.use(cors({
    origin : '*',
    

}))


// app.use((req, res, next) => {
//     const allowedOrigins = ['https://e-recruitment-351203.web.app'];
//     const origin = req.headers.origin;
//     if (allowedOrigins.includes(origin)) {
//       res.setHeader('Access-Control-Allow-Origin',"*");
//       res.setHeader('Access-Control-Allow-Methods: PUT, POST, OPTIONS');
//     }
//process.env.CLIENT_DOMAIN
//     return next();
//   });
//

app.use("/api/auth", require('./routes/auth')); // redirect to the auth router
app.use("/api/private", require('./routes/private'));

//Error handler should be the last piece of middleware
app.use(errorHandler);


const PORT = process.env.PORT || 5000
const server = app.listen(PORT, () =>{
    console.log(`server Running on port ${PORT}`);
});
process.on("unhandledRejection", (err,promise ) =>{
    console.log(`Logged Error:${err}`);
    server.close( () => process.exit(1));
});


// cron job

// cron.schedule('* * * * *', async function(

// ){
//     console.log("kd");
// })

cron.schedule('* * * * *', async function(
    ){
        let date =  new Date();  
        const jobs = await JobList.find({
            enddate: {
                $not : {
                    $gt : Date(date)     
    
                }
            }
        }) ;
        jobs.forEach(async element => {
          
           if( element.status === 'active'){
            // console.log("jobs found with active status");

              await JobList.updateOne({
                   _id : element._id,
    
               }, {
                 status : "inactive"  
               })
           }
        })
    });

