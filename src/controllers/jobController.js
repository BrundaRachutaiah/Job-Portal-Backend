import Job from "../models/Job.js";
import sampleJobs from "../data/sampleJobs.js";

const seedJobsIfEmpty = async () => {
  const count = await Job.countDocuments();

  if (count === 0) {
    await Job.insertMany(sampleJobs);
  }
};

export const getJobs = async (_req, res) => {
  try {
    await seedJobsIfEmpty();
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createJob = async (req, res) => {
  try {
    const {
      title,
      companyName,
      location,
      salary,
      jobType,
      description,
      qualifications
    } = req.body;

    if (
      !title ||
      !companyName ||
      !location ||
      salary === undefined ||
      salary === null ||
      salary === "" ||
      !jobType ||
      !description ||
      !Array.isArray(qualifications) ||
      qualifications.length === 0
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const job = await Job.create({
      title,
      companyName,
      location,
      salary: Number(salary),
      jobType,
      description,
      qualifications
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
