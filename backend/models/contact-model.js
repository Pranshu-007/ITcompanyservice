const {schema , model , default:mongoose} = require("mongoose");

const contactschema = new mongoose.schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true}, 
});

const Contact = new model ("Contact",contactschema);
module.exports = Contact;
