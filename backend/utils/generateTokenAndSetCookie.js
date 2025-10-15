import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (user, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });
}