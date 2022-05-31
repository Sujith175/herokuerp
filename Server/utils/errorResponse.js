class ErrorResponse extends Error{  // creating an object of type error
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode
    }
}

module.exports = ErrorResponse;