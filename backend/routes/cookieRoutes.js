import express from "express";
const router = express.Router();

import {
  deleteCookie,
  getCookie,
  setCookie,
} from "../controllers/cookieController.js";

router.get("/set", setCookie);
router.get("/get", getCookie);
router.get("/delete", deleteCookie);

export default router;
