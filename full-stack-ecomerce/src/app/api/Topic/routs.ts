import connectMongoDB from "src/utile/ConectMongodb";
import Topic from "src/Models/topic";
import { NextResponse } from "next/server";

export async function POST(Request: Request) {

      const { title, description } = await Request.json();

try {
        const newTopic=new Topic({ title, description });
        await connectMongoDB();

    await newTopic.save()

      return NextResponse.json({ message: "Topic Created" }, { status: 201 });

} catch (error) {
    
console.log(error)
}
 

}

// export async function GET() {
//   await connectMongoDB();
//   const topics = await Topic.find();
//   return NextResponse.json({ topics });
// }

// export async function DELETE(request:any) {
//   const id = request.nextUrl.searchParams.get("id");
//   await connectMongoDB();
//   await Topic.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
// }