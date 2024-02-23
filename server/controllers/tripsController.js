import { TripModel } from "../models/trip.js";
import { UserModel } from "../models/user.js";
import { CityModel } from "../models/city.js";

export const saveTrip = async (req, res) => {
  try {
    const { userId, name, startDate, endDate, cityId } = req.body;
    const trip = new TripModel({ name, startDate, endDate, userId, cityId });

    await trip.save();

    await UserModel.findByIdAndUpdate(userId, { $push: { trips: trip._id } });

    res.status(201).send(trip);
  } catch (error) {
    console.error("Error creating a new trip:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserTrips = async (req, res) => {
  try {
    const userId = req.user._id;
    let trips = await TripModel.find({ userId }).exec();

    trips = await Promise.all(
      trips.map(async (trip) => {
        const city = await CityModel.findById(trip.cityId)
          .select("imageUrl")
          .exec();
        const tripObject = trip.toObject();
        if (city && city.imageUrl) {
          tripObject.cityImg = city.imageUrl;
        }
        return tripObject;
      })
    );

    res.json(trips);
  } catch (error) {
    console.error("Error fetching user's trips:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
