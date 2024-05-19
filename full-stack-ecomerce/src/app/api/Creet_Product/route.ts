import { NextResponse } from "next/server";
import User from "@/Models/user";
import connectMongoDB from "@/utile/ConectMongodb";
//  import bcrypt from "bcryptjs";
export async function POST(req:Request) {
  try {
    const {title,price ,Category  ,description  ,image } = await req.json();  
await connectMongoDB()
await User.create( {  title,price ,Category  ,description  ,image})
      return NextResponse.json({ message: "product creet" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while product." },
      { status: 500 }
    );
  }
}