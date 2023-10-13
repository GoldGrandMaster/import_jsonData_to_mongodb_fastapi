import mongoose from "mongoose";
import baseFields from "./baseFields.js";
const lawAndCrimeSchema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("lawAndCrime", lawAndCrimeSchema);
