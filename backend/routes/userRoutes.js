import express from "express";
const router = express.Router();

import {
  loginUser,
  registerUser,
  resetPassword,
  sendPasswordResetMail,
  verifyEmail,
} from "../controllers/userController.js";

router.post("/login", loginUser);
router.post("/register", registerUser);
router.put("/email-verification", verifyEmail);
router.route("/password-reset").post(sendPasswordResetMail).put(resetPassword);

export default router;
