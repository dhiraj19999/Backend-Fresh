import mongoose from "mongoose";

const catogorySchema = new mongoose.Schema({

name:{
    type: String,
    required: true,
    
}

}, {timestamps: true});



export const Catogory= mongoose.model("Catogory", catogorySchema);