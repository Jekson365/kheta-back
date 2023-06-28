import express from "express";
import { GetProducts } from "./routes/products/GetProducts.js";
import { LogInRoute } from "./routes/log.reg/Login.js";
import { RegisterRoute } from "./routes/log.reg/Register.js";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
import multer from "multer";
import cors from 'cors'
import { mongoose } from "mongoose";
import { PostProducts } from "./routes/products/PostProducts.js";
import { DeleteProducts } from "./routes/products/Deleteproduct.js";

const app = express();
const router = express.Router()

export const SECRET_KEY = process.env.KEY

// configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const timestam = Date.now();
    cb(null, `${timestam}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

dotenv.config();

app.use("/images", express.static("images"))
app.use(cors());
app.use(express.json());

app.get("/products/getall", GetProducts);
app.post("/auth/login", LogInRoute);
app.delete("/products/delete/:id", DeleteProducts)
app.post("/auth/register", RegisterRoute);
app.post("/products/postall", upload.single("image"), PostProducts);
app.post("/login", LogInRoute)
app.post('/register', RegisterRoute)



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
