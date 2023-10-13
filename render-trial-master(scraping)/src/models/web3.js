import mongoose from "mongoose";
import baseFields from "./baseFields.js";
const web3Schema = new mongoose.Schema({
  ...baseFields,
});

export default mongoose.model("web3", web3Schema);
