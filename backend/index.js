const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 5000;

const User = require("./modules/user");
var bodyparser = require("body-parser");

const user_routes = require("./routes/user");



const uri = "mongodb://localhost:27017/hackathon?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";


mongoose.connect(uri,()=>{
    console.log("connected to database successfully");
})

app.use(bodyparser.json());
app.listen(port,()=>{
    console.log("connected to express server")
})



app.get('/',(req,res)=>{
    res.send("hello welcome to node")
});

app.use("/user",user_routes);

