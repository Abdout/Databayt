import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    title: String,
    desc: String,
    lead: String,
    status: String,
    readme: String,
    roadmap: String,
    task: String,
    contributor: String,
    material: String,
    chat: String,
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;