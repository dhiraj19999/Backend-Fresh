import mongoose from "mongoose";
const orderItemSchema=new mongoose.Schema({
    productId:{ type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,},
    quantity:{ type: Number,required: true,}})


    const orderSchema = new mongoose.Schema({
orderPrice:{
    type: Number,
    required: true,
},
orderItems:{type: [orderItemSchema],},
customer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,},
    address:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        enum: ["pending", "completed", "cancelled"],
        default: "pending",
    },

}, {timestamps: true});


const Order= mongoose.model("Order", orderSchema);

export default Order;