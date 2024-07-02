import connectDB from "@/lib/db";
import Project from "@/components/platform/project/model";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const { newTitle: title, newDesc: desc, newLead: lead, newStatus: status, newReadme: readme, newRoadmap: roadmap, newTask: task, newContributor: contributor, newMaterial: material, newChat: chat } = await request.json() as { newTitle: string, newDesc: string, newLead: string, newStatus: string, newReadme: string, newRoadmap: string, newTask: string, newContributor: string, newMaterial: string, newChat: string };
  await connectDB();
  await Project.findByIdAndUpdate(id, { title, desc, lead, status, readme, roadmap, task, contributor, material, chat });
  return NextResponse.json({ message: "Project updated" }, { status: 200 });
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectDB();
  const project = await Project.findById(id);
  return NextResponse.json({ project }, { status: 200 });
}