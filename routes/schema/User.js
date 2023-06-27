import mongoose from "mongoose";

export const UserSchema = new mongoose.model("users", {
    username: String,
    password: String
})