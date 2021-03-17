import express from "express";
const router = express.Router();

import {
  home,
  invoice,
  submit,
  validate,
} from "../controllers/mailController.js";

router.get("/", home);
router.get("/submit/:mail", submit);
router.get("/validate/:mail", validate);
router.get("/invoice/:mail", invoice);

export default router;
