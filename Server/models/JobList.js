const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobListSchema = new Schema({

    jobtitle: {
        type: String,
        required: true,
        unique : true
    },

    userid:{
        type: String
    },

    jobdescription: {
        type : String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    enddate:{
        type: Date,
        required: false,
    },

    requiredskills: {
        type: String,
        required: false,
    },

    salary:{
        type: String,
        required: false,
    },

    JobType: {
        type: String,
        required: false,
    },

    requirements:{
        type: String,
        required: true,
    },

    categories:{
        type: String,
        required: false
    },
    status:{
        type: String,
        default: "active"
    }

},{timestamps: true}
);

const Joblist = mongoose.model('jobList',jobListSchema);

module.exports = Joblist;