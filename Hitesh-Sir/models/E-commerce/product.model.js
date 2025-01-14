import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    name:{  
        type: String,
        required: true,
    },
    productImage:{
        type: String,
        required: true,
    },
    price:{ 
        type: Number,
        required: true,
    },
    catgory:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Catogory",
        required: true,
    },
    owner:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {timestamps: true});


export const Product= mongoose.model("Product", productSchema);