import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'

import { authRoute } from "./router/authRouter.js";
import { connectDB } from "./db/database.js";
import { messageRoute } from "./router/messageRoute.js";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials: true
}))

app.use("/api/auth", authRoute);

app.use("/api/messages", messageRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT", PORT);
  });
});
