const User = require("../models/User.Model");
const jwt = require("jsonwebtoken");

const AuthMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.Token;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access Denied. No Token Provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = AuthMiddleware;
