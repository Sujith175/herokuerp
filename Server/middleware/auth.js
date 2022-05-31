//used to protect the jason web token, check the jaswt in the headers


const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

exports.protect = async (req, res, next) =>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){  //adding bearer in front of the token to understand wheather this is an authentication token
        token = req.headers.authorization.split(" ")[1]; //used to split the bearer and jwt token 
    }
    if(!token){
        return next(new ErrorResponse("Not Authorized to Access this Route Sorry", 401));
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  //verify and decrypt based on our secret key
        const user = await User.findById(decoded.id);   //id that we pass wit token as payload in user.js
        
        if(!user){
            return next(new ErrorResponse("No user Found with this ID", 404));
        }
        req.user=user; // need to store for other routes
        next();
    }catch(error){
        return next( new ErrorResponse("Sorry not authorized to access this route",401));
    }

};