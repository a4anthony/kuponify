import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import { validatorErrors } from "../validator.js";
function userReturnObj(user) {
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    businessName: user.businessName,
    token: generateToken(user._id),
  };
}

var ValidationErrors = {
  REQUIRED: "required",
  NOTVALID: "notvalid",
  /* ... */
};

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
  const { name, email, password, businessName } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(422).send({ email: { message: "The email is already taken" } });
  }

  try {
    const user = await User.create({
      name,
      email,
      password,
      businessName,
    });
    res.json(userReturnObj(user));
  } catch (err) {
    res.status(422).send(validatorErrors(err));
  }
});

export { loginUser, registerUser };