
import express from "express";
import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import e from "express";


dotenv.config();
app.use(cors({origin:process.env.CORS_ORIGIN,credentials:true}));

app.use
(express.json({limit:"17kb",extended:true}));
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));







connectDB().then(()=>{
    app.listen(process.env.PORT||8080,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("MONGODB connnection failed",err);
})