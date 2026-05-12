//token 7252715f627057246d678bbe9a8f53e0
//amigo token 108347059670124ab7e199a5d2487282
import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({ token: process.env.MAILTRAP_TOKEN });

export const sender = {
    email: "hello@demomailtrap.co",
    name: "Mailtrap Test",
};