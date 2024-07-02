import connectDB from "@/lib/db";
import Task from "@/components/platform/task/model";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const { newProject: project, newTitle: title, newClub: club, newSkill: skill, newTeam: team, newStatus: status, newPriority: priority, newDuration: duration, newRemark: remark } = await request.json() as { 
    newProject: String,
    newTitle: string, 
    newClub: string, 
    newSkill: string[], 
    newTeam: string[],
    newStatus: string,
    newPriority: string,
    newDuration: number,
    newRemark: string
  };
  await connectDB();
  await Task.findByIdAndUpdate(id, { project, title, club, skill, team, status, priority, duration, remark });
  return NextResponse.json({ message: "Task updated" }, { status: 200 });
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectDB();
  const task = await Task.findById(id);
  return NextResponse.json({ task }, { status: 200 });
}