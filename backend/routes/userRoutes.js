import express from "express";
const router = express.Router();

import {
  loginUser,
  registerUser,
  verifyEmail,
} from "../controllers/userController.js";

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/email-verification", verifyEmail);

export default router;
