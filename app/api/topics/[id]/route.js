import connectMongoDB from "@/utils/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newContent: content } = await request.json();
  // connectMongoDB();
  // const data = await Topic.findByIdAndUpdate(id, { title, description });
  const updatedUser = await prisma.topic.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      content: content,
    },
  });
  return NextResponse.json(
    { message: "topic updated successfully" },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  const { id } = params;
  const topic = await prisma.topic.findFirst({
    where: {
      id: id,
    },
  });
  return NextResponse.json({ topic: topic }, { status: 200 });
}

