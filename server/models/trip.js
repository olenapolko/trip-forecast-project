import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  cityId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'City' }, 
});

export const TripModel = mongoose.model("Trip", tripSchema);
