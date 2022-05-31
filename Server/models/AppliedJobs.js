const mongoose = require('mongoose');

const ApplyJobSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    photo:{
        type: String,
        required: true,
    },
    mobilenumber:{
        type: String,
        required: true,
    },
    qualification:{
        type: String,
        required:true,
    },
    degree:{
        type: String,
        required: true,
    },
    mark:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
        jobtitle:{
            type: String,
            required:true
        },
        status:{
            type: String,   
        },
        dateofbirth:{
            type: Date,
        }
    

},{timestamps: true}
);


const AppliedJobs = mongoose.model("AppliedJobs", ApplyJobSchema);
module.exports =  AppliedJobs;