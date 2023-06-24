import mongoose from "mongoose";



export const ProductSchema = mongoose.model("Product", {
  title: String,
  price: Number,
  id: Number,
  image: String,
  desc: String,
  category: String,
});
