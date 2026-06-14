import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Job from "./models/Job.js";
import sampleJobs from "./data/sampleJobs.js";

dotenv.config();

const seedDatabase = async () => {
  await connectDB();
  await Job.deleteMany({});
  await Job.insertMany(sampleJobs);
  console.log("Database seeded successfully");
  process.exit(0);
};

seedDatabase();
