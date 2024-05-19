import mongoose, { Schema, models } from "mongoose";

const AdminSchema = new Schema(
  {
 
   email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;