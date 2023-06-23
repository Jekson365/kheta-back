import { ProductSchema } from "../schema/Product.js";


export const DeleteProducts = async (req, res) => {
    try {

        const deletedItem = await ProductSchema.findByIdAndDelete({ _id: req.params.id })
        // await ProductSchema.deleteMany({})
        res.status(200).send("item deleted")
    }
    catch (err) {

        throw err

    }
}