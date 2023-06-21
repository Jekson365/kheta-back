import mongoose from "mongoose";



export const ProductSchema = mongoose.model("Product", {
  title: String,
  path: String,
  price: Number,
});
