import { NextResponse } from "next/server";
import User from "@/Models/user";
import connectMongoDB from "@/utile/ConectMongodb";
//  import bcrypt from "bcryptjs";
export async function POST(req:Request) {
  try {
    const {firstname,lastName, email, password,job } = await req.json();  
    console.log(firstname,lastName, email, password,job) 
await connectMongoDB()
await User.create( {firstname,lastName, email, password,job })
      return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}