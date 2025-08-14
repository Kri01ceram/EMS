// src/config/db.js
import mongoose from "mongoose";

export async function connectDB(uri) {
  try {
    // Optional: turn on query debug logs in dev
    if (process.env.NODE_ENV !== "production") {
      mongoose.set("debug", true);
    }

    await mongoose.connect(uri, {
      // modern mongoose no longer needs many legacy options
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000
    });

    console.log("✅ MongoDB connected:", mongoose.connection.host);

    // Graceful shutdown
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log("🔌 MongoDB connection closed (SIGINT).");
      process.exit(0);
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
}
