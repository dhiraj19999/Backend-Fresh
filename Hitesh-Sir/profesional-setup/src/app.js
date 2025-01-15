

import express from "express";



import cookieParser from "cookie-parser";
import cors from "cors";
const app=express();


app.use(cors({origin:process.env.CORS_ORIGIN,credentials:true}));

app.use
(express.json({limit:"17kb",extended:true}));
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));




//  Routes
import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users",userRouter);




export default app;