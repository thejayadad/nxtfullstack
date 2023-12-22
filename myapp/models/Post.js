import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    owner: {type: String, required: true},
    title: String,

}, {timestamps: true})

export default mongoose?.models?.Car || mongoose.model("Car", CarSchema)