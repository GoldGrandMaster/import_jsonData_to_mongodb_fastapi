import mongoose from "mongoose";
import baseFields from "./baseFields.js";
const sportSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("sport", sportSchema);
