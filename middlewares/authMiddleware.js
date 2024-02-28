const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel");

//protected route
const requireSignIn = async (req, res, next) => {
    try {
      const decode = JWT.verify(
        req.headers.authorization,
        process.env.JWT_SECRET
      );
      console.log(decode); // Log the decoded payload
      req.user = decode;
      next();
    } catch (error) {
      console.log(error);
    }
};

//admin access
const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !=='1') {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};

module.exports = { requireSignIn, isAdmin };