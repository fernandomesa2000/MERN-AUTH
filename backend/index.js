import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to parse incoming requests: req.body
app.use(cookieParser());

app.use("/api/auth", authRoutes)


app.listen(PORT, () => {
    connectDB();
    console.log(`✅ Server running on port ${PORT}`);
});


//localhost:5173 vite
// h + enter - Help

