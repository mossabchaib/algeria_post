import mongoose, { Schema, models } from "mongoose";
const Client_ShoppingSchema = new Schema({
  title :{
    type: String,
    required: true,
  },
  color:{
    type: String,
    required: true,
  },
  size :{
    type: String,
    required: true,
  },
  id :{
    type: String,
    required: true,
  },

}, )

const ClientinformationSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  numiro_client:{
    type: String,
    required: true,
  },
  city:{
    type: String,
    required: true,
  },
  State:{
    type: String,
    required: true,
  },
  Address:{
    type: String,
    required: true,
  },
  card_shoping :{
    type :Client_ShoppingSchema,
    required: true,
  }
  },
  { timestamps: true }
);

const client = models.client || mongoose.model("User", ClientinformationSchema);
export default client