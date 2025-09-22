import express from "express";
import {
  registerUser,
  loginUser,
  forgotPassword,
} from "../controllers/AuthController";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);

export default router;
