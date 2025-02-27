import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  resumeContent: String,
});

export default mongoose.models.Resume || mongoose.model("Resume", ResumeSchema);
