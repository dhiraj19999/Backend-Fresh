import mongoose from "mongoose";
import { type } from "os";

const doctorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    experienceInYears: { type: Number, required: true },
    workInHospital:[ { type: mongoose.Schema.Types.ObjectId, ref: "Hospital", required: true }],
})


export const Doctor = mongoose.model("Doctor", doctorSchema);