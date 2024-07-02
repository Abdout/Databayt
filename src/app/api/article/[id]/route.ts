import connectDB from "@/lib/db";
import Article from "@/components/root/article/model";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const { newTitle: title, newDesc: desc, newBody: body, newAuthor: author, newImage: image, newSlug, newCatSlug: catSlug } = await request.json() as { newTitle: string, newDesc: string, newBody: string, newImage: string, newAuthor:string, newSlug: string, newCatSlug: string };
  await connectDB();
  await Article.findByIdAndUpdate(id, { title, desc, body, image, author, slug: newSlug, catSlug });
  return NextResponse.json({ message: "Article updated" }, { status: 200 });
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectDB();
  const article = await Article.findById(id);
  return NextResponse.json({ article }, { status: 200 });
}