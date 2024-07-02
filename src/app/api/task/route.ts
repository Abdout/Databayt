import connectDB from "@/lib/db";
import Task from "@/components/platform/task/model";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { title, club, skill, team, status, priority, duration, remark } = await request.json() as { 
    title: string, 
    club: string, 
    skill: string[], 
    team: string[],
    status: string,
    priority: string,
    duration: number,
    remark: string
  };

  console.log({ title, club, skill, team, status, priority, duration, remark });
  
  await connectDB();
  
  const task = new Task({
    title,
    club,
    skill,
    team,
    status,
    priority,
    duration,
    remark
  });
  
  await task.save();
  
  return NextResponse.json({ message: "Task Created" }, { status: 201 });
}

export async function GET() {
  await connectDB();
  const tasks = await Task.find() as unknown[];
  return NextResponse.json({ tasks });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await Task.findByIdAndDelete(id);
  return NextResponse.json({ message: "Task deleted" }, { status: 200 });
}