const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();

function createToken(user) {
  return sign(
    {
      email: user.email,
      userPassword: user.userPassword,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "2h",
    }
  );
}

// verify token
function verifyToken(req, res, next) {
  try {
    console.log("Get token from req.headers['authorization']");
    const token = req.headers["authorization"];
    console.log(token);
    next();
  } catch (err) {
    res.json({
      status: res.statusCode,
      message: err.message,
    });
  }
}

module.exports = {
  createToken,
  verifyToken,
};
