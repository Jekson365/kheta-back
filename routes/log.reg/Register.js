import { UserSchema } from "../schema/User.js"

export const RegisterRoute = async (req, res) => {
    try {
        const newUser = await UserSchema({
            username: req.body.username,
            password: req.body.password
        }).save()
 
    }
    catch (err) {
        throw err
    }
}