require("dotenv").config();
const express = require("express");
const errormiddleware = require("./middilewares/error-middleware");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");


var corsOptions = {
    origin: "http://localhost:5173",
    method:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
  };

app.use(cors(corsOptions));

//middleware use krna hoga
app.use(express.json());

app.use("/api/auth",router);

app.use(errormiddleware);

// app.get("/",(req,res)=>{
//     res.status(200).send("Welcome to the home page");
// });

// app.get("/register",(req,res)=>{
//     res.status(200).send("Welcome to the register page")
// });

const PORT = 3000;
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at : ${PORT}`);
    });
});

