const express = require("express");
 const app = express();
 const mongoose = require("mongoose");
 const ejsMate = require("ejs-mate");
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
 app.engine('ejs', ejsMate);

 app.get("/listings", async(req, res)=>{
   const allListings = await Listing.find({});
   res.render("listings/index.ejs", {allListings});
 });
 
 app.get("/", (req, res)=>{
    res.send("Hi I am root!");
 });

 app.listen(8086, ()=>{
    console.log(`app is listening to the port 8086`);
 })