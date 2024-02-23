import express from "express";
const router = express.Router();
import {
  googleAuth,
  googleCallback,
  getUser,
  logoutUser,
} from "../controllers/authController.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

router.get("/google", googleAuth);

router.get("/google/callback", googleCallback);

router.get("/me", authenticateToken, getUser);

router.get("/logout", authenticateToken, logoutUser);

export default router;
