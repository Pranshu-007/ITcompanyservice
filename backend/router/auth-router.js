const express = require("express");
const router = express.Router();
const authcontroller = require("../controller/auth-controller");
const signupschema = require("../validator/auth-validator");
const validate = require("../middilewares/validate-middleware");
const authMiddleware = require("../middilewares/auth-middleware");


// app.get("/",(req,res)=>{
//     res.status(200).send("Welcome to the home page");
// });


// with help of router

router.route("/").get(authcontroller.home);
router.route("/register").post(validate(signupschema),authcontroller.register);
router.route("/login").post(authcontroller.login);
router.route("/user").get(authMiddleware,authcontroller.user);

module.exports = router;