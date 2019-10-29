const express = require("express");
const ejs=require("ejs");

const app=express();

app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/", function(req,res){
    res.render("home");
});

app.get("/product", function(req,res){
    res.render("product");
});

app.get("/about", function(req,res){
    res.render("about");
});

app.get("/contact", function(req,res){
    res.render("contact");
});


//add en version 
app.get("/en", function(req,res){
    res.render("en/home");
});

app.get("/en/product", function(req,res){
    res.render("en/product");
});

app.get("/en/about", function(req,res){
    res.render("en/about");
});

app.get("/en/contact", function(req,res){
    res.render("en/contact");
});











app.listen( process.env.PORT || "3000", function(){
    console.log("server is on port 3000.")});



