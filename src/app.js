import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173"
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "MCR backend is running" });
});

app.use("/api/jobs", jobRoutes);

export default app;
