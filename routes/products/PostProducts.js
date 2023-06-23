import { ProductSchema } from "../schema/Product.js";

export const PostProducts = async (req, res) => {
  try {
    // await ProductSchema.deleteMany({})

    const newProd = await ProductSchema({
      image:
        '/images/' +
        req.file.filename,
      id: Math.floor(Math.random() * 1000000),
      ...req.body,
    }).save()

    res.send("success!")

  } catch (err) {
    throw err;
  }
};
