import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.js";

export const authenticateToken = (req, res, next) => {
  const token =
    req.cookies.accessToken || req.headers.authorization?.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
    if (err) return res.sendStatus(403);

    try {
      const user = await UserModel.findById(decodedToken.sub).exec();

      if (!user) {
        return res.sendStatus(404);
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("Error fetching user from DB:", error);
      res.sendStatus(500);
    }
  });
};
