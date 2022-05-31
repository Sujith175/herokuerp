// error handler used to catch error from next in our server.js
const ErrorResponse = require("../utils/errorResponse");


const errorHandler= (err, req, res, next) =>{  //used to build error messages
    let error = {...err}; //spread the error
    error.message = err.message

    console.log(err);   // to view which error

    if(err.code === 11000){     //in mongoose this means duplicate error key
        const message = `Duplicated Field Value Entered`;
        error = new ErrorResponse(message, 400); //400 bad request
    }

    if(err.name === "ValidationError"){
        const message = Object.values(err.errors).map((val) => val.message);    // maping each value of erroes to message 
        error = new ErrorResponse(message, 400);
    }

    //checking the status code from the error handlers above
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error"
    });
}

module.exports = errorHandler;