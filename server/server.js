import app from "./app.js";
import mongoose from "mongoose";
import { saveCitiesToDatabase } from "./helpers/dbSeeder.js";

const uri = process.env.MONGODB_URI;

async function connect() {
  try {
    await mongoose.connect(uri);
    await saveCitiesToDatabase();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
