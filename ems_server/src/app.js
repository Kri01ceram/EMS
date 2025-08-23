// src/app.js
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

// Health check
app.get("/health", (_req, res) => {
  res.json({ ok: true, uptime: process.uptime() });
});

// API routes
app.use("/api/users", userRoutes);

export default app;
