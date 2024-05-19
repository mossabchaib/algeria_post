import User from "@/Models/user";
import connectMongoDB from "@/utile/ConectMongodb";
export async function POST(req:Request) {
    try {
        const {  email } = await req.json();
   
    await connectMongoDB()
const user=User.findOne(email);
return user;
     
      }catch (error) {
console.log(error)
      }
}