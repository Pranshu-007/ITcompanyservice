const mongoose = require("mongoose");

// const uri = "mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(uri)

const URI = process.env.MONGODB_URI;

const connectDb = async () =>{
    try {
        console.log("Checking Connection to DataBase");
        await mongoose.connect(URI);
        console.log("Connections Successful to DataBase");
    } catch (error) {
        console.error("database connnection failed :" , error);
        process.exit(0);
    }
};

module.exports = connectDb;