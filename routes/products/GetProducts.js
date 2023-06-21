import { ProductSchema } from "../schema/Product.js";

export const GetProducts = async (req, res) => {
  try {
    const result = await ProductSchema.find({});

    res.send(result)

  } catch (err) {
    
    throw err;
  }
};
