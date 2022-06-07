const mongoose = require ('mongoose');

const connectDB = async() =>{
    await mongoose.connect(process.env.MONGODB_URI,{
        useUnifiedTopology: true,
    });
    console.log("mongoDb connected");
}
module.exports = connectDB;