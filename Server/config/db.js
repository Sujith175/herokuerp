const mongoose = require ('mongoose');

const connectDB = async() =>{
    await mongoose.connect("mongodb+srv://erpweb:sujith123@cluster0.xargmoa.mongodb.net/?retryWrites=true&w=majority",{
        useUnifiedTopology: true,
    });
    console.log("mongoDb connected");
}
module.exports = connectDB;
