const mongoose = require("mongoose");

const InternShipBillSchema = new mongoose.Schema(
    {
       internshipid:{
           type: String,
           required: true
       } ,

       programname:{
           type: String,
           required: true
       },
       username:{
           type: String,
           required: true
       },
       price:{
           type: String,
           required: true
       },

       userid:{
        type: String,
        required: true
       },

       email:{
           type: String,
           required: true
       },
    },{timestamps: true}

);
const InternShipBills = mongoose.model('InternShipBills',InternShipBillSchema);

module.exports = InternShipBills;