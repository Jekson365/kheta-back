import { SECRET_KEY } from "../../server.js"
import { UserSchema } from "../schema/User.js"
import jwt from 'jsonwebtoken'


export const LogInRoute = async (req, res) => {
    try {
        console.log(req.body)

        const user = await UserSchema.findOne(req.body)
        if (user) {
            const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });
            res.status(200).json({token})
        }
        else {
            res.status(404).json("not found")
            
        }
    }
    catch (err) {
        throw err
    }
}