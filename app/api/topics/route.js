import Topic from "@/models/topic";
import connectMongoDB from "@/utils/mongodb";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  const { title, content } = await request.json();
  console.log(title, content);

  const topic = await prisma.topic.create({
    data: {
      title: title,
      content: content,
    },
  });
  return NextResponse.json(
    { res: topic },
    { message: "Topic Created" },
    { status: 201 }
  );
}

export async function GET(request) {
  const topicData = await prisma.topic.findMany();
  return NextResponse.json({ topicData });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  // await connectMongoDB();
  // await Topic.findByIdAndDelete(id);
  const topicData = await prisma.topic.delete({ where: { id: id } });
  return NextResponse.json(
    { message: "Topic deleted successfully" },
    { status: 200 }
  );
}


