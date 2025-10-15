import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        if (!name || !email || !password) {
            throw new Error("All fields are required")
        }

        const userAlreadyExists = User.findOne({ email })
        console.log("userAlreadyExists", userAlreadyExists);

        if (userAlreadyExists) {
            return res.status(400).json({ succes: false, message: "User already exists" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString;

        const user = User.create({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationExpiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000)
        })

        await user.save();

        //JWT
        generateTokenAndSetCookie(user, user._id);

        res.status(201).json({
            succes: true,
            message: "User created successfully"
        })
    } catch (error) {
        res.status(400).json({ succes: false, message: error.message })
    }
};
export const login = (req, res) => {
    res.send("Signup route");
};
export const logout = (req, res) => {
    res.send("Signup route");
};