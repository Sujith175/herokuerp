const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required:[true, "Please provide firstname"],
        match:[
            /^[A-Za-z]+$/,
            "Name Can't be Numbers"
        ],
     
    },

    lastname:{
        type: String,
        required:[true, "Please provide a lastname"],
        match:[
            /^[A-Za-z]+$/,
            "Name Can't be Numbers"
        ],
    },

    email:{
        type: String,
        required:[true, "Please provide an email"],
        unique: true,
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please Provide a Valid Email Address"
        ],
    },

    type:{
        type: String
    },


    password:{
        type: String,
        required: [true, "Please Add a Password"],
        minlength: 6,
        // match:[
        //     /^[A-Za-z]\w{7,14}$/,
        //     "Password must be 7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter"
        // ],
        // when ever we query for a user we dont need his password back 
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date
});

// //password encryption using mongoose middleware
// UserSchema.pre("save", async function(next){
//     if(!this.isModified("password")){
//         next();
//     }
//     const salt = await bcrypt.genSalt(10); // higher the number more secure
//     this.password = await bcrypt.hash(this.password, salt) //hashing
//     next(); //to save the hased password
// });  //the pre will run some presum functions. run it before it get saveed

 //function to check the password in controllers-auth.j
//   UserSchema.methods.matchPasswords = async function(password){
// return await bcrypt.compare(password, this.resetPasswordToken); //this.password is password from schema
//     }

//generate token which used in function sendToken inside controllers->auth

//  UserSchema.methods.getSignedToken = function(){ //using json webtoken and return a signed token
//     return jwt.sign({id: this._id}, process.env.JWT_SECRET,{
//          expiresIn: process.env.JWT_EXPIRE,
//         }); //payload is id feild
//  };

 //forgot password token generation

 UserSchema.methods.getResetPasswordToken = function(){
    const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 10 *(60 * 1000); //date to the future calc gives 1 min

    return resetToken;  //passing updated password to database
 };

const User = mongoose.model("user", UserSchema);

module.exports = User;

//TO generate a jwt secret key -> require('crypto').randomBytes(35).toString("hex")-> run it in terminal