const jwt = require("jsonwebtoken");

const HttpError = require("../models/http-errors");

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("No token provided.")
    }
    const decodedToken = jwt.verify(token, JWT_PRIVATE_KEY);
    req.userData = {userId: decodedToken.userId};
    next();
  } catch (err) {
    const error = new HttpError("Authentication failed.", 401);
    return next(error);
  }
};
