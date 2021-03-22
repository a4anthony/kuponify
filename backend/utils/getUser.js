import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

function userReturnObj(user, token) {
  return {
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      businessName: user.businessName,
    },
    token,
  };
}

const getUser = asyncHandler(async (req, res) => {
  const rawCookies = req.headers.cookie.split("; ");
  const parsedCookies = {};
  rawCookies.forEach((rawCookie) => {
    const parsedCookie = rawCookie.split("=");
    // parsedCookie = ['myapp', 'secretcookie'], ['analytics_cookie', 'beacon']
    parsedCookies[parsedCookie[0]] = parsedCookie[1];
  });

  let _id = "";
  jwt.verify(
    parsedCookies["_.token"],
    process.env.JWT_SECRET,
    (err, verifiedJwt) => {
      if (!err) {
        _id = verifiedJwt.id;
      }
    }
  );
  if (_id) {
    const user = await User.findById(_id);
    console.log(user);
    if (user) {
      res.json(userReturnObj(user, parsedCookies["_.token"]));
    } else {
      res.status(401).send("Invalid credentials");
    }
  } else {
    res.status(401).send("Invalid credentials");
  }
});

export { getUser };
