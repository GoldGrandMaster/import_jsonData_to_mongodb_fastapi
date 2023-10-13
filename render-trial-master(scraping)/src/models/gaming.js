import mongoose from "mongoose";
import baseFields from "./baseFields.js";
const gamingSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("gaming", gamingSchema);
