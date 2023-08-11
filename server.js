 const express = require("express");
 app = express();
 const mongoose = require("mongoose");
 mongoose.connect("mongodb+srv://krishnapal789:kk789@cluster0.jh8ps5r.mongodb.net/viewdb").then()
 {
    app.get("/",function(req,res){
        res.send("this is the home page");
     });
     app.get("/notes",function(req,res){
        res.send("this is the notes page");
     });
 };
 



 app.listen(5000,function(){
    console.log("Server Started at Port :5000")
 })

