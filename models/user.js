const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
    },

    role: {
        type: String,
        enum: ["buyer", "retailer"],
        required: true,
     },

     businessName:{
        type:String,
     },

     businessLicense:{
        type:String,
     },

     address:{
        type:String,
     },

     contactPhone:{
        type:String,
     },

});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);