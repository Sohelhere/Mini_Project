const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new  Schema ({
    title:{
        type:String,
        required:true,

    },
    model:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        default:
            "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
        set:(v)=>
            v === ""
            ? "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D" : v,   
    },
    price:{
        type:Number,
        required:true,
    },
    description:String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;