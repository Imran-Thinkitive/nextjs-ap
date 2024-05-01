import Topic from "@/models/topic";
import connectMongoDB from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  console.log("inside post method....");
  console.log("request : ", request);

  const { title, description } = await request.json();
  console.log(title, description);

  await connectMongoDB();

  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET(request) {
  await connectMongoDB();
  const topicData = await Topic.find({});
  return NextResponse.json({ topicData });
}

export async function DELETE(request) {
  console.log("delete topic");
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Topic deleted successfully" },
    { status: 200 }
  );
}
