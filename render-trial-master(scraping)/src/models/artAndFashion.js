import mongoose from "mongoose";
import baseFields from "./baseFields.js";
const artAndFashionSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("artAndFashion", artAndFashionSchema);
