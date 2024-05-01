import connectMongoDB from "@/utils/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";


export async function PUT(request,{params}){
     const {id} = params;
     const {newTitle:title,newDescription:description} = await request.json();
     connectMongoDB();
     console.log(title,description);
     const data = await Topic.findByIdAndUpdate(id,{title,description});
     console.log(data);
     return NextResponse.json({message:'topic updated successfully'},{status:200});
}

export async function  GET(request,{params}) {
    const {id} = params;
    connectMongoDB();
    const topic = await Topic.findOne({_id:id});
    return NextResponse.json(topic,{status:200});
}