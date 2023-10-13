import mongoose from "mongoose";
import baseFields from "./baseFields.js";
const scienceAndTechSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("scienceAndTech", scienceAndTechSchema);
