import mongoose from "mongoose";
import baseFields from "./baseFields.js";
const entertainmentSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("entertainment", entertainmentSchema);
