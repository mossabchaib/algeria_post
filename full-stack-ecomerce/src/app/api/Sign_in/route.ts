
// import { connectMongoDB } from "@/lib/mongodb";
// import User from "@/models/user";
import { NextResponse } from "next/server";
import { connected } from "process";
import User from "@/Models/user";
import connectMongoDB from "@/utile/ConectMongodb";
//  import bcrypt from "bcryptjs";
import { NextApiRequest, NextApiResponse } from 'next';
export async function POST(req:Request) {
  try {
    const { email, password } = await req.json();
    console.log(email, password);

    await connectMongoDB();
    await User.create({ email, password });

    return NextResponse.json({ message: "تم تسجيل المستخدم." }, { status: 201 });
  } catch (error) {
    console.error('خطأ:', error);
    return NextResponse.json(
      { message: "حدث خطأ أثناء تسجيل المستخدم." },
      { status: 500 }
    );
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Fetch data from the User model (assuming it's a mongoose model)
    const data_user = await User.find();

    // Send a JSON response with the fetched data
    res.status(200).json(data_user);
  } catch (error) {
    console.error(error);

    // Handle errors and send an appropriate response
    res.status(500).json({ message: "An error occurred while fetching user data." });
  }
}