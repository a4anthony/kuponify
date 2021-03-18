import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import { validatorErrors } from "../validator.js";
import generateAccessToken from "../utils/generateAccessToken.js";
import mail from "../utils/mailgun.js";
import token from "../utils/generateLocalToken.js";
import jwt from "jsonwebtoken";
function userReturnObj(user) {
  return {
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      emailVerifiedAt: user.emailVerifiedAt,
    },
    token: generateToken(user._id, "30d"),
  };
}

// @description  Login user
// @route        POST /api/users/login
// @access       Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json(userReturnObj(user));
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

// @description  Register user
// @route        POST /api/users/register
// @access       Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const accessToken = generateAccessToken(email);
  const userExists = await User.findOne({ email });
  if (userExists) {
    res
      .status(422)
      .send({ message: { email: { message: "The email is already taken" } } });
  }
  let localToken = "";
  try {
    await User.count({}, function (err, count) {
      localToken = token(Number(count) + 1);
    });
    const user = await User.create({
      name,
      email,
      password,
      accessToken,
      localToken,
    });

    mail.emailVerification(email, localToken);
    res.json(userReturnObj(user));
  } catch (err) {
    console.log(err);
    res.status(422).send({ message: validatorErrors(err) });
  }
});

// @description  Verify user email
// @route        PUT /api/users/email-verification
// @access       Public
const verifyEmail = asyncHandler(async (req, res) => {
  const { email, token } = req.body;
  const userExists = await User.findOne({ email });
  if (!userExists) {
    res
      .status(422)
      .send({ message: { email: { message: "Invalid credentials" } } });
  }
  if (!token) {
    res
      .status(422)
      .send({ message: { token: { message: "User token is required" } } });
  } else if (userExists.localToken !== token) {
    res
      .status(422)
      .send({ message: { token: { message: "Tokens do not match" } } });
  } else {
    try {
      userExists.emailVerifiedAt = Date.now();
      const updatedUser = await userExists.save();
      res.json(userReturnObj(updatedUser));
    } catch (err) {
      console.log(err);
      res.status(422).send({ message: validatorErrors(err) });
    }
  }
});

// @description  Reset password mail
// @route        POST /api/users/password-reset
// @access       Public
const sendPasswordResetMail = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const userExists = await User.findOne({ email });
  if (!userExists) {
    res
      .status(422)
      .send({ message: { email: { message: "Invalid credentials" } } });
  }

  try {
    const token = generateToken(userExists._id, "30m");
    await mail.passwordReset(email, token);
    console.log(token);
    res.json({
      message: "Password reset link sent",
    });
  } catch (err) {
    console.log(err);
  }
});

// @description  Password Reset
// @route        PUT /api/users/password-reset
// @access       Public
const resetPassword = asyncHandler(async (req, res) => {
  const { email, token, password } = req.body;
  const userExists = await User.findOne({ email });
  let valid = false;
  jwt.verify(token, process.env.JWT_SECRET, (err, verifiedJwt) => {
    if (!err) {
      valid = true;
    } else {
      console.log(err);
    }
  });

  if (!userExists) {
    res
      .status(422)
      .send({ message: { email: { message: "Invalid credentials" } } });
  }
  if (!token) {
    res
      .status(422)
      .send({ message: { token: { message: "User token is required" } } });
  } else if (!valid) {
    res
      .status(422)
      .send({ message: { token: { message: "Tokens is invalid" } } });
  } else {
    try {
      userExists.password = password;
      const updatedUser = await userExists.save();
      res.json(userReturnObj(updatedUser));
    } catch (err) {
      console.log(err);
      res.status(422).send({ message: validatorErrors(err) });
    }
  }
});

export {
  loginUser,
  registerUser,
  verifyEmail,
  sendPasswordResetMail,
  resetPassword,
};
