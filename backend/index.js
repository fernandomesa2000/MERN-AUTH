import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({
    origin: process.env.NODE_ENV === "production"
        ? true // or production real domain
        : "http://localhost:5173",
}));

app.use(express.json()); // allows us to parse incoming requests: req.body
app.use(cookieParser());

app.use("/api/auth", authRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("/*splat", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}


app.listen(PORT, () => {
    connectDB();
    console.log(`✅ Server running on port ${PORT}`);
});


//localhost:5173 vite
// h + enter - Help

