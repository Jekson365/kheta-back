import express from "express";
import { GetProducts } from "./routes/products/GetProducts.js";
import { LogInRoute } from "./routes/log.reg/Login.js";
import { RegisterRoute } from "./routes/log.reg/Register.js";
import dotenv from "dotenv";
import { mongoose } from "mongoose";

const app = express();

dotenv.config();
app.use(express.json());

app.get("/products/getall", GetProducts);
app.post("/auth/login", LogInRoute);
app.post("/auth/register", RegisterRoute);

async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("success!");
  } catch (err) {
    throw err;
  }
}

app.listen(8080, () => {
  try {
    mongoose.connect(process.env.MONGO);
    connectToDb();
  } catch (err) {
    throw err;
  }
});
