// src/routes/user.routes.js
import { Router } from "express";
import { userRegister } from "../controllers/user.controller.js";

const router = Router();

// router.get("/", getUsers);
router.post("/", userRegister);

export default router;
