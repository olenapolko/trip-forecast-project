import express from "express";
import cors from "cors";
import tripRoutes from "./routes/tripRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import citiesRoutes from "./routes/cityRoutes.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/cities", citiesRoutes);

export default app;
