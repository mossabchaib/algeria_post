import UserAdmin from "@/Models/topic";
import connectMongoDB from "./ConectMongodb";

export const fetchUsers = async () => {
  try {
      connectMongoDB()
      const admin = await UserAdmin.find();
     return admin;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch users!");
    }
  };
  