import connectDB from "@/lib/db";
import Project from "@/components/platform/project/model";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { title, desc, lead, status, readme, roadmap, task, contributor, material, chat } = await request.json() as { title: string, desc: string, lead: string, status: string, readme: string, roadmap: string, task: string, contributor: string, material: string, chat: string };
  console.log({ title, desc, lead, status, readme, roadmap, task, contributor, material, chat });
  await connectDB();
  await Project.create({ title, desc, lead, status, readme, roadmap, task, contributor, material, chat });
  return NextResponse.json({ message: "Project Created" }, { status: 201 });
}

export async function GET() {
  await connectDB();
  const projects = await Project.find() as unknown[];
  return NextResponse.json({ projects });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await Project.findByIdAndDelete(id);
  return NextResponse.json({ message: "Project deleted" }, { status: 200 });
}