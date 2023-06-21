import { ProductSchema } from "../schema/Product.js";

export const PostProducts = async (req, res) => {
  try {
    const newProd = await ProductSchema({
      path:
        "file:///C:/Users/DAVIT/Desktop/kheta-back/images/" +
        req.files[0].filename,
      ...req.body,
    }).save()
    res.send({
      path:
        "file:///C:/Users/DAVIT/Desktop/kheta-back/images/" +
        req.files[0].filename,
      ...req.body,
    });
  } catch (err) {
    throw err;
  }
};
