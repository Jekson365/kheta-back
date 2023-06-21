import { ProductSchema } from "../schema/Product.js";

export const PostProducts = async (req, res) => {
  try {
    const newProd = await ProductSchema({
      image:
        '/images/' +
        req.files[0].filename,
      id: Math.floor(Math.random() * 1000000),
      ...req.body,
    }).save()
    res.send("success!")
  } catch (err) {
    throw err;
  }
};
