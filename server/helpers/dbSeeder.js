import { CityModel } from "../models/city.js";
import cities from "../data/cities.js";

export const saveCitiesToDatabase = async () => {
  try {
    const existingCount = await CityModel.countDocuments();
    if (existingCount === 0) {
      await CityModel.insertMany(cities);
      console.log("Cities have been saved to the database!");
    } else {
      console.log("Database already initialized with cities.");
    }
  } catch (error) {
    console.error("Error saving cities to the database:", error);
  }
};
