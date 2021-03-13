// @description  Set cookie
// @route        GET /api/cookie/set
// @access       Public
import asyncHandler from "express-async-handler";
import { getUser } from "../utils/getUser.js";

const setCookie = asyncHandler(async (req, res) => {
  res
    .status(202)
    .cookie("_.token", req.param("token"), {
      sameSite: "strict",
      path: "/",
      expires: new Date(new Date().getTime() + 3000000 * 1000),
      httpOnly: true,
    })
    .send("cookie being initialised");
});

// @description  Get cookie
// @route        GET /api/cookie/get
// @access       Public
const getCookie = asyncHandler(async (req, res) => {
  try {
    const user = getUser(req, res);
    console.log(user);
  } catch (err) {
    console.log(err);
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

// @description  Delete cookie
// @route        GET /api/cookie/delete
// @access       Public
const deleteCookie = asyncHandler(async (req, res) => {
  res.status(202).clearCookie("_.token").send("cookies cleared");
});

export { setCookie, deleteCookie, getCookie };
