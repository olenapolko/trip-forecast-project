import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  name: { type: String, required: true }
});

export const CityModel = mongoose.model("City", citySchema);
