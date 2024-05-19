import { NextResponse } from "next/server";
import client from "@/Models/information_client";
import connectMongoDB from "@/utile/ConectMongodb";
export async function POST(req:Request) {
  try {
    const {firstName,lastName, email,numiro_client,city ,State,Address,card_shoping } = await req.json();
  console.log(firstName,lastName, email,numiro_client,city ,State,Address,card_shoping )
await connectMongoDB()
//=====================
await client.create( {firstName,lastName, email,numiro_client,city ,State,Address,card_shoping })
 return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
export async function GET(){
  
}