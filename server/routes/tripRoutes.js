import express from "express";
import { saveTrip, getUserTrips } from "../controllers/tripsController.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

router.get("/:userId/trips", authenticateToken, getUserTrips);
router.post("/", authenticateToken, saveTrip);

export default router;
