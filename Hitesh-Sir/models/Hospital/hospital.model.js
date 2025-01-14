import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    addEress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    doctors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }],
    patients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Patient" }],
    speciality: {
        type: String,
        required: true,
    },
}, 


{ timestamps: true
})  

export const Hospital = mongoose.model("Hospital", hospitalSchema);