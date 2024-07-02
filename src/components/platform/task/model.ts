import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    project: String,
    title: String,
    club: String,
    skill: [String],
    team: [String], 
    status: { type: String, enum: ['on progress', 'stuck', 'done'] },
    priority: { type: String, enum: ['high', 'medium', 'low'] },
    duration: Number,
    remark: String,
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;