const express = require("express");
 const app = express();
 const mongoose = require("mongoose");
 const MONGO_URL = "mongodb://127.0.0.1:27017/NEGOTIATION";
 const Listing = require("./models/listings.js");
 const path = require("path");

 main().then(()=>{
    console.log("Connected to DB");
 }).catch(err =>{
    console.log(err);
 });
 async function main(){
    await mongoose.connect(MONGO_URL);
 }

 app.set("view engine", "ejs");
 app.set("views", path.join(__dirname, "views"));

 app.get("/listings", async(req, res)=>{
   const allListings = await Listing.find({});
   res.render("listings/index.ejs", {allListings});
 });

//  app.get("/testListing", async(req,  res)=>{
//    try{
//       let sampleListing = new Listing ({
//          title:"Canon",
//          model:"1920cc",
//          price:80909,
//          description:"Aewssome",
//       });
   
//       await sampleListing.save();
//       console.log("sample listing was saved!");
//       res.send("Data saved!");   
//    }catch(err){
//       console.log("error while saving listing", err);
//       res.status(500).send("failed to save data");
//    }
//  })

 app.get("/", (req, res)=>{
    res.send("Hi I am root!");
 });

 app.listen(8086, ()=>{
    console.log(`app is listening to the port 8086`);
 })