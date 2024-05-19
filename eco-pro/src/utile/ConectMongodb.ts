
 import mongoose from "mongoose";

 const connection:any = {};

  const connectMongoDB = async () => {
   try {
     if (connection.isConnected) return;
     const db = await mongoose.connect("mongodb+srv://mossab:1234562004@cluster0.pxqiwps.mongodb.net/?retryWrites=true&w=majority");
     console.log("connect")
     connection.isConnected = db.connections[0].readyState;
   } catch (error) {
     console.log(error)
  
   }
 };
 export default connectMongoDB;
 //ESPr4QHOq8un09lm
// mongodb+srv://mossab:mossab2023@cluster0.kmqnpyt.mongodb.net/User

