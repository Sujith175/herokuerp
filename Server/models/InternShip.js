const mongoose = require("mongoose");

const InternShipSchema = new mongoose.Schema(
    {
       name:{
           type: String,
           required: true
       } ,

       description:{
           type: String,
           required: true
       },
       rate:{
           type: String,
           required: true
       },

       requiredskills:{
        type: String,
        required: true
       },

       timeperiod:{
           type: String,
           required: true
       },
       numberofopenings:{
           type: Number,
           required: true
       }


    },{timestamps: true}

);
const InternShip = mongoose.model('InternShip',InternShipSchema);

module.exports = InternShip;