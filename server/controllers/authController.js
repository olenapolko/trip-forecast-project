import { google } from "googleapis";
import { UserModel } from "../models/user.js";
import jwt from "jsonwebtoken";
import "dotenv/config.js";

const { sign } = jwt;

export const googleAuth = (req, res) => {
  const authClient = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "http://localhost:8000/auth/google/callback"
  );

  const scopes = [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
  ];

  const url = authClient.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });
  res.status(200).json(url);
};

export const googleCallback = async (req, res) => {
  try {
    if (!req.query.code) {
      throw new Error("The code to authorize the user was not provided");
    }

    const authClient = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      "http://localhost:8000/auth/google/callback"
    );

    const { tokens } = await authClient.getToken(req.query.code);
    authClient.setCredentials(tokens);

    const oauth2 = google.oauth2({
      auth: authClient,
      version: "v2",
    });

    const userInfo = await oauth2.userinfo.get();

    let user = await UserModel.findOne({ email: userInfo.data.email });

    if (!user) {
      user = await UserModel.create({
        email: userInfo.data.email,
        authProvider: "Google",
        name: userInfo.data.name,
        picture: userInfo.data.picture,
      });
    }

    const accessToken = sign({ sub: user._id }, process.env.JWT_SECRET);

    res.cookie("accessToken", accessToken, { httpOnly: true });
    return res.redirect("http://localhost:3000");
  } catch (error) {
    console.error("Error in Google callback:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getUser = (req, res) => {
  if (req.user) {
    res.json({ isLoggedIn: true, user: req.user });
  } else {
    res.json({ isLoggedIn: false });
  }
};

export const logoutUser = (req, res) => {
  res.clearCookie("accessToken", { httpOnly: true, path: "/" });
  res.status(200).json({ message: "Logged out successfully" });
};
