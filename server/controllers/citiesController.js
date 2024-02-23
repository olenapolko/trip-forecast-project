import { CityModel } from "../models/city.js";

export const getAllCities = async (req, res) => {
  try {
    const cities = await CityModel.find();
    res.json(cities);
    console.log(cities);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving cities from database", error });
  }
};
