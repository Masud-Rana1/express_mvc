const express = require("express");
const cors = require("cors");
const app = express();
require("./config/db");
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const userRouter = require("./routes/userRoute");

app.use("/api/users",userRouter);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/./views/index.html");
});
//handle invalid url hit
app.use((req,res,next)=>{
    res.status(404).json({message:"route not found"});
});
//handle server error
app.use((err,req,res,next)=>{
    res.status(500).json({
        message:"something went wrong"
    });
});

module.exports = app;