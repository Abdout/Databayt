
import Article from "@/components/root/article/model";
import connectDB from "@/lib/db";

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { title, desc, body, image, author, slug, catSlug } = await request.json() as { title: string, desc: string, body: string, image: string, author:string, slug: string, catSlug: string };
  console.log({ title, desc, body, image, author, slug, catSlug });
  await connectDB();
  await Article.create({ title, desc, body, image, author, slug, catSlug });
  return NextResponse.json({ message: "Article Created" }, { status: 201 });
}

export async function GET() {
  await connectDB();
  const articles = await Article.find() as unknown[];
  return NextResponse.json({ articles });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await Article.findByIdAndDelete(id);
  return NextResponse.json({ message: "Article deleted" }, { status: 200 });
}