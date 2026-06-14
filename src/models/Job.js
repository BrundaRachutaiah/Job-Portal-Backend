import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    companyName: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    salary: { type: Number, required: true },
    jobType: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    qualifications: { type: [String], default: [] }
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
