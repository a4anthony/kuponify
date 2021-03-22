import express from "express";
const router = express.Router();

import { protect } from "../middleware/authMiddleware.js";
import { addStore, getStores } from "../controllers/storeController.js";

router.route("/").get(protect, getStores);
router.route("/create").put(protect, addStore);

export default router;
