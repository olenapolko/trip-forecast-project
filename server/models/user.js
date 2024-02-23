import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: false },
  authProvider: { type: String, required: true },
  trips: [{ type: mongoose.Schema.Types.ObjectId, ref: "Trip" }],
  picture: { type: String, required: false },
});

export const UserModel = mongoose.model("User", userSchema);