import express from "express";
import {
  createJob,
  deleteJob,
  getJobById,
  getJobs
} from "../controllers/jobController.js";

const router = express.Router();

router.get("/", getJobs);
router.post("/", createJob);
router.get("/:id", getJobById);
router.delete("/:id", deleteJob);

export default router;
