import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        mongoose.connection.on("connected", () => {
            console.log(`✅ Conectado a MongoDB -> Base de datos: ${mongoose.connection.name}`);
        });

    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
        process.exit(1); // 1 is failure, 0 is success
    }
}